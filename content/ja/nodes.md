---
title: ノード
status: Completed
category: Concept
tags: ["インフラストラクチャー", "基礎", ""]
---

ノードとは、他のコンピューター、つまり他のノードと協力して共通のタスクを達成するコンピューターのことです。
例えばあなたのラップトップ、モデム、プリンターを考えてみてください。
これらはすべてあなたのWi-Fiネットワークを介して接続されており、通信し協力しており、それぞれが一つのノードを表しています。
[クラウドコンピューティング](/ja/cloud-computing/)において、ノードは物理的なコンピューターであったり、仮想コンピューター、つまり[VM](/ja/virtual-machine/)（バーチャルマシン）であったり、または[コンテナ](/ja/container/)であることもあります。

## Problem it addresses

While an application could (and many do) run on one single machine, there are some risks involved with that.
Namely that the failure of the underlying system will disrupt the application.
To address this, developers started creating [distributed applications](/distributed-apps/) where each process runs on its own node.
Thus, nodes run apps or processes as part of a group forming a [cluster](/cluster/), or group, of nodes that works together to achieve a common goal.

## How it helps

A node gives you a distinct unit of compute (memory, CPU, network) that you can assign to a cluster.
In a [cloud native](/cloud-native-tech/) platform or app a node represents a single unit that can perform work.
Ideally, individual nodes are undifferentiated in that
any one node of a particular type is indistinguishable from any other node of the same type.
