package Anarchy::Controller::Merch;

use base 'Mojolicious::Controller';

use strict;
use warnings;
use utf8;


sub feedback {
	my $self = shift;
	$self->render;
}

1;
