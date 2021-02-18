---
title: Containerization
status: Feedback Appreciated
category: concept
---
## Containerization

Containerization is the process of bundling an application and its dependencies into a container image. The container build process requires adherence to the [Open Container Initiative] (https://opencontainers.org) (OCI) standard. As long as the output is a container image that adheres to this standard, which containerization tool is used does not matter.

Before containers became prevalent, organizations relied on virtual machines (VMs) to orchestrate multiple applications on a single bare-metal machine. VMs are significantly larger than containers and require a hypervisor to run. Due to the storage, backup, and transfer of these larger VM templates, creating the VM templates is also slow.

Compared to VMs, container images are lightweight. The containerization process requires a file with a list of dependencies. This file can be version controlled the build process can be automated, allowing an organization to focus on other priorities while the automated processes take care of the build.
