---
title: 持續整合 (CI)
status: Completed 
category: 概念
tags: ["應用程式", "方法論", ""]
---

## 是什麼 {#what-it-is}

持續整合，通常縮寫為 CI，是盡可能定期整合程式碼更改的實踐方法。
CI 是 [持續交付](/zh-tw/continuous-delivery/)（CD）的前置工作。
傳統上，CI 的流程從程式碼更動提交到版本控管（Git、Mercurial 或 Subversion）時開始，
以準備被 CD 系統使用的測試產出物（tested artifact）直到結束。

## 解決的問題 {#problem-it-addresses}

軟體系統通常是龐大且複雜的，有許多開發人員在維護和更新它們。
在系統的不同部分同時工作，
這些開發人員可能會做出互相衝突的修改，並在無意間破壞對方的工作。
此外，由於多位開發人員在同一個專案上工作，
任何日常任務，如測試和計算程式碼品質，都需要每位開發人員重複執行，浪費了時間。

## 如何幫助我們 {#how-it-helps}

每當開發人員提交修改時，CI 軟體會自動檢查程式碼更動是否合併得很乾淨。
使用 CI 伺服器來執行程式碼品質檢查、測試甚至部署，這幾乎是一種普遍存在的做法。
因此，它成為團隊內部品質控管的具體實現方式。
CI 讓軟體團隊能將每次的程式碼提交轉變為具體的失敗或可用的發布候選版本。

## 相關術語 {#related-terms}

* [持續交付](/zh-tw/continuous-delivery/)
* [持續部署](/zh-tw/continuous-deployment/)
