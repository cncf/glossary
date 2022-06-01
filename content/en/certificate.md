---
title: Certificate
status: Feedback Appreciated
category: technology
---


## What it is

A Certificate, often referred to as digital certificate, public key certificate or ssl certificate is a technology used to verify the identity of an entity in the internet. An entity in this context can be the sender of an email or a website for example. The other important use case for certificates is to encrypt communication between entities in the internet. 


## Problem it addresses

Communication over the internet is not encrypted by default. That means that all communication could potentially be intercepted and sensitive information like usernames and passwords, for example, could be leaked. Think about your favorite coffeeshop or a hotel lobby, where you connect to the available wifi router. Someone could get between your device and the wifi router and grab your credentials or read your emails and chats.


## How it helps

Certificates are a technology that on the one side verify that communication partners are who they pretend to be. For example email participants or a website that you visit on your browser. Modern email clients will notify you if a participants' identity is correct, and browsers will do the same (notice the little lock in front of the URL). The trust on a certificate is given by the trust in the Certificate Authority that issued the certificate which guarantees for the identity of the certificate holder to be correct.

On the other side certificates are used to encrypt the communication between entities in the internet. Therefore they contain a public key which is used to encrypt data, which can only be decrypted again with the matching private key. As the name says, public keys are shared publicly, but private keys are held private. Take a website for example: Your browser encrypts data going to the website using the public key, but only the website server knows the private key, thus can encrypt the data again. If someone would intercept the communication it would be nearly impossible to actually read the data. 


## Related terms
