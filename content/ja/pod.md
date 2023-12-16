---
title: Pod
status: Completed
category: コンセプト
tags: ["インフラストラクチャー", "基礎", ""]
---

[Kubernetes](/ja/kubernetes/)環境の中では、Podは最も基本的なデプロイ可能ユニットとして機能します。
これはコンテナ化されたアプリケーションをデプロイし、管理するための基本的な構成要素を表しています。
各Podには単一のアプリケーションインスタンスが含まれ、一つ以上の[コンテナ](/ja/container/)を保持することができます。
Kubernetesは、より大規模なDeploymentの一部としてPodを管理し、必要に応じてPodを[垂直スケーリング](/ja/vertical-scaling/)または[水平スケーリング](/ja/horizontal-scaling/)することができます。

## 解決すべき問題はなんですか

コンテナは一般的に、特定のワークロードを実行し制御する独立した単位として機能しますが、
コンテナが密接に相互作用し、適切に連携して制御される必要がある場合もあります。

これらの密接に関連するコンテナがそれぞれ個別に管理される場合、冗長な管理作業が発生します。
たとえば、オペレーターは関連するコンテナの配置を繰り返し判断し、それらが一緒に保たれるようにしなければなりません。
また、これらの関連するコンテナのライフサイクルは同期される必要がありますが、個別にしか管理できません。

## How it helps

Pods bundle closely tied containers into a single unit, significantly simplifying container operations.
For instance, auxiliary containers are often used alongside the main container to add additional functionalities or to set up global configurations.
Examples include containers that inject and apply basic settings to the main container,
_sidecar_ (containers) that handle network traffic routing for the main container (see [service mesh](/service-mesh/)),
or containers collecting logs in conjunction with each container.

Memory and CPU allocation can be defined either on a pod level, allowing the containers inside to share resources in a flexible way, or per container.
