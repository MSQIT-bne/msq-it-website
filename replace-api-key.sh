#!/bin/bash

git filter-branch --force --index-filter \
  "git ls-files -z '*.js' | xargs -0 sed -i 's/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/YOUR_OPENAI_API_KEY/g'" \
  --prune-empty -- --all
