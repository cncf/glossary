---
title: Abstraction
status: Completed
category: Property
tags: ["architecture", "", ""]
---

In the context of computing, an abstraction is a representation that 
hides specifics from a consumer of [services](/service/) 
(a consumer being a computer program or human), 
making a system more generic and thus easily understood. 
A good example is your laptop's operating system (OS). 
It abstracts away all the details of how your computer works. 
You don't need to know anything about CPU, memory, and how programs are handled, 
you just operate the OS and the OS deals with the details. 
All these details are hidden behind the OS "curtain" or abstraction. 

Systems typically have multiple abstraction layers. 
This significantly simplifies development. 
When programming, developers build components compatible with a particular abstraction layer and 
don't have to worry about all underlying specifics that can be very heterogeneous. 
If it works with the abstraction layer, it works with the system 
— no matter what's under the hood. 
