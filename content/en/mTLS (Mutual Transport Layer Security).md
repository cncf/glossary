---
title: mTLS (Mutual Transport Layer Security)
status: Feedback Appreciated
category: Concept
---

## What it is
Mutual TLS (mTLS) is a way to authenticate and encrypt a connection between two endpoints. Mutual TLS is simply the standard Transport Layer Security (TLS) protocol, with the additional restriction that identity on both sides of the connection must be validated. Mutual authentication is part of the TLS standard and has been part of the specification since it was called Secure Sockets Layer (SSL). Any web server that uses TLS to secure its traffic should be capable of mutual authentication.

## Problem it addresses
Without mTLS there is a risk of attacks on genuine apps from malicious third parties. It ensures that no unauthorized parties can send potentially malicious API requests.
For everyday purposes, one-way authentication provides sufficient protection. The goals of TLS on the public Internet are 1) to ensure that people do not visit spoofed websites, 2) to keep private data secure and encrypted as it crosses the various networks that comprise the Internet, and 3) to make sure that data is not altered in transit.

## How it helps
mTLS helps ensure that traffic is secure and trusted in both directions between a client and server. This provides an additional layer of security for users who log in to an organization's network or applications. It also verifies connections with client devices that do not follow a login process, such as Internet of Things (IoT) devices. mTLS prevents various kinds of attacks, including On-path attacks, Spoofing attacks, Credential stuffing, Brute force attacks, Malicious API requests.