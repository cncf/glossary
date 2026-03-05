---
title: Multitenancy
status: Completed
category: Property
tags: ["architecture", "property", ""]
---

Multitenancy (hay multi-tenancy) là khái niệm để chỉ một phần mềm độc lập có thể phục vụ nhiều tenants.
Một *tenant* có thể hiểu là một người dùng, một ứng dụng, hay một nhóm các người dùng, 
ứng dụng cùng sử dụng phần mềm này để làm việc với dữ liệu riêng của mình.
Các tenants này không chia sẻ dữ liệu cho nhau (trừ khi được chủ sở hữu cho phép) và thậm chí không hề biết đến nhau.

Một tenant có thể chỉ là một người dùng độc lập với một tài khoản đăng nhập duy nhất, 
ví dụ như phần mềm hỗ trợ công việc cá nhân, hoặc có thể là cả một tập đoàn lớn với hàng nghìn tài khoản đăng nhập,
mỗi tài khoản có quyền hạn riêng nhưng vẫn liên quan đến nhau theo nhiều cách. 
Google Mail, Google Docs, Microsoft Office 365, Salesforce CRM, và Dropbox là các ví dụ điển hình về phần mềm multitenant,
cùng nhiều phần mềm khác được thiết kế theo mô hình multitenant hoàn toàn hoặc một phần.

## Vấn đề mà nó giải quyết

Nếu không có multitenancy, mỗi tenant sẽ cần một bản cài đặt phần mềm riêng biệt cho chính mình.
Việc này làm tăng lượng tài nguyên sử dụng và nguồn lực bảo trì, dẫn đến chi phí cho phần mềm cao hơn.

## Lợi ích mang lại

Các phần mềm multitenant cung cấp cho mỗi tenant một môi trường riêng biệt (bao gồm dữ liệu, cấu hình, danh sách các thông tin xác thực,...),
phục vụ đồng thời nhiều tenants cùng lúc. Ở góc nhìn của tenant, mỗi tenant giống như đang có một bản cài đặt phần mềm riêng,
trong khi thực tế tất cả đều đang dùng chung cùng một phần mềm. Điều này là nhờ phần mềm được chạy trên các máy chủ và cho phép
các tenants kết nối đến nó qua mạng thông qua một giao diện và/hoặc [API](/vi/application-programming-interface/) 
(xem thêm [Kiến trúc máy khách-máy chủ](/vi/client-server-architecture/)).
Với các phần mềm multitenant, các tenants chia sẻ chung tài nguyên cho một bản cài đặt duy nhất mà không ảnh hưởng đến nhau 
hoặc chỉ tương tác trong phạm vi được định nghĩa sẵn và có kiểm soát.
Việc tiết kiệm tài nguyên ở phía nhà cung cấp phần mềm giúp giảm chi phí phần mềm cho người dùng 
(ví dụ như dịch vụ email hay các trình soạt thảo văn bản trực tuyến).

## Các khái niệm liên quan

Multitenancy không đồng nghĩa với SaaS, mặc dù phần lớn các SaaS thường xây dựng 
theo mô hình multitenant và thậm chí xem đây là một trong các dịch vụ cốt lõi của nó.