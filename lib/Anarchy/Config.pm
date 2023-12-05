package Anarchy::Config;

use strict;
use warnings;
use 5.022;

use FindBin qw($Bin);

sub new {
	my $class = shift;
	
	state $self;
	
	unless ($self) {
		my $fi;
		open $fi, $Bin.'/../anarchy.conf';
		my $s = join '', <$fi>;
		close $fi;
	
		$self = bless (eval $s), $class;
	}
	
	return $self;
}



1;
