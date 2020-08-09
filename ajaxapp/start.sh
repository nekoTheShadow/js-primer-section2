#!/bin/bash

# local-serverのプロセスが残ってしまい、3000番が利用出来ない場合があるので
# 前もって強制終了してしまう
lsof -i:3000 | awk '(NR!=1){print $2}' | xargs kill -9

# wsl2を利用している場合、localhostがうまく解決できない場合があるので
# HOSTNAMEを利用する。cowsayを利用しているのは趣味
HOSTNAME=$(hostname -I | sed 's/\s*$//')
cowsay "http://${HOSTNAME}:3000"

npx @js-primer/local-server