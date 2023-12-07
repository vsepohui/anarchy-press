# anarchy-press.ru source code

Install at Debian

sudo apt install cpanm redis sendmail

sudo cpanm -n Mojolicious AnyEvent EV Mojo::Redis Mail::Sendmail

cp anarchy.conf.proto anarchy.conf

# Starting servive
morbo script/anarchy
# Or
hypnotoad script/anarchy

# Developed by Ivan Trunaev 
