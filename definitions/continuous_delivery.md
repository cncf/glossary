---
title: Continuous Delivery (CD)
status: Completed
category: concept
---
## Continuous Delivery/Deployment (CD)

### What it is
Continuous delivery, often abbreviated as  CD, [is a set of practices](https://www.amazon.com/Continuous-Delivery-Deployment-Automation-Addison-Wesley/dp/0321601912/ref=pd_lpo_14_t_0/145-7791002-8430115?_encoding=UTF8&pd_rd_i=0321601912&pd_rd_r=5fdc1752-6348-4ac4-9689-7f8122aa2722&pd_rd_w=lizN1&pd_rd_wg=SoOLk&pf_rd_p=16b28406-aa34-451d-8a2e-b3930ada000c&pf_rd_r=QZW9GYHYD0FPSKPR6WBK&psc=1&refRID=QZW9GYHYD0FPSKPR6WBK) in which code changes are automatically deployed into an acceptance environment (or, in the case of continuous deployment, into production). CD crucially includes procedures to ensure that software is adequately tested before deployment and provides a way to rollback changes if deemed necessary. Continuous integration (CI) is the first step towards continuous delivery (i.e., changes have to merge cleanly before being tested and deployed).

### Problem it Addresses
Deploying reliable updates becomes a problem at scale. Ideally, we'd deploy more frequently to deliver better value to end-users. However, doing it manually translates into high transaction costs for every change. Historically, to avoid these costs, organizations have released less frequently, deploying more changes at once and increasing the risk that something goes wrong.

### How it Helps
CD strategies create a fully automated path to production that tests and deploys the software using various deployment strategies such as canary or blue-green releases. This allows developers to deploy code frequently,  giving them peace of mind that the new revision has been tested. Typically, trunk-based development is used in CD strategies as opposed to feature branching or pull requests.

