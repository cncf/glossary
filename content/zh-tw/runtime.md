---
title: 執行階段
status: Completed
category: 概念
tags: ["應用程式", "", ""]
---

一般來說，執行階段指的是執行一個軟體。
它是底層作業系統的[抽象](/zh-tw/abstraction/)，將程式的命令轉變為作業系統的相應動作。

在[雲端原生](/zh-tw/cloud-native-apps/)的文本中，_執行階段_ 通常指容器運作時。
容器執行階段具體實作[開放容器倡議](https://opencontainers.org/)的規範，確保不同容器協調技術的一致處理。

## 解決的問題 {#problem-it-addresses}

如果沒有容器執行階段的抽象，應用程式就必須處理每個作業系統的所有機制，從而增加了執行應用程式的複雜性。

## 如何幫助我們 {#how-it-helps}

容器執行時期是 Kubernetes 等容器協調器的必要組成部分。
它們處理容器生命周期，主要做三件事。
首先，它定義了如何指定容器映像以及執行時期如何取得這些映像。
其次，它們處理如何拆解、分層、掛載和執行這些映像。
此外，執行階段還負責管理硬體資源，處理所有這些作業系統級的動作。
其中包括資源分配和隔離。
隨著時間的推移，不同的容器執行階段產品不斷發展，最終形成了 OCI 規範，
成為容器執行階段的標準。

引入這一標準後，終端使用者可以將任何符合 OCI 標準的執行階段與任何符合 OCI 標準的容器協調器（如 Kubernetes）整合起來。

## 相關術語 {#related-terms}

- [雲端原生](/zh-tw/cloud-native-apps/)
- [容器化](/zh-tw/containerization/)
- [容器協調](/zh-tw/container-orchestration/)
- [微服務架構](/zh-tw/microservices-architecture/)
