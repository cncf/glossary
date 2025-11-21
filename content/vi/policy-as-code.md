---
title: Policy as Code (PaC)
status: Completed
category: Concept
tags: ["methodology", "", ""]
---

Policy as Code là cách lưu trữ và áp dụng các quy định kỹ thuật của hệ thống bằng mã hoặc file cấu hình mà máy tính có thể đọc và xử lý tự động.
Phương pháp này thay thế mô hình truyền thống, nơi các chính sách được ghi lại dưới dạng con người có thể đọc được trong các tài liệu riêng biệt.

## Vấn đề nó giải quyết

Việc xây dựng ứng dụng và cơ sở hạ tầng thường bị ràng buộc bởi nhiều chính sách mà một tổ chức đặt ra, 
ví dụ như các chính sách bảo mật cấm lưu trữ thông tin bí mật trong mã nguồn, chạy container với quyền superuser, 
hoặc lưu trữ dữ liệu bên ngoài một khu vực địa lý cụ thể.
Việc kiểm tra thủ công các ứng dụng và cơ sở hạ tầng so với các chính sách đã được ghi lại rất tốn công sức và dễ xảy ra lỗi đối với các nhà phát triển và người đánh giá. 
Các quy trình thủ công không thể đáp ứng các yêu cầu về khả năng phản hồi và quy mô của các ứng dụng cloud native.

## Lợi ích mang lại

Mô tả các chính sách thông qua code cho phép lặp lại và giảm lỗi (không giống như khi thực hiện thủ công). 
Một lợi ích khác của Policy as Code là mã có thể được quản lý bởi hệ thống kiểm soát phiên bản như Git.
Git tạo ra lịch sử nhật ký thay đổi, điều này đặc biệt hữu ích khi có điều gì đó không hoạt động như mong đợi.
Nó cho phép người dùng xác định ai đã thực hiện thay đổi và quay trở lại phiên bản trước đó.
