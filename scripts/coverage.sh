#!/usr/bin/env bash

echo "[RUNNING CODE COVERAGE]"

source ./scripts/vars/env-vars-dev.sh

./node_modules/.bin/babel-istanbul cover mocha -- test --compilers js:babel-core/register -u exports -R spec && open coverage/lcov-report/index.html
