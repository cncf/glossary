---
title: 貢献の方法
toc_hide: true
status: Completed
menu:
  main:
    weight: 10
---

## ようこそ

クラウドネイティブ用語集の貢献ガイドへようこそ。
このプロジェクトに貢献できる方法はいくつかありますが、ここではその詳細を説明します：

1) [既存の課題に取り組む](#work-on-an-existing-issue)
2) [新しい用語の提案](#propose-new-terms)
3) [既存の用語を更新する](#update-an-existing-term)
4) [用語集を翻訳する](#help-localize-the-glossary)

## CNCF用語集レビュー

この用語集のゴールは、複雑なことで有名なクラウドネイティブの空間をシンプルにすることで、より多くの人に親しんでもらうことです。

クラウドネイティブ用語集のコンテンツは[GitHub repo](https://github.com/cncf/glossary) に保存されています。
ここには、用語集に関する[issues](https://github.com/cncf/glossary/issues), pull request ([PRs](https://github.com/cncf/glossary/pulls)), そして[discussions](https://github.com/cncf/glossary/discussions) のリストがあります。

## 誰が貢献できるのか？

このプロジェクトにどのように参加できるかは、クラウドネイティブの専門知識のレベルによって異なります。
複雑な概念を簡略化するには、そのトピックに関する深い知識が必要です。
したがって、新しい用語を寄稿するには、その用語に精通している必要があります。
貢献者は通常、これらの技術にしばらく携わってきたエンジニアや、クラウドネイティブに焦点を当てたアカデミックの経験者です。

複雑な概念を簡単な言葉で説明するのは _本当_ に難しいので、そのノウハウが必要です。そして、消化しやすく、ユーザーフレンドリーな結果は簡単に見えるかもしれませんが、望ましいシンプルさを実現するためには、クラウドネイティブの専門家たちの努力と協力が必要です。

もしあなたがまだクラウドネイティブの専門家ではないが、それでも貢献したいのであれば、専門家とチームを組むことをお勧めします。
その専門家が、その用語がコンセプトを正確に表現していると確信したら、最初の用語集への投稿の準備ができました。

翻訳は、他言語に精通した初心者が用語集に貢献できる貴重な場です。
英語での定義がしっかりしていれば、経験の浅い貢献者でも、用語を目標の言語に翻訳することができます。既存の翻訳チームに参加することも、新しいチームを作ることもできます。このガイドの[用語集の翻訳を支援する](#help-localize-the-glossary)のセクションを読んで、開始方法を学んでください。

## 始める前に

用語集へ貢献する旅を始める前に、必ず以下のステップを完了してください：

1. [GitHub アカウント](https://docs.github.com/en/get-started/signing-up-for-github/signing-up-for-a-new-github-account)を持っていなければ作成する。
2. [貢献者ライセンス契約書](https://docs.linuxfoundation.org/lfx/easycla/v2-current/contributors) (CLA)にサインする。
3. [コミット署名を確認する](https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification)
4. GitHubアカウントで[警戒モード](https://docs.github.com/en/authentication/managing-commit-signature-verification/displaying-verification-statuses-for-all-of-your-commits#about-vigilant-mode)を有効にすると、コミット時に検証ステータスが表示されます。

## ベストプラクティス {#best-practices}

レビューを容易にするため、[セマンティック改行](https://sembr.org/)を使用してください（例：1文につき1行など）。
私たちは、GitHubでマークダウンテキストを正しくフォーマットするために、この[マークダウンのチートシート](https://www.markdownguide.org/cheat-sheet/)を確認することをお勧めします（例：ハイパーリンク、ボールド、イタリック）。
また、.md ファイルに名前をつけるときは、単語を区切るために小文字とスペースではなくハイフンを使い括弧は避けてください。

## スタイルガイド

[スタイルガイド](/ja/style-guide/)を読んで、文書のフォーマットや書き方に関するガイドラインを理解し、投稿プロセスをより効率的にしてください。

## 用語集コミュニティに参加する！ {#join-the-glossary-community}

定期的に貢献したい場合は、毎月開催されるGlossary Working Groupのミーティングに参加することを検討してください。
ミーティングの詳細は、[CNCFカレンダー](https://www.cncf.io/calendar/)で確認できます。
また、CNCF Slackの[#glossary](https://cloud-native.slack.com/archives/C02TX20MQBB)チャンネルで、メンテナや他の貢献者とつながることもできます。あなたにお会いできるのを楽しみにしています！

## 既存の課題に取り組む {#work-on-an-existing-issue}

[用語集のGitHub issues](https://github.com/cncf/glossary/issues)に行くと、利用可能なissueのリストが見つかります。
ラベル（例：English language、help needed、good first issue）を使って、課題をフィルタリングすることができます。

![Issueとラベル](/images/how-to/issue-and-labels.png)

選択した用語がすでに誰かに割り当てられていないことを確認してください。
例えば、ここでは、最初の3つの用語は利用可能ですが、4番目の用語はすでに割り当てられていることがわかります。

![用語を担当する](/images/how-to/howto-04.png)

取り組むべき用語を選択したら、そのissueに対してコメントする。

![issueを主張する](/images/how-to/claiming-an-issue.png)

さらに、CNCF Slackの[#glossary](https://cloud-native.slack.com/archives/C02TX20MQBB)チャンネルでメンテナに通知してください、そして
_@Catherine Paganini_, _@Seokho Son_, _@Jihoon Seo_, および/または _@iamnoah_ をタグ付けして、メンテナが見逃さないようにします。

次のステップについては、新しい用語の提案（PRの作成）(#submitting-a-new-term)のセクションを参照してください。

**備考**: メンテナがissueをあなたに割り当てた後、そのissueに取り組み始めることができます。
一度に要求できるのは1つの用語のみです。
複数の用語に対する作業は順次行われ、次の用語を要求する前に用語を完了させる必要があります。

## 新しい用語の提案 {#propose-new-terms}

新しい用語を提案して他の人に取り組んでもらうことも、自分で新しい定義を作ることもできます。
いずれにせよ、まずは[issueの作成](#creating-an-issue)から始めることになります。
用語集に追加するには、すべての新しい用語が[CNCFのクラウドネイティブ定義](https://github.com/cncf/toc/blob/main/DEFINITION.md)を満たしている必要があります。
ただし、クラウドネイティブの概念を理解するために必要な基礎的な用語だけは例外です。

以下は、GitHubに不慣れな人のためのステップバイステップガイドです。
**GitHub Pro**の方は、このガイドに _目を通して_ 、以下のトピックについて十分な情報を集めてください：

1. issueおよび新しい用語のテンプレートを探す
2. issueを要求する
3. [スペルチェック](#spell-check)の失敗を解決する

### issueを作成する {#creating-an-issue}

[用語集のGitHub repo](https://github.com/cncf/glossary/issues)issuesにアクセスして"New issue"をクリックしてください。

![issues](/images/how-to/howto-01.png)

テンプレート一覧から「Request to add a new term (English)」を選択します。

![templates](/images/how-to/english-issue-template.jpg)

提案する単語を追加し、質問に答え、チェックボックスにチェックを入れて、「Submit new issue」を押してください。
新しい用語を提案するだけなら、これで完了です！定義に取り組みたい場合は、このまま読み進めてください。

### issueの優先順位 {#triaging-your-issue}

次に、メンテナンス担当者はその問題の優先度を決めます。
つまり、その用語が用語集に含まれるべきかどうかを評価するのです。
すべての用語が認められるわけではありません。用語集に含めるには、確立された、広く使われているクラウドネイティブコンセプトである必要があります
。
Slackでメンテナに新しい用語を提案したことを知らせてください。そして _@Catherine Paganini_, _@Seokho Son_, _@Jihoon Seo_, および/また _@iamnoah_ のタグを付けることを忘れないでください。
もし、あなたがその定義に取り組みたいのであればメンテナに知らせてください。メンテナがあなたをアサインします。

### 新しい用語を登録する（PRを作成する） {#submitting-a-new-term}

[スタイルガイド](/ja/style-guide/)にあるように、GoogleやWordのドキュメントで始めることを強くお勧めします。

用語の提出準備が整ったら、「content」へ...

![content](/images/how-to/howto-05.png)

...次に、「en（英語の場合）」または貢献する言語の最初の2文字..

![language folder](/images/how-to/howto-06.png)

...そして `_TEMPLATE.md` を選択します。

![template](/images/how-to/howto-07.png)

内容をコピーする...

![copy content](/images/how-to/howto-08.png)

...「en」フォルダーに戻ります。「Add file」をクリックし、「Create new file」を選択します。

![create new file](/images/how-to/howto-09.png)

[ベストプラクティス](#best-practices)セクションで説明したURLに、用語の名前を追加します。
名前の最後に拡張子.mdを追加します（この拡張子がないとファイルをプレビューすることができません）。
次に、下のセクションにテンプレートの内容を貼り付けます。定義のテキストをコピーして、ファイルに貼り付けてください。
[ベストプラクティス](#best-practices)のセクションで説明したように、マークダウンを使用したことを確認するために、「Preview」をクリックします。

![finalize term](/images/how-to/howto-10.png)

下にスクロールして、新しいコミットファイルに名前をつけます。提出する準備ができたら、「Commit new file」を押してください。
そして...

![commit new file](/images/how-to/howto-11.png)

...これで新しいPRを作成する準備ができました

![create a pr](/images/how-to/howto-12.png)

「Create pull request」ボタンを押すと、「Pull requests」タブにPRが表示されます。

![prs](/images/how-to/howto-13.png)

## 既存の用語を更新する {#update-an-existing-term}

既存の用語を更新するには、issueを作成して変更を依頼するか、自分で変更を行ってPRを提出します。

### issueから変更を依頼する {#request-a-change-via-an-issue}

用語に関する問題にフラグを立てたい場合は、CNCF用語集ウェブページの「問題を報告する」オプションを使用することができます。
フラグを立てたいコンセプトのCNCFページで自分の位置を確認し、「Report issue」をクリックします。
これにより、自動的にあなたのためのissueが開かれます。

![report issue](/images/how-to/howto-14.png)

あなたの提案と、それがなぜ必要なのかを説明してください。送信を押してください、それで終わりです。

![submit issue](/images/how-to/howto-15.png)

### 用語を直接更新する {#update-a-term-directly}

用語を修正したり、提案を提出したりするには、「Edit this page」をクリックします。

![edit this page](/images/how-to/howto-16.png)

これにより、その用語のGitHubページが開きます。変更を加え、PRを作成してください。
上記の[ベストプラクティス](#best-practices)セクションを参照し、私たちの[スタイルガイド](/ja/style-guide/)を読んで、私たちのガイドラインに従っていることを確認してください。

## 用語集のローカライズを支援する {#help-localize-the-glossary}

用語集を目的の言語にローカライズするのを手伝うには、CNCF Slackワークスペースの [#glossary-localizations](https://cloud-native.slack.com/archives/C02N2RGFXDF) チャンネルに参加し、私たちにメッセージを送ってください。
既存のチームに参加することも、新しいチームを作ることもできます。
(何が必要かは、[ローカライゼーションガイド](https://github.com/cncf/glossary/blob/main/LOCALIZATION.md)を読んでください)。
チームの貢献プロセスの詳細を収集するために、目的の言語の **How to contribute** ガイドをお読みください[^1]。

[^1]: 訳注: 日本語へのローカライゼーションをする際には、[CNCF日本語ローカライゼーション向けガイドライン](https://github.com/cncf/techdocs/blob/main/docs/localization/ja/README.md)を参考にしてください。

## スペルチェック {#spell-check}

スペルチェックが失敗する理由は、主に2つあります：

- PRにスペルミスが含まれている。
- PRには、単語リストに登録されていない単語が含まれています。

新しい単語をリストに追加するには、次の手順に従います：

1. PRの中に「wordlist.txt」というファイルを見つけます。
2. 「このファイルを編集する」をクリックし、不足している単語をアルファベット順に追加します。
3. コミットメッセージを追加し、「サインオフして変更を提案する」を選択します。

**注意**：スペルチェックは大文字と小文字を区別しません。


**[The Good Docs Project](https://thegooddocsproject.dev/)のテンプレートに基づき、このガイドを更新しました。**
