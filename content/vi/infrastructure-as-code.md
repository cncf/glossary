---
title: Cở sở hạ tầng bằng Code (Infrastructure as Code) (IaC)
status: Completed
category: concept
tags: ["infrastructure", "methodology", ""]
---

Infrastructure as code(IaC) các quản lý lưu trữ định nghĩa hạ tầng dưới dạng một hoặc nhiều file.
Điều này thay thế mô hình truyền thống, nơi infrastructure as a service được cấp phát thủ công,
thường thông qua các shell script hoặc công cụ cấu hình khác.

## Vấn đề mà nó giải quyết

Việc xây dựng ứng dụng theo hướng cloud native đòi hỏi hạ tầng phải có khả năng có thể loại bỏ (disposable) và reproducible (có thể tái tạo).
Hạ tầng cũng cần để [mở rộng](/scalability/) theo nhu cầu một cách tự động và lặp lại, thậm chí không cần sự can thiệp của con người.
Việc cấp phát thủ công không đáp ứng được yêu cầu về tốc độ phản hồi và nhu cầu mở rộng của [cloud native applications](/cloud-native-apps/).
Các thay đổi hạ tầng thủ công không thể tái tạo, nhanh chóng gặp giới hạn về quy mô và dễ gây ra lỗi cấu hình.

## Lợi ích mang lại

Bằng cách biểu diễn các tài nguyên trung tâm dữ liệu như server, load balancer, subnet dưới dạng code,
đội ngũ hạ tầng có thể có một nguồn cấu hình duy nhất (single source of truth) cho toàn bộ hệ thống,
và có thể quản lý trung tâm dữ liệu trong quy trình [CI](/continuous-integration/)/[CD](/continuous-delivery/),
áp dụng kiểm soát phiên bản và chiến lược triển khai tự động.
