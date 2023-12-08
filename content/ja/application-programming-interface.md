---
title: アプリケーションプログラミングインタフェース(API)
status: Completed
category: テクノロジー
tags: ["アーキテクチャ", "基礎", ""]
---

APIは、コンピュータープログラム同士が互いにやり取りする方法です。
人間がウェブページを介してウェブサイトとやり取りするように、APIはコンピュータープログラムが相互に通信するための手段を提供します。
人間のやり取りとは異なり、APIには何が要求できるか、あるいはできないかについての制限があります。
この制限によって、プログラム間で安定的で機能的なコミュニケーションが実現されます。

## 解決すべき問題はなんですか

アプリケーションが複雑になるにつれて、小さなコードの変更が他の機能に大きな影響を及ぼす可能性があります。
アプリケーションが成長しながらも安定性を維持するために、機能にモジュラーなアプローチを採用する必要があります。
APIがなければ、アプリケーション同士が相互に通信するための枠組みが不足します。
共有された枠組みがないと、アプリケーションが[スケール](/ja/scalability/)し、統合することが困難になります。

## How it helps

APIs allow computer programs or applications to interact and share information in a defined and understandable manner.
They are the building blocks for modern applications and they provide developers with a way to integrate applications together.
Whenever you hear about [microservices](/microservices/) working together, you can infer that they interact via an API.
