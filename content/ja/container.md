---
title: コンテナ
status: Completed
category: テクノロジー
tags: ["アプリケーション", "基礎", ""]
---

コンテナは、コンピューターのオペレーティングシステムによってリソースと機能面での制限を管理する、実行中のプロセスです。
コンテナプロセスに利用可能なファイルは、コンテナイメージとしてパッケージ化されています。
コンテナは一つのマシン上で同時に実行されますが、
通常オペレーティングシステムは別々のコンテナプロセスが互いに干渉するのを防ぎます。

## 解決すべき問題は何ですか

コンテナが利用可能になる前は、アプリケーションを実行するためには別々のマシンが必要でした。
各マシンはそれぞれのオペレーティングシステムを必要とし、CPU、メモリ、ディスクスペースを消費します。
これらは全て個々のアプリケーションが機能するために必要なものです。
さらに、オペレーティングシステムのメンテナンス、アップグレード、起動は、大きな手間のかかる作業です。

## How it helps

Containers share the same operating system and its machine resources,
spreading the operating system’s resource overhead and creating efficient use of the physical machine.
This capability is only possible because containers are typically limited from being able to interact with each other.
This allows many more applications to be run on the same physical machine.

There are limitations, however.
Since containers share the same operating system, processes can be considered less secure than alternatives.
Containers also require limits on the shared resources.
To guarantee resources, administrators must constrain and limit memory and CPU usage so that other applications do not perform poorly.
