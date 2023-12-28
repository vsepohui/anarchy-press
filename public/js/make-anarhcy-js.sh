#!/bin/sh


cat bootstrap.bundle.min.js jquery-3.7.1.slim.min.js imagesloaded.pkgd.min.js masonry.pkgd.min.js > anarchy.js
../../tools/UglifyJS/bin/uglifyjs anarchy.js > anarchy.min.js
