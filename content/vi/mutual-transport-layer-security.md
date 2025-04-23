---
title: Mutual Transport Layer Security (mTLS)
status: Completed
category: Concept
tags: ["security", "networking", ""]
---

Mutual TLS (mTLS) là một kỹ thuật được sử dụng để xác thực và mã hóa các thông điệp được gửi giữa hai [services](/service/). 
Mutual TLS là giao thức [Transport Layer Security](/transport-layer-security/) (TLS) tiêu chuẩn nhưng, 
thay vì chỉ xác thực danh tính của một kết nối, cả hai bên đều được xác thực.

## Vấn đề nó giải quyết

[Microservices](/microservices-architecture/) giao tiếp qua mạng và, 
giống như mạng wifi của bạn, giao tiếp trong quá trình truyền tải qua mạng đó có thể bị tấn công. 
mTLS đảm bảo rằng không có bên trái phép nào có thể nghe lén hoặc mạo danh các yêu cầu hợp pháp.

## Lợi ích của nó

mTLS đảm bảo rằng lưu lượng truyền tải an toàn và đáng tin cậy theo cả hai chiều giữa một client và server, 
cung cấp một lớp bảo mật bổ sung cho người dùng đăng nhập vào mạng hoặc ứng dụng. 
Nó cũng xác minh các kết nối với các thiết bị không tuân theo quy trình đăng nhập thông thường, chẳng hạn như các thiết bị Internet of Things (IoT). 
Các cuộc tấn công như tấn công trên đường truyền, tấn công giả mạo, nhồi thông tin đăng nhập, tấn công brute force, v.v. có thể được ngăn chặn bởi mTLS.
