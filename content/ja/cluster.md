---
title: クラスタ
status: Completed
category: コンセプト
tags: ["インフラストラクチャー", "基礎", ""]
---

## これは何ですか

クラスタは、共通の目的に向けて連携して働くコンピュータやアプリケーションのグループです。
クラウドネイティブコンピューティングの文脈では、この用語は通常[Kubernetes](/ja/kubernetes/)に適用されます。
Kubernetesクラスタは、通常異なるマシン上でそれぞれのコンテナ内で実行される一連のサービス（あるいはワークロード）です。
これらすべての[コンテナ化](/ja/containerization/)されたサービスの集合がネットワーク上で接続され、クラスタを形成しています。

## Problem it addresses

Software that runs on a single computer presents a single point of failure
— if that computer crashes, or someone accidentally unplugs the power cable,
then some business-critical system may be taken offline.
That's why modern software is generally built as [distributed applications](/distributed-apps/), grouped together as clusters.

## How it helps

Clustered, distributed applications run across multiple machines, eliminating a single point of failure.
But building distributed systems is really hard.
In fact, it's a computer science discipline in its own right.
The need for global systems and years of trial and error led to the development of a new kind of tech stack:
[cloud native technologies](/cloud-native-tech/).
These new technologies are the building blocks that make the operation and creation of distributed systems easier.
