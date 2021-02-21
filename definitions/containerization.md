---
title: Containerization
status: Feedback Appreciated
category: concept
---
## Containerization

Containerization is the process of bundling an application and its dependencies into a container image (see container image). The container build process requires adherence to the Open Container Initiative (OCI) standard. The containerization tool does not matter as long as the output is a container image that adheres to the standard.

Before containers, organizations relied on virtual machines to orchestrate multiple applications on a single bare-metal machine. Virtual machines (VMs) are significantly larger than containers and require a hypervisor to run. Creating the VM templates was also slow due to the storage, backup, and transfer of these larger VM templates.

Container images are lightweight compared to VMs. The containerization process requires a file with a list of dependencies. This file can be version controlled the build process can be automated, allowing an organization to focus on other priorities while the automated processes take care of the build.