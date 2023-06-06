#!/bin/bash
npm run build
cd build
rsync -a --exclude="node_modules" . root@node.pymnts.com:/var/www/blender.pymnts.com/
cd ..
