---
title: 可擴展性
status: Completed
category: 屬性
tags: ["基本原理", "屬性", ""]
---

<!--
Scalability refers to how well a system can grow. 
That is increasing the ability to do whatever the system is supposed to do. 
For example, a [Kubernetes](/kubernetes/) [cluster](/cluster/) scales by 
increasing or reducing the number of [containerized](/containerization/) apps, 
but that scalability depends on several factors. 
How many [nodes](/nodes/) does it have, how many [containers](/container/) can each node handle, 
and how many records and operations can the control plane support?
-->
可擴展性指的是一個系統能夠擴大成長的能力，
也就是增加系統執行其預定功能的能力。
舉例來說，
[Kubernetes](/zh-tw/kubernetes/) [叢集](/zh-tw/cluster/) 透過增減 [容器化](/zh-tw/containerization/) 應用程式的數量來實現擴展，
但這種可擴展性取決於幾個因素。
它擁有多少 [節點](/zh-tw/nodes/)、每個節點可以處理多少 [容器](/zh-tw/container/)，
以及控制平面能夠支援多少記錄和操作？

<!--
A scalable system makes it easy to add more capacity. 
We differentiate between two scaling approaches. 
On the one hand, there is [horizontal scaling](/horizontal-scaling/) which adds more nodes to handle increased load. 
In contrast, in [vertical scaling](/vertical-scaling/) individual nodes are made more powerful to perform more transactions 
(e.g. by adding more memory or CPU to an individual machine). 
A scalable system is able to change easily and meet user needs.
-->
可擴展性的系統使增加容量變得容易。
主要區分為兩種擴展方法。一方面，
有 [水平擴展](/zh-tw/horizontal-scaling/) 增加更多節點以處理增加的負載。
相比之下，
在 [垂直擴展](/zh-tw/vertical-scaling/) 中，
單個節點有更強大的功能以執行更多的事務（例如，透過為單個機器添加更多記憶體或 CPU）。
具備可擴展性的系統能夠輕鬆地進行變更，以滿足使用者的需求。