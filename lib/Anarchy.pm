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
	
	my $r = $self->routes;
	$r->get('/')->to('News#news');
	for (@{$self->config('sections')}) {
		my ($key) = keys %$_;
		$r->get('/' . $key)->to('News#news');
	}

	$r->get('/:section/*article')->to('News#article');

	$r->get('/merch')->to('Merch#merch');
}


1;
