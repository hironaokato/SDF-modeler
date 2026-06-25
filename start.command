#!/bin/bash
cd "$(dirname "$0")"
if [ ! -d node_modules ]; then
  echo "依存パッケージをインストールします…"
  npm install
fi
npm run dev
