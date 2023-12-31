package Anarchy::Config;

use strict;
use warnings;
use 5.022;
use utf8;

use FindBin qw($Bin);

sub new {
	my $class = shift;
	
	state $self;
	
	unless ($self) {
		my $fi;
		
		open $fi, '<:encoding(utf8)', $Bin.'/../anarchy.conf';
		my $s = join '', <$fi>;
		close $fi;
		
		$self = eval $s;
		$self = bless $self, $class;
	}
	
	return $self;
}



1;
