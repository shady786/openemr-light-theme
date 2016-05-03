# OpenEMR Light Theme

This is a modern theme for the OpenEMR project. It uses the Bootstrap framework as a base.

## Installing
This repo contains the various components needed to build a final
style\_light.css. To install into a working OpenEMR instance you can either
download a zipped release from the releases page or clone the repo locally and build yourself. Once you have the style\_light.css place it in <openemr_base_dir>/interface/themes/ directory.

## Building
OpenEMR Light Theme uses [GulpJS](http://gulpjs.com) to build the final output
and [Bower](http://bower.io/) manage dependencies. You do not need to be familiar
with these to build the final css, but they must be installed.

### Steps to build
[Install Node](https://nodejs.org/download/)

    $ git clone git@github.com:robertdown/openemr-light-theme.git .
    $ cd openemr-light-theme
    $ npm install // Installs Grunt and Bower from npm via package.json
    $ bower install // Grabs the various assets (i.e. Bootstrap)
    $ grunt // Build files and place final output to css/style_light.css

## Contributing
Contributions are welcome, fork, edit, submit a pull request

## License
A full copy of the license can be viewed on the [LICENSE](LICENSE).

OpenEMR Light Theme
Copyright (C) 2015-2016 Robert Down Jr

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.


