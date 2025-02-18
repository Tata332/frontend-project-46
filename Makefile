JEST := npx jest

install:
	npm ci

publish:
	npm publish --dry-run

test:
	$(JEST) --runInBand

coverage:
	$(JEST) --coverage --runInBand

lint:
	npx eslint .

.PHONY: install publish test coverage lint
