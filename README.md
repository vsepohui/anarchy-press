# anarchy-press.ru source code

Install at Debian

```sudo apt update``` <br/>
```sudo apt upgrade``` <br/>
```sudo apt install cpanminus make build-essential redis sendmail``` <br/>
```sudo cpanm -n Mojolicious AnyEvent EV Mojo::Redis Mail::Sendmail``` <br/>
```cp anarchy.conf.proto anarchy.conf``` <br/>

# Starting service (devel):
```morbo script/anarchy``` 
# Or production:
```hypnotoad script/anarchy``` 

# Developed by Ivan Trunaev 
