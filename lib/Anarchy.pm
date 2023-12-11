package Anarchy;

use base 'Mojolicious';

use strict;
use warnings;
use 5.022;
use utf8;

use Anarchy::Config;
use Mojo::Redis;


sub startup {
	my $self = shift;

	my $config = $self->{config} = new Anarchy::Config;
	$self->secrets($config->{secrets});
	
	
	$self->init_helpers();

	my $r = $self->routes;
	$r->get('/')->to('News#news');
	$r->get('/game')->to('News#news');
	$r->get('/politics')->to('News#news');
	$r->get('/creative')->to('News#news');
	$r->get('/ads')->to('News#news');
	$r->get('/letters')->to('News#news');
	$r->get('/dove')->to('News#news');
	$r->websocket('/chat/socket')->to('Chat#socket')->name('chat-socket');
	
	$r->get('/:section/*article')->to('News#article');
	
	$r->get('/publish')->to('News#publish');
	
	$r->get('/chat')->to('Chat#chat');
	
	
	$r->any([qw/GET POST/] =>'/feedback')->to('Feedback#feedback');
	
	$r->any([qw/GET POST/] => '/admin')->to('Admin#login');
}


sub init_helpers {
	my $self = shift;
    $self->helper(redis => sub { state $r = Mojo::Redis->new });
}


1;
