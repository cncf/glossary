---
title: Function as a Service (FaaS)
status: Completed
category: テクノロジー
tags: ["インフラストラクチャー", "", ""]
---

Function as a Service (FaaS)は、
[サーバーレス](/ja/serverless/)、[クラウドコンピューティング](/ja/cloud-computing/)、[サービス](/ja/service/)の一種であり、
イベントによってコードを実行することを可能にします。
これは通常、[マイクロサービス](/ja/microservices-architecture/)アプリケーションの構築や立ち上げに関連する、
複雑なインフラのメンテナンスを必要としません。
FaaSを使用すると、ユーザーは関数とデータのみを管理し、クラウドプロバイダーがアプリケーションを管理します。
これにより、開発者はコードが実行されていないときにサービスの費用を支払うことなく、必要な機能を得ることができます。

## Problem it addresses

In a traditional on-premises scenario, a business manages and maintains its own data center.
The business must invest in servers, storage, software, and other technologies
and potentially hire an IT staff or contractors to purchase, manage, and upgrade all the equipment and licenses.
The data center has to be built to meet peak demand, even when workloads decline and those resources stand idle.
Conversely, if the business grows quickly, the IT department might struggle to keep up.
Under a standard [Infrastructure-as-a-Service (IaaS)](/infrastructure-as-a-service/) cloud computing model,
users pre-purchase capacity units, meaning you pay a public cloud provider for always-on server components to run your apps.
It’s the user’s responsibility to scale up server capacity during times of high demand
and scale down when that capacity is no longer needed.
The cloud infrastructure necessary to run an app is active even when the app isn’t being used.

## How it helps

FaaS gives developers an [abstraction](/abstraction/) for running web applications in response to events without managing servers.
For example, uploading a file could trigger custom code that transcodes the file into various formats.
FaaS infrastructure will auto-scale the code for heavy use,
and the developer does not have to spend any time or resources building the code for [scalability](/scalability/).
Billing is based on computation time alone, which means businesses do not have to pay when the functions are not in use.
