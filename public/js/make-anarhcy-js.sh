#!/bin/sh


cat bootstrap.bundle.min.js jquery-1.12.4.min.js imagesloaded.pkgd.min.js masonry.pkgd.min.js script.js > anarchy.js
../../tools/UglifyJS/bin/uglifyjs anarchy.js > anarchy.min.js
