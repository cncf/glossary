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

## Problem it addresses

Deploying [reliable](/reliability/) updates becomes a problem at scale.
Ideally, we'd deploy more frequently to deliver better value to end-users.
However, doing it manually translates into high transaction costs for every change.
Historically, to avoid these costs, organizations have released less frequently,
deploying more changes at once and increasing the risk that something goes wrong.

## How it helps

CD strategies create a fully automated path to production
that tests and deploys the software using various deployment strategies
such as [canary](/canary-deployment/) or [blue-green](/blue-green-deployment/) releases.
This allows developers to deploy code frequently,  giving them peace of mind that the new revision has been tested.
Typically, trunk-based development is used in CD strategies as opposed to feature branching or pull requests.

## Related terms

* [Continuous Integration](/continuous-integration/)
* [Continuous Deployment](/continuous-deployment/)
