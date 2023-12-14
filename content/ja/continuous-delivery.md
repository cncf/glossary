---
title: 継続的デリバリー(CD)
status: Completed
category: コンセプト
tags: ["方法論", "アプリケーション", ""]
---

継続的デリバリー（しばしばCDと略される）は、
コードの変更が自動的に受け入れ環境にデプロイされる
（または継続的デプロイメントの場合、本番環境にデプロイされる）一連の実践を指します。
CDは、ソフトウェアがデプロイメント前に適切にテストされていることを保証する手順を重要視し、
必要と判断された場合に変更をロールバックする方法を提供します。
継続的インテグレーション(CI)は継続的デリバリーに向けた最初のステップです
(つまり、テストやデプロイがされる前に、変更がうまく統合されなければなりません。)

## 解決すべき問題は何ですか

大規模な環境では、[信頼性](/ja/reliability/)の高いアップデートのデプロイが問題となります。
理想的には、エンドユーザーにより良い価値を提供するために、頻繁にデプロイを行いたいところです。
しかし、それを手動で行うと変更ごとに高いトランザクションコストが発生します。
歴史的に、これらのコストを避けるために、組織は頻繁にリリースを行わず、
一度に多くの変更をデプロイしてきましたが、これにより何かが間違ってしまうリスクが高まります。

## How it helps

CD strategies create a fully automated path to production
that tests and deploys the software using various deployment strategies
such as [canary](/canary-deployment/) or [blue-green](/blue-green-deployment/) releases.
This allows developers to deploy code frequently,  giving them peace of mind that the new revision has been tested.
Typically, trunk-based development is used in CD strategies as opposed to feature branching or pull requests.

## Related terms

* [Continuous Integration](/continuous-integration/)
* [Continuous Deployment](/continuous-deployment/)
