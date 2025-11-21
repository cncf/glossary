---
title: Giao diện lập trình ứng dụng (API)
status: Completed
category: technology
tags: ["architecture", "fundamental", ""]
---

API là một cách để các chương trình máy tính tương tác với nhau.
Cũng giống như con người tương tác với website thông qua giao diện web, 
API là giao diện cho phép các chương trình máy tính tương tác với nhau.
Tuy nhiên, khác với tương tác của con người, API có các giới hạn về những điều có thể và không thể làm được 
để đảm bảo sự giao tiếp giữa các chương trình được ổn định và hiệu quả.

## Vấn đề nó giải quyết

Do các ứng dụng ngày càng trở nên phức tạp, mỗi sự thay đổi nhỏ trong mã nguồn có thể ảnh hưởng lớn tới nhiều chức năng khác. 
Để có thể vừa mở rộng vừa duy trì tính ổn định, các ứng dụng cần được thiết kế theo hướng mô-đun hóa các chức năng.
Thiếu API, các ứng dụng không có một khuôn khổ thống nhất để giao tiếp với nhau, khiến việc 
[mở rộng](/scalability/) và tích hợp trở nên khó khăn hơn.

## Lợi ích mang lại

Các API cho phép các chương trình hoặc ứng dụng tương tác và chia sẻ thông tin theo một cách thức được xác định rõ ràng và dễ hiểu.
API là nền tảng cấu thành các ứng dụng hiện đại, cung cấp cho lập trình viên cơ chế để tích hợp các ứng dụng với nhau.
Khi nói đến các ứng dụng [microservices](/microservices-architecture/) phối hợp với nhau, chúng ta có thể hiểu rằng chúng đang tương tác với nhau thông qua API.
