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

## Problem it addresses

Individually managing access permissions of multiple users across various system resources and data can be complex.
After all, each user likely needs access to a different set of resources.
Let's say an organization has 500 developers (users) and 300 resources with varying permission levels (read, write, and no access). The administrator must ensure each user has the correct permissions for all 300 resources.
RBAC simplifies the process by providing predefined access control based on role groups.


## How it helps

RBAC provides granular control over user permissions within software systems.
Depending on their roles, team members can modify a section, only view it, or have no access at all.
This granular permission allocation allows team members with different roles to work on the same system while minimizing risk.
