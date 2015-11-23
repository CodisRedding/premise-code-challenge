#!/usr/bin/env bash

source ./scripts/vars/env-vars-dev.sh

nodemon ./lib/server --exec babel-node --es2015
