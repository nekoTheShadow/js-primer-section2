#!/bin/bash

# wsl2を利用している場合、localhostがうまく解決できない場合があるので
# HOSTNAMEを利用する。cowsayを利用しているのは趣味
HOSTNAME=$(hostname -I | sed 's/\s*$//')
cowsay "http://${HOSTNAME}:3000"

npx @js-primer/local-server