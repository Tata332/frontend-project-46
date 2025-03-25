.PHONY: test json-diff yaml-diff

install:
	npm install

gendiff:
	node bin/gendiff.js -h

run:
	node bin/gendiff.js __fixtures__/file1.json __fixtures__/file2.json

json-diff:
	node bin/gendiff.js __fixtures__/file1.json __fixtures__/file2.json

yaml-diff:
	node bin/gendiff.js __fixtures__/filepath1.yml __fixtures__/filepath2.yml