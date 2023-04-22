#!/usr/bin/env sh

# abort on errors
set -e

#install
npm install

# build
npm run build

cd dist

git init
git add -A
git commit -m 'New deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:userlg/Vue3-Size-Selector.git master:gh-pages

cd -