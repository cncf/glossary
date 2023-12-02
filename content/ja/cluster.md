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

## 解決すべき問題はなんですか

単一のコンピュータ上で動作するソフトウェアには、単一障害点があります。
もしそのコンピュータがクラッシュしたり、誰かが誤って電源ケーブルを抜いたりした場合、
ビジネス上重要なシステムが利用できなくなる可能性があります。
そのため、現代のソフトウェアは一般的に[分散アプリケーション](/ja/distributed-apps/)として構築され、クラスタとしてまとめられます。

## How it helps

Clustered, distributed applications run across multiple machines, eliminating a single point of failure.
But building distributed systems is really hard.
In fact, it's a computer science discipline in its own right.
The need for global systems and years of trial and error led to the development of a new kind of tech stack:
[cloud native technologies](/cloud-native-tech/).
These new technologies are the building blocks that make the operation and creation of distributed systems easier.
