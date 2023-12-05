package Anarchy::Controller::Admin;

use base 'Mojolicious::Controller';

use strict;
use warnings;
use Digest::MD5 qw(md5_hex);

sub login {
	my $self = shift;
	if ($self->req->method() eq 'POST') {
		my $email    = $self->param('email') or return;
		my $password = $self->param('password') or return;
		
		my $ip = $self->tx->remote_address;
		
		my $admin = $self->config->{'admin'};

		if ($admin->{$email} ne md5_hex($password)) {
			my $redis = $self->redis;
			my $k = "admin:limit:$ip";
			$redis->db->set($k, 1);
			$redis->db->expire($k, 1);
			return;
		}
		$self->session(email => $email, ip => $ip);
		return $self->redirect_to('/');
	}
	$self->render;
}

1;
