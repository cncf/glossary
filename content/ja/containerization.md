---
title: コンテナ化
status: Completed
category: テクノロジー
tags: ["アプリケーション", "", ""]
---

コンテナ化は、アプリケーションとその依存関係をコンテナイメージにまとめるプロセスです。
コンテナのビルドプロセスでは、[Open Container Initiative](https://opencontainers.org)(OCI)標準への準拠が必要です。
出力がこの標準に準拠したコンテナイメージであれば、どのコンテナ化ツールを使用しても問題ありません。

## Problem it addresses

Before containers became prevalent, organizations relied on virtual machines (VMs) to
orchestrate multiple applications on a single [bare-metal machine](/bare-metal-machine/).
VMs are significantly larger than containers and require a hypervisor to run.
Due to the storage, backup, and transfer of these larger VM templates, creating the VM templates is also slow.
Additionally, VMs can suffer from configuration drift which violates the principle of [immutability](/immutable-infrastructure/).

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
