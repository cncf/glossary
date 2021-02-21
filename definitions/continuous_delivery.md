---
title: Continuous Delivery (CD)
status: Feedback Appreciated
category: concept
---
## Continuous Delivery (CD)

Continuous Delivery (CD) is a set of practices in which code changes are automatically deployed into either acceptance environments or production. CD crucially includes procedures to ensure that software is adequately tested before deployment as well as provide a way to rollback changes if deemed necessary. Continuous Integration is the first step towards Continuous Delivery (i.e. changes have to merge cleanly before they can be tested and deployed).

Deploying reliable updates becomes a problem at scale.  Ideally, we would like to be able to have more update cycles to give better value to our end users but doing it manually incurs high transaction costs for every change. To avoid these costs, historically organisations have released less frequently, deploying more changes at once, and therefore increasing the risk that something goes wrong. Continuous Delivery ensures a  deployment strategy that adequately tests the software and allows rollback to a previously working version if the end result isn’t desirable. 

CD strategies create a fully automated platform that tests and deploys the software using a variety of deployment strategies such as canary builds or blue-green tests. This allows developers to have a regular and frequent update cycle while also giving them peace of mind that the new revision has been tested and that they have a way to minimize the blast radius if things go sideways. Typically, the trunk-based development is used in CD strategies as opposed to feature branching. 

