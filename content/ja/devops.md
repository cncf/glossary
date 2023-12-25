---
title: DevOps
status: Completed
category: コンセプト
tags: ["方法論", "", ""]
---

DevOpsは、アプリケーション開発から本番運用までの全過程をチームが所有する方法論で、それゆえDevOpsと呼ばれます。
これは一連の技術を実装することを超えて、文化やプロセスの完全な変革を必要とします。
DevOpsは、(全体の機能ではなく)小さなコンポーネントに取り組むエンジニアのグループを求め、エラーの一般的な原因である引き渡しの回数を減らします。

## Problem it addresses

Traditionally, in complex organizations with [tightly-coupled](/tightly-coupled-architectures/) [monolithic apps](/monolithic-apps/),
work was generally fragmented between multiple groups.
This led to numerous handoffs and long lead times.
Each time a component or update was ready, it was placed in a queue for the next team.
Because individuals only worked on one small piece of the project, this approach led to a lack of ownership.
Their goal was to get the work to the next group, not deliver the right functionality to the customer
— a clear misalignment of priorities.

By the time code finally got into production, it went through so many developers,
waiting in so many queues that it was difficult to trace the origin of the problem if the code didn’t work.
DevOps turns this approach upside down.

## How it helps

Having one team own the entire lifecycle of an application results in
minimized handoffs, reduce risk when deploying into production, better code quality
as teams are also responsible for how code performs in production
and increased employee satisfaction due to more autonomy and ownership.
