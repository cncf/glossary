---
title: Kubernetes
status: Completed
category: テクノロジー
tags: ["インフラストラクチャー", "基礎", ""]
---

## これは何ですか

Kubernetesは、しばしばK8sと略される、オープンソースのコンテナオーケストレーターです。
Kubernetesは、現代のインフラストラクチャー上でコンテナ化されたアプリケーションのライフサイクルを自動化し、[分散システム](/ja/distributed-systems/)全体でアプリケーションを管理するデータセンターのオペレーティングシステムとして機能します。

Kubernetesは、[クラスタ](/ja/cluster/)内の[ノード](/ja/nodes/)にまたがって[コンテナ](/ja/container/)をスケジュールし、ロードバランサーや永続化ストレージなど、いくつかのインフラリソースを束ねてコンテナ化されたアプリケーションを実行します。

Kubernetesは自動化と拡張性を実現し、ユーザーが宣言的に（以下参照）かつ再現可能な方法でアプリケーションをデプロイできるようにします。
Kubernetesは[API](/ja/application-programming-interface/)を介して拡張可能であり、経験豊富なKubernetesの専門家が自分たちのニーズに応じて拡張することができます。

## Problem it addresses

Infrastructure automation and declarative configuration management have been important concepts for a long time, but they have become more pressing as [cloud computing](/cloud-computing/) has gained popularity.
As demand for compute resources increases and organizations need to provide more operational capabilities with fewer engineers, new technologies and working methods are required to meet that demand.

## How it helps

Similar to traditional [infrastructure as code](/infrastructure-as-code/) tools, Kubernetes helps with automation but has the advantage of working with containers.
Containers are more resistant to configuration drift than [virtual](/virtual-machine/) or physical machines.

Additionally, Kubernetes works declaratively, which means that instead of operators instructing the machine how to do something, they describe — usually as manifest files (e.g., YAML) — what the infrastructure should look like.
Kubernetes then takes care of the "how".
This results in Kubernetes being extremely compatible with infrastructure as code.

Kubernetes also [self-heals](/self-healing/).
The cluster's actual state will always match the operator's desired state.
If Kubernetes detects a deviation from what is described in the manifest files, a Kubernetes controller kicks in and fixes it.
While the infrastructure Kubernetes uses may be continually changing, Kubernetes constantly and automatically adapts to changes and ensures that it matches with the desired state.
