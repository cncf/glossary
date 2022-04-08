---
title: Digital Certificate
status: Feedback Appreciated
category: Concept
---

## What it is
Digital certificates or public key certificates are issued by a certificate authority (CA). These certificates are electronic files or passwords that allow entities to exchange data or resources over the internet securely.

Digital certificate provides confirmation that a website is genuine and that documents and emails are authentic. This projects public trust, assuring clients that they are dealing with a genuine company that values their security and privacy.. Just as a passport certifies an individual's identity, a digital certificate establishes the user's identity. Note that a user can be a person or service within a [microservice](https://glossary.cncf.io/microservices/) app. 

## Problem it addresses
Networks, such as the internet, are inherently insecure. Communication is managed through protocols (rules and policies to process data), but these are generic and designed to focus on robust communication rather than secure transactions.

There is no centralized mechanism to secure communication. Consequently, each application must have its authentication strategy. Rather than building a generic, reusable security mechanism, applications relied on proprietary or embedded techniques for shuffling account information across the network for validation.

## How it helps
Common use of digital certificates is to confirm the authenticity of a website to a web browser, which is also known as a secure sockets layer or SSL certificate. They provide the same encryption quality for small to large businesses alike. 

Digital certificates are highly scalable and can even be used to secure personal devices. Institutions known as public trusted certificate authorities handle the issuance of digital certificates, ensuring they are reliable. Certificate management can be easily centralized through managed public key infrastructure platforms. 
