---
title: ロールベースアクセス制御(RBAC)
status: Completed
category: コンセプト
---

ロールベースアクセス制御(RBAC)は、組織内の個々のユーザーのロールに基づいてシステムやリソースへのアクセスを規制する方法です。
各職務には特定の役割と権限があります。
例えば、マーケティングチームのメンバーは、パイプライン内の販売取引を閲覧する権限(*読み取り*権限)はありますが、
それらを編集する権限(*書き込み* 権限)は許可されていません。
販売チームおよびマーケティングチームは、それぞれの役割に基づいた異なる権限を持っているため、
ロールベースのアクセス制御が適用されます。
エンジニアリングチーム内の役割にも同様のことが当てはまります。

## 解決すべき問題はなんですか

様々なシステムのリソースやデータにわたって複数のユーザーのアクセス権限を個別に管理することは、複雑になることがあります。
結局のところ、それぞれのユーザーには、異なるリソースセットへのアクセスが必要になる可能性があります。
例えば、ある組織に500人の開発者(ユーザー)がおり、さまざまな権限レベル(読み取り、書き込み、アクセス禁止)を持つ300のリソースがあるとしましょう。
管理者は、全300のリソースに対して各ユーザーが正しい権限を持っていることを保証しなければなりません。
RBACは、役割グループに基づいて事前に定義されたアクセス制御を提供することで、このプロセスを簡素化します。

## How it helps

RBAC provides granular control over user permissions within software systems.
Depending on their roles, team members can modify a section, only view it, or have no access at all.
This granular permission allocation allows team members with different roles to work on the same system while minimizing risk.
