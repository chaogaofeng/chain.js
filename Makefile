all: init proto-gen format

init:
	@echo "Install dependencies"
	npm install

format:
	npm run format

proto-gen: 
	@echo "Generating Protobuf files"
	./scripts/proto-gen.sh

build: 
	npm run build

publish:
	npm publish

.PHONY: all proto-gen format init build publish