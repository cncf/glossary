HTMLTEST_DIR=tmp
HTMLTEST?=htmltest # Specify as make arg if different
HTMLTEST_ARGS?=--skip-external

# Use $(HTMLTEST) in PATH, if available; otherwise, we'll get a copy
ifeq (, $(shell which $(HTMLTEST)))
override HTMLTEST=$(HTMLTEST_DIR)/bin/htmltest
ifeq (, $(shell which $(HTMLTEST)))
GET_LINK_CHECKER_IF_NEEDED=get-link-checker
endif
endif

check-links: $(GET_LINK_CHECKER_IF_NEEDED)
	$(HTMLTEST) $(HTMLTEST_ARGS)

clean:
	rm -rf $(HTMLTEST_DIR) public/* resources

get-link-checker:
	rm -Rf $(HTMLTEST_DIR)/bin
	curl https://htmltest.wjdp.uk | bash -s -- -b $(HTMLTEST_DIR)/bin

serve:
	npx hugo server \
		--disableFastRender \
		--buildDrafts \
		--buildFuture \
		--ignoreCache \
		--printI18nWarnings \
		--printMemoryUsage \
		--printPathWarnings \
		--printUnusedTemplates \
		--templateMetrics \
		--templateMetricsHints \
		--gc

production-build:
	npx hugo mod clean --all
	npx hugo mod get github.com/google/docsy@v0.6.0 github.com/google/docsy/dependencies@v0.6.0
	npx hugo --minify
	npx -y pagefind --site public

preview-build:
	npx hugo mod clean --all
	npx hugo mod get github.com/google/docsy@v0.6.0 github.com/google/docsy/dependencies@v0.6.0
	npx hugo --minify \
		--baseURL $(DEPLOY_PRIME_URL) \
		--buildDrafts \
		--buildFuture
	npx -y pagefind --site public
