package Anarchy;

use base 'Mojolicious';

use strict;
use warnings;
use 5.022;

use Mojo::Redis;


sub startup {
	my $self = shift;

	my $config = $self->plugin('Config');
	$self->secrets($config->{secrets});
	
	$self->init_helpers();

	my $r = $self->routes;
	$r->get('/')->to('News#news');
	$r->get('/politics')->to('News#news');
	$r->get('/creative')->to('News#news');
	$r->get('/ads')->to('News#news');
	
	$r->get('/publish')->to('News#publish');
	
	$r->get('/chat')->to('Chat#chat');
	$r->websocket('/chat/socket')->to('Chat#socket')->name('chat-socket');
	
	$r->get('/feedback')->to('Feedback#feedback');
}


sub init_helpers {
	my $self = shift;
    $self->helper(redis => sub { state $r = Mojo::Redis->new });
}


1;
