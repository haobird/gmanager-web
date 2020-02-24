#!/bin/sh

echo "`/sbin/ip route|awk '/default/ { print $3 }'` host.docker.internal" >> /etc/hosts

npm install
# 启动服务
npm run dev