---
title: Phân phối liên tục (Continuous Delivery - CD)
status: Completed
category: concept
tags: ["methodology", "application", ""]
---

Phân phối liên tục (Continuous delivery), thường được viết tắt là CD, là một tập hợp các phương pháp
trong đó các thay đổi mã nguồn được tự động triển khai vào môi trường kiểm thử (acceptance environment)
(hoặc, trong trường hợp triển khai liên tục, vào môi trường sản xuất).
CD bao gồm các quy trình quan trọng để đảm bảo phần mềm được kiểm thử đầy đủ
trước khi triển khai và cung cấp cách thức để hoàn tác các thay đổi nếu cần thiết.
[Tích hợp liên tục](/continuous-integration/) (CI) là bước đầu tiên hướng tới
phân phối liên tục (tức là, các thay đổi phải được hợp nhất một cách sạch sẽ trước khi được kiểm thử và
triển khai).

## Vấn đề nó giải quyết

Triển khai các bản cập nhật [đáng tin cậy](/reliability/) trở thành vấn đề khi mở rộng quy mô.
Lý tưởng nhất, chúng ta nên triển khai thường xuyên hơn để mang lại giá trị tốt hơn cho người dùng cuối.
Tuy nhiên, thực hiện thủ công dẫn đến chi phí giao dịch cao cho mỗi thay đổi.
Trong quá khứ, để tránh những chi phí này, các tổ chức đã phát hành ít thường xuyên hơn,
triển khai nhiều thay đổi cùng một lúc và làm tăng nguy cơ xảy ra sự cố.

## Lợi ích mang lại

Các chiến lược CD tạo ra một lối đi hoàn toàn tự động đến môi trường sản xuất
để kiểm thử và triển khai phần mềm bằng cách sử dụng các chiến lược triển khai khác nhau
như [canary](/canary-deployment/) hoặc [blue-green](/blue-green-deployment/).
Điều này cho phép các nhà phát triển triển khai mã nguồn thường xuyên, giúp họ yên tâm rằng phiên bản mới đã được kiểm thử.

## Thuật ngữ liên quan

* [Tích hợp liên tục](/continuous-integration/)
* [Triển khai liên tục](/continuous-deployment/)
