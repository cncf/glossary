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

## Problem it addresses

Software systems are often large and complex, with numerous developers maintaining and updating them.
Working in parallel on different parts of the system,
these developers may make conflicting changes and inadvertently break each other’s work.
Additionally, with multiple developers working on the same project,
any everyday tasks such as testing and calculating code quality would need to be repeated by each developer, wasting time.

## How it helps

CI software automatically checks that code changes merge cleanly whenever a developer commits a change.
It's a near-ubiquitous practice to use the CI server to run code quality checks, tests, and even deployments.
As such, it becomes a concrete implementation of quality control within teams.
CI allows software teams to turn every code commit into either a concrete failure or a viable release candidate.

## Related terms

* [Continuous Delivery](/continuous-delivery/)
* [Continuous Deployment](/continuous-deployment/)
