---
title: 雙向 TLS (mTLS)
status: Completed
category: 概念
tags: ["安全", "網路", ""]
---

雙向 TLS (mTLS) 是一種驗證和加密兩個[服務](/zh-tw/service/)之間發送訊息的技術。 
雙向 TLS 是標準的[傳輸層安全性協議](/zh-tw/transport-layer-security) (TLS)，
但不是只驗證單條連線，而是驗證雙方服務。

## 解決的問題 {#problem-it-addresses}

[微服務](/zh-tw/microservices)透過網路進行通訊，
就像你的 wifi 網路一樣，透過網路傳輸的通訊也可能被駭客入侵。
mTLS 可以確保未經授權的一方無法監聽或偽造合法要求。

## 如何幫助我們 {#how-it-helps}

mTLS 可以確保用戶端和伺服器之間雙向通訊的安全和信任，
為登入網路或應用程式的使用者提供額外的安全保障。
它還能驗證不遵循登入流程的用戶端裝置的連線，例如物聯網（IoT）設備。
mTLS 可以防止如中間人攻擊、欺騙攻擊、憑證填充、暴力攻擊等攻擊。
