#!/usr/bin/env perl

use strict;
use warnings;
use FindBin qw($Bin);
use lib "$Bin/../lib";
use Anarchy::Config;
use Data::Dumper;

die Dumper (Anarchy::Config->new->admin);


1;
