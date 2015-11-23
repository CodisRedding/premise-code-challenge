#!/usr/bin/env bash

echo "[RUNNING TESTS]"

source ./scripts/vars/env-vars-dev.sh

_mocha test
