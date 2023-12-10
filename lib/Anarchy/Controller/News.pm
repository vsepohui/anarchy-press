package Anarchy::Controller::News;

use base 'Mojolicious::Controller';

use strict;
use warnings;
use 5.022;
use FindBin qw($Bin);
use utf8;
use experimental 'smartmatch';

use constant SECTIONS => {
	game     => 'Игра',
	politics => 'Политика',
	creative => 'Культура',
	ads      => 'Реклама', 
	letters  => 'Письма читателей',
	dove     => 'Грачи',
};


sub dir {
	my $self = shift;
	return "$Bin/../content";
}

sub load_index {
	my $self = shift;
	
	my $fi;
	open $fi, '<:encoding(utf8)', $self->dir() . '/index.txt' or return $self->reply->not_found;
	my $s = join '', <$fi>;
	close $fi;
	
	return split /\n/, $s;
}

sub section {
	my $self 	= shift;
	my @section = @_;
	
	my @files = ();	
	#for my $section (@section) {
	#	my $d = $self->dir().'/'.$section;
	#	my $dh;
	#	opendir($dh, $d);
	#	my @f = grep {$_ =~ /\.html$/ && -f "$d/$_"} readdir($dh);
	#	closedir $dh;
	#	
	#	my @buff = ();
	#	for my $f (@f) {
	#		push @buff, {
	#			name  => "$d/$f",
	#			mtime => (stat "$d/$f")[9],
	#		};
	#	}
	#	push @files, @buff;
	#}
	#
	#@files = sort {$b->{mtime} <=> $a->{mtime}} @files;
	my $dir = $self->dir();
	for ($self->load_index()) {
		my ($s) = $_ =~ /^\.\/(\w+)\//;
		push @files, {
			name          => ($dir . '/' . $_), 
			section       => $s,
			section_alias => $self->SECTIONS()->{$s},
		} if $s ~~ \@section;
	}
	
	for my $f (@files) {
		my $fi;
		open $fi, '<:encoding(utf8)', $f->{name};
		$f->{content} = join '', <$fi>;
		close $fi;
	}
	
	for (@files) {
		my $c = $_->{content};
		my $url = $_->{name};
		$url =~ s/^.*(\/\w+\/.+\.html)$/$1/;
		$c =~ s/^(.*?\<h4.*?\<p.*?\<br\/\>.+?<br\/\>.+?<br\/\>.+?<br\/\>).+(\<\/p\>\s*)$/$1\<a href="$url"\>Читать полностью...\<\/a\>$2/ms;
		$_->{snippet} = $c;
	}
	
	return @files;
}

sub news {
	my $self = shift;
	
	my @posts = ();
	
	my $url = $self->url_for();
	
	my $title = '';
		
	if ($url eq '/') {	
		@posts = $self->section(keys %{$self->SECTIONS()});
		$title = 'Печатное Издание';
	} else {
		my ($section) = $url =~ /^\/(\w+)/;
		if (my $alias = $self->SECTIONS()->{$section}) {
			@posts = $self->section($section);
			$title = $alias;
		} else {
			return $self->reply->not_found;
		}
	}
	
	$self->render(
		posts => \@posts,
		title => 'Анархия :: ' . $title,
	);
}

sub article {
	my $self = shift;
	
	my $section = $self->stash('section');
	return $self->reply->not_found unless $section ~~ [keys %{$self->SECTIONS()}];
	my $article = $self->stash('article');
	return $self->reply->not_found unless $article =~ /^[\w\d\-]+\.html$/;
	
	my $file = $self->url_for;

	my $fi;
	open $fi, '<:encoding(utf8)', $self->dir() . $file or return $self->reply->not_found;
	my $s = join '', <$fi>;
	close $fi;
	
	my ($title) = $s =~ /\<h4.*?\>(.*?)\<\/h4\>/;
	
	return $self->render(
		article => $s,
		title   => $title . ' :: ' . $self->SECTIONS()->{$section} . ' :: Анархия',
	);
}

sub publish {
	my $self = shift;
	$self->render;
}

1;
