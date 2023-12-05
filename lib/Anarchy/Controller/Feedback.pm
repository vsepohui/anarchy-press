package Anarchy::Controller::Feedback;

use base 'Mojolicious::Controller';

use strict;
use warnings;

sub feedback {
	my $self = shift;
	$self->render;
}

1;
