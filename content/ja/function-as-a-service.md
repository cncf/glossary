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

## 解決すべき問題はなんですか

従来のオンプレミスシナリオでは、企業は自社のデータセンターの管理や維持をします。
企業はサーバー、ストレージ、ソフトウェア、その他の技術に投資し、ITスタッフや請負業者を雇ってすべての機器やライセンスの購入、管理、更新を行う必要があります。
データセンターはピーク需要に合わせて構築されるため、作業負荷が減少し、それらのリソースが稼働していなくても対応しなければなりません。
逆にビジネスが急速に成長する場合、IT部門は追いつくのに苦労するかもしれません。
標準的な[Infrastructure-as-a-Service (IaaS)](/ja/infrastructure-as-a-service/)クラウドコンピューティングモデルでは、
ユーザーは事前に容量ユニットを購入します。
つまりアプリを実行するために、サーバーコンポーネントを常時起動させ、それに対する支払いをパブリッククラウドプロバイダーに行います。
需要が高まる時にサーバー容量を増やし、その容量が不要になった時に減らすのはユーザーの責任です。
アプリが使用されていないときでも、そのアプリを実行するためのクラウドインフラは稼働しています。

## How it helps

FaaS gives developers an [abstraction](/abstraction/) for running web applications in response to events without managing servers.
For example, uploading a file could trigger custom code that transcodes the file into various formats.
FaaS infrastructure will auto-scale the code for heavy use,
and the developer does not have to spend any time or resources building the code for [scalability](/scalability/).
Billing is based on computation time alone, which means businesses do not have to pay when the functions are not in use.
