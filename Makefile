DATE=$(shell DATE)
UGLIFY_JS ?= `which uglifyjs`

build:
	@@if test ! -z ${UGLIFY_JS}; then \
		uglifyjs -o highlight.min.js highlight.js;\
		echo "Successfully built! - `date`"; \
	else \
		echo "You must have the UGLIFYJS minifier installed in order to minify"; \
		echo "You can install it by running: npm install uglify-js -g"; \
	fi