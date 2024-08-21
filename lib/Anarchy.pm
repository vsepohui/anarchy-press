package Anarchy;

use base 'Mojolicious';

use strict;
use warnings;
use 5.022;
use utf8;

use Anarchy::Config;


sub startup {
	my $self = shift;

	my $config = $self->{config} = new Anarchy::Config;
	$self->secrets($config->{secrets});
	
	$self->init_helpers();
	
	my $r = $self->routes;
	$r->get('/')->to('News#news');
	$r->get('/feed.rss')->to('News#news');
	
	for (@{$self->config('sections')}) {
		my ($key) = keys %$_;
		$r->get('/' . $key)->to('News#news');
		$r->get('/'.$key.'/feed.rss')->to('News#news');
	}

	$r->get('/:section/*article')->to('News#article');

	$r->get('/merch')->to('Merch#merch');
}

sub init_helpers {
	my $self = shift;

    $self->helper(tr_url => sub { 
        my ($c) = @_;
        my $r = $c->url_for;
        my $p = $c->req->params();
        $r .= '?1=1';
        $r .= '&' . $p if $p;
        $r .= '&_x_tr_sl=ru&_x_tr_tl=en&_x_tr_hl=ru&_x_tr_pto=wapp';
        return $r;
    });
}


1;
