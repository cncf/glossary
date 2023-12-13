---
title: 継続的インテグレーション(CI)
status: Completed
category: コンセプト
tags: ["アプリケーション", "方法論", ""]
---

継続的インテグレーション(CI)とは、コードの変更を可能な限り定期的に統合することを指します。
CIは[継続的デリバリー](/ja/continuous-delivery/)(CD)の前提条件です。
伝統的に、CIのプロセスはバージョンコントロールシステム(GitやMercurial、あるいはSubversion)にコードの変更がコミットされることで開始し、
CDシステムで利用できるようになったテスト済みの成果物で終了します。

## 解決すべき問題はなんですか

ソフトウェアシステムはしばしば大規模で複雑であり、多くの開発者が維持や更新をしています。
システムの異なる部分で並行して作業を行う開発者たちは、
意図せずに互いの作業を壊すような矛盾した変更を加えることがあります。
さらに、同じプロジェクトに複数の開発者が取り組む場合、
テストやコード品質の計測といった日常的なタスクは、各開発者によって繰り返される必要があり、時間の無駄になります。

## How it helps

CI software automatically checks that code changes merge cleanly whenever a developer commits a change.
It's a near-ubiquitous practice to use the CI server to run code quality checks, tests, and even deployments.
As such, it becomes a concrete implementation of quality control within teams.
CI allows software teams to turn every code commit into either a concrete failure or a viable release candidate.

## Related terms

* [Continuous Delivery](/continuous-delivery/)
* [Continuous Deployment](/continuous-deployment/)
