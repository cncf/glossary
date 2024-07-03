---
title: WebAssembly
status: Feedback Appreciated
category: Concept
tags: ["Application", "", ""]
---

WebAssembly (often abbreviated as Wasm) is a binary instruction format designed as a portable target for compiling high-level languages like C, C++, Rust, and others, enabling deployment on the web for client-side and server-side applications.
It is a low-level bytecode format that can be executed in a virtual machine, typically integrated into web browsers. While originally developed for the web, Web Assembly is a Universal Runtime and sees applications in non-web environments such as IoT and edge devices. 

## Problem it addresses
The LAMP (Linux Apache MySQL PHP) stack was the template for a web based application for many years. Later Javascript evolved to be the king of front end application development, and node.js based applications became the norm. As the technology around the web evolved it heavily favored interpreted languages, which are typically less performant than compiled languages even with the advancement in the technologies. 
While JavaScript has improved over the years, it still faces performance limitations when executing computationally intensive tasks.
Interpreted languages which are compiled at runtime often see performance and functionality issues as the code is executed across different environments. Where as compiled binaries typically run the same as long as they've compiled correctly. However historically a compiled binary has been less suited for the web environment. 

## How it helps
WebAssembly provides a low-level binary format that can be executed at near-native speeds, enabling web applications to perform complex computations efficiently. 
It allows developers to leverage their existing skills in languages like C, C++, Rust, and others to build web applications.
This opens up new possibilities and allows developers to reuse existing codebases and libraries.
Also, WebAssembly modules can run consistently across different browsers, operating systems, and devices, reducing the need for platform-specific code.

Overall, WebAssembly addresses performance limitations, language restrictions, code portability, security concerns, code size, and loading time issues, providing a more robust and flexible environment for web application development.
