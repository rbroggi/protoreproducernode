# Default target to set up and run the full test cycle
all: install generate run

# Install npm dependencies
# This fetches buf, the typescript generator, and runtime libraries
install:
	@echo "--> Installing npm dependencies..."
	npm install

# Generate TypeScript types from the .proto file
generate:
	@echo "--> Generating TypeScript types from Protobuf definitions..."
	npx buf generate

# Run the TypeScript script to test the serialization cycle
run:
	@echo "--> Running the TypeScript reproducer script..."
	npm start

# Clean up generated files and dependencies
clean:
	@echo "--> Cleaning up generated files and dependencies..."
	rm -rf gen node_modules package-lock.json

# Tell Make these are not files
.PHONY: all install generate run clean