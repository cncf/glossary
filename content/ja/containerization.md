---
title: コンテナ化
status: Completed
category: テクノロジー
tags: ["アプリケーション", "", ""]
---

コンテナ化は、アプリケーションとその依存関係をコンテナイメージにまとめるプロセスです。
コンテナのビルドプロセスでは、[Open Container Initiative](https://opencontainers.org)(OCI)標準への準拠が必要です。
出力がこの標準に準拠したコンテナイメージであれば、どのコンテナ化ツールを使用しても問題ありません。

## 解決すべき問題は何ですか

コンテナが普及する前は、組織は仮想マシン(VM)に依存して、
単一の[ベアメタルマシン](/ja/bare-metal-machine/)上で複数のアプリケーションをオーケストレーションしていました。
VMはコンテナよりも非常に大きく、実行にはハイパーバイザーが必要です。
これらの大きなVMテンプレートのストレージ、バックアップ、転送により、VMテンプレートの作成もより遅くなります。
さらに、VMは[不変性](/ja/immutable-infrastructure/)の原則に反する設定のずれに悩まされることがあります。

## How it helps

Container images are lightweight (unlike traditional VMs) and
the containerization process requires a file with a list of dependencies.
This file can be version controlled and the build process automated,
allowing an organization to focus on other priorities
while the automated processes take care of the build.
A container image is stored by a unique identifier
that is tied to its exact content and configuration.
As containers are scheduled and rescheduled,
they are always reset to their initial state which eliminates configuration drift.
