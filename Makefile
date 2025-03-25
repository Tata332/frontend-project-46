install:
	npm install

gendiff:
	node bin/gendiff.js -h

run:
	node bin/gendiff.js __fixtures__/file1.json __fixtures__/file2.json