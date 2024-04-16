---
title: Firewall
status: Deprecated
draft: true
category: Technology
tags: ["", "", ""]
---

A firewall is a system that filters network traffic on the basis of specified rules. 
Firewalls can be hardware, software, or a combination of the two.

## Problem it addresses

By default, a network will allow anyone to enter and depart as long as they follow the network's routing rules. 
Because of this default behavior, securing a network is challenging. 
For example, in a [microservices](/microservices-architecture/)-based banking app, the services communicate with one another 
by transmitting highly sensitive financial data through their network. 
A malicious actor may infiltrate the network, intercept communication, and do damage if there was no firewall in place.
 
## How it helps

A firewall examines network traffic using pre-defined rules. 
All traffic is filtered, and any traffic coming from untrustworthy or suspect sources is blocked 
— only traffic configured to be accepted gets in. 
Firewalls establish a barrier between secured and controlled internal trusted networks. 
