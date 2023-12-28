package Anarchy::Controller::News;

use base 'Mojolicious::Controller';

use strict;
use warnings;
use 5.022;
use FindBin qw($Bin);
use utf8;

no warnings 'experimental::smartmatch';

use constant ITEM_PER_PAGE => 10;

sub sections {
	my $self = shift;
	return {map {%$_} @{$self->config('sections')}};
}


sub dir {
	my $self = shift;
	return "$Bin/../content";
}

sub _slurp_file {
	my $self = shift;
	my $file = shift;

	my $s;
	my $fi;
	open $fi, '<:encoding(utf8)', $file or return $self->reply->not_found;
	$s = join '', <$fi>;
	close $fi;
	
	return $s;
}

sub load_file {
	my $self = shift;
	my $file = shift;
	
	state $cache = {};
	
	unless (exists $cache->{$file}) {
		$cache->{$file}->{content} = $self->_slurp_file($file);
		$cache->{$file}->{ts} = (stat($file))[9];
	} else {
		if ($cache->{$file}->{ts} != (stat($file))[9]) {
			$cache->{$file}->{content} = $self->_slurp_file($file);
			$cache->{$file}->{ts} = (stat($file))[9];
		}
	}
	
	return $cache->{$file}->{content};
}

sub load_index {
	my $self = shift;
	return split /\n/, $self->load_file($self->dir() . '/index.txt');
}

sub section {
	my $self 	= shift;
	my @section = @_;
	
	my @files = ();	

	my $dir = $self->dir();
	for ($self->load_index()) {
		my ($s) = $_ =~ /^\.\/(\w+)\//;
		push @files, {
			name          => ($dir . '/' . $_), 
			section       => $s,
			section_alias => $self->sections()->{$s},
		} if $s ~~ \@section;
	}
	
	my $ipp = $self->ITEM_PER_PAGE();
	$self->stash(pages => int (scalar (@files) / $ipp) + 1);
	my $page = $self->stash('page');
	@files = splice(@files, ($page - 1) * $ipp, $ipp);

	for my $f (@files) {
		$f->{content} = $self->load_file($f->{name});
	}
	
	for (@files) {
		my $c = $_->{content};
		my $url = $_->{name};
		$url =~ s/^.*(\/\w+\/.+\.html)$/$1/;
		if ($c =~ /^(.*?\<h4.*?\<p.*?\<br\/\>.+?<br\/\>.+?<br\/\>.+?<br\/\>)(.+)(\<\/p\>\s*)$/ms) {
			my $t = $2;
			$t =~ s/\<[^\>]+\>//g;
			$t =~ s/\s+//g;
			$c =~ s/^(.*?\<h4.*?\<p.*?\<br\/\>.+?<br\/\>.+?<br\/\>.+?<br\/\>).+(\<\/p\>\s*)$/$1\<a href="$url"\>Читать полностью...\<\/a\>$2/ms if $t;
		}
		$_->{snippet} = $c;
	}
	
	return @files;
}

sub news {
	my $self = shift;
	
	my $page = $self->param('page') // 1;
	$page = 1 if ($page =~ /\D/);
	$self->stash(page => $page);
	
	my @posts = ();
	
	my $url = $self->url_for();
	
	my $title = '';
		
	if ($url eq '/' || $url eq '/feed.rss') {	
		@posts = $self->section(keys %{$self->sections()});
		$title = 'Печатное Издание';
	} else {
		my ($section) = $url =~ /^\/(\w+)/;
		if (my $alias = $self->sections()->{$section}) {
			@posts = $self->section($section);
			$title = $alias;
		} else {
			return $self->reply->not_found;
		}
	}
	
	$self->render(
		posts => \@posts,
		title => 'Анархия :: ' . $title,
		($url =~ /\/feed.rss$/) ? (template => 'news/feed', format => 'rss') : (),
	);
}

sub article {
	my $self = shift;
	
	my $section = $self->stash('section');
	return $self->reply->not_found unless $section && $self->sections()->{$section};
	my $article = $self->stash('article');
	return $self->reply->not_found unless $article =~ /^[\w\d\-]+\.html$/;
	
	my $file = $self->dir() . $self->url_for;
	return $self->reply->not_found unless -f $file;
	
	my $s = $self->load_file($file);
	
	my ($title) = $s =~ /\<h4.*?\>(.*?)\<\/h4\>/;
	
	return $self->render(
		article => $s,
		title   => $title . ' :: ' . $self->sections()->{$section} . ' :: Анархия',
	);
}


1;
