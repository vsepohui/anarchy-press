#!/bin/sh


cat bootstrap.css style.css > anarchy.css
java -jar ../../tools/yuicompressor-2.4.8.jar anarchy.css > anarchy.min.css
