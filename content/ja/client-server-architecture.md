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

## 解決すべき問題はなんですか

クライアントサーバーアーキテクチャは、自己完結型のアプリケーションが抱える、定期的な更新という大きな課題を解決します。
自己完結型アプリでは、更新のたびにユーザーは最新バージョンをダウンロードしてインストールする必要があります。
Amazonの商品カタログ全体を、ブラウジングする前に自分のコンピュータにダウンロードすることを想像してみてください！

## How it helps

By implementing application logic in a remote server or service,
operators can update that without needing to change the logic on the client-side.
This means updates can be made much more frequently.
Storing data on the server allows many clients to all see and share the same data.
Consider the difference between using an online word processor, compared to a traditional offline word processor.
In the former, your files exist on the server-side and
can be shared with other users who simply download them from the server.
In the legacy world, files needed to be copied to removable media (floppy disks!) and shared with individuals.
