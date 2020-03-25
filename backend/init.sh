#!/bin/sh
cp .env.example .env
yarn
yarn migrate:undo
yarn migrate
yarn seed
# yarn dev
yarn prod
