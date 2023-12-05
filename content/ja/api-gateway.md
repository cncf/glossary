---
title: APIゲートウェイ
status: Completed
category: テクノロジー
tags: ["ネットワーキング", "", ""]
---

[API](/ja/application-programming-interface/)ゲートウェイは、ユニークなアプリケーションAPIを集約し、
それらを一か所で利用可能にするツールです。
これにより認証や認可、
またはアプリケーション間のリクエスト数を制限するなどの重要な機能を、中央管理された場所に集約することができます。
APIゲートウェイは、(しばしば外部の)APIの利用者に対する共通のインターフェースとして機能します。

## Problem it addresses

If you’re making APIs available to external consumers,
you'll want one entry point to manage and control all access.
Additionally, if you need to apply functionality on those interactions,
an API gateway allows you to uniformly apply it to all traffic without requiring any app code changes.

## How it helps

Providing one single access point for various APIs in an application,
API gateways make it easier for organizations to apply cross-cutting business or security logic in a central location.
They also allow application consumers to go to a single address for all their needs.
An API gateway can simplify operational concerns like security and [observability](/observability/)
by providing a single access point for requests to all web services in a system.
As all requests flow through the API gateway, it presents a single place to
add functionality like metrics-gathering, rate-limiting, and authorization.
