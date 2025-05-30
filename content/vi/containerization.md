---
title: Container hóa (Containerization)
status: Completed
category: Technology
tags: ["application", "", ""]
---

Containerization (đóng gói dưới dạng container) là quá trình đóng gói mã nguồn ứng dụng cùng với các thư viện và phụ thuộc cần thiết để chạy mã đó thành một tệp thực thi nhẹ duy nhất – được gọi là [container image](/container-image/).

## Vấn đề mà nó giải quyết

Trước khi [container](/container/) trở nên phổ biến, các tổ chức thường sử dụng [máy ảo (VM)](/virtual-machine/) để điều phối nhiều ứng dụng trên cùng một [máy vật lý (bare-metal)](/bare-metal-machine/).
Máy ảo có kích thước lớn hơn container rất nhiều và cần một hypervisor để chạy.
Do kích thước lớn của các mẫu máy ảo, việc lưu trữ, sao lưu và truyền tải cũng trở nên chậm chạp.
Hơn nữa, máy ảo còn có nguy cơ gặp phải vấn đề "sai lệch cấu hình" (configuration drift), vi phạm nguyên tắc [hạ tầng bất biến](/immutable-infrastructure/).

## Lợi ích mà nó mang lại

Container image có kích thước nhẹ (khác biệt rõ so với máy ảo truyền thống),
và quá trình container hóa chỉ cần một tệp liệt kê các phụ thuộc.
Tệp này có thể được quản lý bằng hệ thống kiểm soát phiên bản và quy trình build có thể được tự động hóa,
giúp tổ chức tập trung vào những ưu tiên khác trong khi quá trình build được xử lý tự động.

Mỗi container image được lưu trữ với một định danh duy nhất,
liên kết chặt chẽ với nội dung và cấu hình cụ thể của nó.
Khi container được tạo và tái tạo,
nó luôn được khởi động lại ở trạng thái ban đầu,
giúp loại bỏ hoàn toàn hiện tượng trôi cấu hình.
