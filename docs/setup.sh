# setup q5.js docs site

# download p5 example assets
curl https://p5js.org/offline-reference/p5-reference.zip > p5-reference.zip;
unzip p5-reference.zip;
mv p5-reference/assets assets
rm -rf p5-reference
rm p5-reference.zip

# copy files over
cp ../q5.js q5.js
cp ../q5.min.js q5.min.js
cp ../tests.js tests.js
cp ../README.md README.md

# build site
node make_site.js