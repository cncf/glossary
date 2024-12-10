---
title: Kubernetes
status: Completed
category: 技術
tags: ["基礎設施", "基本原理", ""]
---

## 是什麼 {#what-it-is}

Kubernetes （通常縮寫為 K8s）是一個開源的容器協調工具。
它可以在現代基礎設施上自動管理容器化應用程式的生命週期，
就像一個能夠在[分散式系統](/zh-tw/distributed-systems/)中管理應用程式的「資料中心作業系統」。

Kubernetes 會在[叢集](/zh-tw/cluster/)的[節點](/zh-tw/nodes/)間對[容器](/zh-tw/container/)們進行排程，
並結合多個基礎設施上的資源，
例如負載平衡器、持久性儲存空間等等，
來執行容器化的應用程式。

Kubernetes 具有自動化和可擴展的特性，
讓使用者能夠以可重現的宣告式設定來部署應用程式（請見下文）。
經驗豐富的 Kubernetes 從業人員可以根據其需求，
透過它的 [API](/zh-tw/application-programming-interface/) 來利用其自動化功能進行擴展。

## 解決的問題 {#problem-it-addresses}

長期以來，基礎設施自動化和宣告式設定管理一直是重要的概念，
但隨著[雲端運算](/zh-tw/cloud-computing/)的普及，這些概念變得更加地迫切。
隨著對運算資源的需求增加，
組織需要更多的維運能力，同時又要更少的工程師數量，
因此新的技術和工作方式便變得不可或缺。

## 如何幫助我們 {#how-it-helps}

Kubernetes 與傳統[基礎設施即程式碼](/zh-tw/infrastructure-as-code/)的工具類似，都有助於自動化，
但 Kubernetes 具有使用容器的優勢。
因此比[虛擬機器](/zh-tw/virtual-machine/)或實體機器更不容易出現組態漂移。

此外，Kubernetes 是透過宣告式設定來運作的，
這意味著操作者並非告訴機器應該要執行什麼指令，
而是描述基礎設施應該要長什麼樣子；
通常是透過清單檔案（例如 YAML）的形式來進行描述。
然後，Kubernetes 便會自行完成「如何達成這個樣子」的部分。
這使得 Kubernetes 能很好地相容於「基礎設施即程式碼」。

Kubernetes 還具有[自我修復](/zh-tw/self-healing/)的功能。
叢集的實際狀態將始終與維運者所期望的狀態相符。
當 Kubernetes 偵測到與清單檔案描述不符的情況時，
Kubernetes 控制器便會修復這個問題。
雖然 Kubernetes 使用的基礎設施可能會不斷地變化，
但 Kubernetes 會自動不斷地隨之改變，
以確保與期望的狀態保持一致。
