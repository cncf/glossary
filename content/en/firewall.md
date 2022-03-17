---
title: Firewall
status: Feedback Appreciated
category: Term
---

## What it is
A firewall is a system that filters network traffic to protect against malware and network-based threats. It can either let traffic pass or block it based on specified rules. Firewalls can be hardware, software, or a combination of the two.

## Problem it addresses
Without a firewall, any traffic can enter a network and interfere. Take a [microservices](/microservices/)-based banking app. The services are sending highly sensitive financial data over their network to communicate with one another. With no firewall, a malicious actor could enter the network, intercept communication, and inflict damage.
If a computer is not protected by a firewall, it allows unrestricted access to other networks.
 

## How it helps
A firewall examines network traffic using pre-defined rules. All traffic is filtered, and any traffic coming from untrustworthy or suspect sources is blocked — only traffic configured to be accepted gets in. Firewalls establish a barrier between secured and controlled internal trusted networks. But note, in a cloud native world, firewalls are no longer enough. While they are needed, they can be hacked. That's why in-transit traffic must also be protected. And this is what [service meshes](/service_mesh/) do. 
It only accepts traffic that has been configured to accept. 
They establish a barrier between secured and controlled internal networks that can be trusted, such as Home or Work network and untrusted outside networks, such as the Internet.
