---
title: ゼロトラストアーキテクチャ
status: Completed
category: コンセプト
tags: ["セキュリティ", "", ""]
---

ゼロトラストアーキテクチャは、ITシステムの設計と実装において信頼を完全に排除するアプローチを推奨します。
その核心の原則は「決して信頼せず、常に検証する」であり、
デバイスやシステムは、システムの他のコンポーネントと通信する際に常に事前に自分自身を検証します。
今日の多くのネットワークは、企業ネットワークの信頼された境界内にあるため、システムやデバイスは互いに自由に通信することができます。
ゼロトラストアーキテクチャは、ネットワークの境界内にあっても、
システム内のコンポーネントは通信する前に検証しなければならないという、正反対のアプローチを取ります。

## 解決すべき問題はなんですか

伝統的な信頼ベースのアプローチでは、企業ネットワークの境界内に存在するシステムやデバイスに対して、
信頼があるため問題がないという前提があります。
しかし、ゼロトラストアーキテクチャは、その信頼が脆弱性になると認識しています。
攻撃者が信頼されたデバイスへのアクセスを獲得した場合、そのデバイスに与えられている信頼のレベルとアクセスに依存して、
システムは攻撃に対して脆弱になります。
なぜなら、攻撃者は信頼されたネットワークの境界内におり、システム内を横断的に移動することができるからです。
ゼロトラストアーキテクチャでは、信頼が排除されるため、攻撃者はシステム内をさらに横断する前に検証を強いられ、結果として攻撃される場所が減ります。

## How it helps

Adopting a zero trust architecture brings the principal benefit of increased security
with a reduction in the attack surface.
Removing trust from your corporate system now increases the number and strength of security gates
that an attacker has to go through to gain access to other areas of the system.
