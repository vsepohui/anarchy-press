package Anarchy::Controller::Feedback;

use base 'Mojolicious::Controller';

use strict;
use warnings;
use utf8;

use Mail::Sendmail;
use Encode;


sub feedback {
	my $self = shift;

	if ($self->req->method() eq 'POST') {
		my $name  = $self->param('name') or return;
		my $email = $self->param('email') or return;
		my $text  = $self->param('text') or return;
		
		return if length ($name) > 60;
		return if length ($email) > 60;
		return if length ($text) > 3000;
	
		my $ip = $self->tx->remote_address;
		
		my $redis = $self->redis;
		my $k = "feedback:limit:$ip";
		#if ($redis->db->get($k)) {
		#	return $self->render(error => 'Вы недавно уже отправлял обращение, попробуйте позже.');
		#} 
		
		$redis->db->set($k, 1);
		$redis->db->expire($k, 600);
		
		my %mail = ( 
			To      => 'trunaev.ivan@icloud.com',
			From    => $email,
			Subject => 'Обращение с сайта anarchy-press.ru',
			Message => Encode::encode_utf8($text),
		);
 
		sendmail(%mail);		
		
		return $self->render(success => 'Ваше обращение успешно отправлено в редакцию!');
	}
	
	$self->render;
}

1;
