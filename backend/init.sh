#!/bin/sh
yarn
yarn migrate:undo
yarn migrate
yarn seed
yarn dev
