---
title: 継続的デプロイメント(CD)
status: Completed
category: コンセプト
tags: ["アプリケーション", "方法論", ""]
---

継続的デプロイメント(しばしばCDと略される)は、
完成したソフトウェアを直接本番環境にデプロイするという点で[継続的デリバリー](/ja/continuous-delivery/)より一歩進んでいます。
継続的デプロイメント(CD)は[継続的インテグレーション](/ja/continuous-integration/)(CI)と密接に関連しており、しばしばCI/CDと呼ばれます。
CIプロセスは特定のアプリケーションへの変更が有効であるかどうかをテストし、
CDプロセスはコードの変更を自動的に組織のテスト環境や本番環境にデプロイします。

## Problem it addresses

Releasing new software versions can be a labor-intensive and error-prone process.
It is also often something that organizations will only want to do infrequently to avoid production incidents
and reduce the number of time engineers need to be available outside of regular business hours.
Traditional software deployment models leave organizations in a vicious cycle
where the process of releasing software fails to meet organizational needs around both stability and feature velocity.

## How it helps

By automating the release cycle and forcing organizations to release to production more frequently,
CD does what CI did for development teams for operations teams.
Specifically, it forces operations teams to automate the painful and error-prone portions of production deployments, reducing overall risk.
It also makes organizations better at accepting and adapting to production changes, which leads to higher stability.

## Related terms

* [Continuous Integration](/continuous-integration/)
* [Continuous Delivery](/continuous-delivery/)
