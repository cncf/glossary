---
title: クライアントサーバーアーキテクチャ
status: Completed
category: コンセプト
tags: ["アーキテクチャ", "基礎", ""]
---

クライアントサーバーアーキテクチャでは、アプリケーションを構築するロジック(あるいはコード)が2つ以上のコンポーネントに分割されます。
それは作業の実行を要求するクライアント(例えばウェブブラウザで実行されるGmailのウェブアプリケーション)と、その要求を満たす1つ以上のサーバー(例えばクラウド内のGoogleのコンピューターで実行されるメール送信サービス)です。
この例では、あなたが書いた送信メールは、クライアント(ウェブブラウザで実行されるウェブアプリケーション)によってサーバー(あなたの送信メールを受信者に転送するGmailのコンピューター)へ送られます。

これは、(例えばデスクトップアプリケーションのような)すべての作業を一つの場所で行う自己完結型のアプリケーションとは対照的です。
例えば、Microsoft Wordのようなワード処理プログラムは、あなたのコンピューター上にインストールされ完全にあなたのコンピューター上で実行されます。

## Problem it addresses

A client-server architecture solves a big challenge self-contained applications pose: regular updates.
In a self-contained app, for each update, users would have to download and install the latest version.
Imagine having to download all of Amazon’s product catalog to your own computer before being able to browse it!

## How it helps

By implementing application logic in a remote server or service,
operators can update that without needing to change the logic on the client-side.
This means updates can be made much more frequently.
Storing data on the server allows many clients to all see and share the same data.
Consider the difference between using an online word processor, compared to a traditional offline word processor.
In the former, your files exist on the server-side and
can be shared with other users who simply download them from the server.
In the legacy world, files needed to be copied to removable media (floppy disks!) and shared with individuals.
