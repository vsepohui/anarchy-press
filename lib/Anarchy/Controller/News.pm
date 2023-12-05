package Anarchy::Controller::News;

use base 'Mojolicious::Controller';

use strict;
use warnings;

sub welcome {
	my $self = shift;
	$self->render;
}

sub publish {
	my $self = shift;
	$self->render;
}

1;
