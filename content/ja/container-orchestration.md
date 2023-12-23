---
title: コンテナオーケストレーション
status: Completed
category: コンセプト
---

[コンテナ](/ja/container/)オーケストレーションとは、流動的な環境において、コンテナ化されたアプリケーションのライフサイクルを管理し自動化することを指します。
これはコンテナオーケストレータ(ほとんどの場合は[Kubernetes](/ja/kubernetes))を通じて実行され、デプロイメント、(自動)スケーリング、自動ヒーリング、モニタリングが可能になります。
オーケストレーションという言葉は比喩です。
オーケストレーションツールは、音楽指揮者のようにコンテナを指揮し、すべてのコンテナ(または音楽家)が適切に機能するようにします。

## Problem it addresses

Managing [microservices](/microservices), security, and network communication at scale — and [distributed systems](/distributed-systems) in general — is hard, if not impossible, to manage manually.
Container orchestration allows users to automate all these management tasks.

## How it helps

Container orchestration tools allow users to determine a system's state.
First, they declare how it should look like (e.g., x containers, y pods, etc.).
The orchestration tool will then automatically monitor the infrastructure and correct it if its state deviates from the declared one (e.g., spin up a new container if one crashes).
This automation simplifies many of the engineering teams' otherwise highly manual and complex operational tasks, including provisioning, deployment, scaling (up and down), networking, load balancing, and other activities.
