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

## Problem it addresses

With the traditional trust based approach where systems and devices that exist within a corporate network perimeter,
the assumption is that because there is trust, there is no problem.
Zero trust architecture however, recognises that trust is a vulnerability.
In the event where an attacker has gained access to a trusted device,
depending on the level of trust and access that has been given to that device,
the system is now vulnerable to attack
as the attacker is within the "trusted" network perimeter and is able to move laterally throughout the system.
In a zero trust architecture, trust is removed, therefore reducing the attack surface
as an attacker is now forced to verify before going any further throughout the system.

## How it helps

Adopting a zero trust architecture brings the principal benefit of increased security
with a reduction in the attack surface.
Removing trust from your corporate system now increases the number and strength of security gates
that an attacker has to go through to gain access to other areas of the system.
