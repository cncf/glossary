---
title: Triển khai liên tục (Continuous Deployment - CD)
status: Completed
category: concept
tags: ["application", "methodology", ""]
---

Triển khai liên tục (Continuous Deployment), thường được viết tắt là CD, là một bước xa hơn của [phân phối liên tục](/continuous-delivery/)
bằng cách triển khai phần mềm hoàn chỉnh trực tiếp vào môi trường sản xuất.
Triển khai liên tục (CD) đi đôi với [tích hợp liên tục](/continuous-integration/) (CI),
và thường được gọi là CI/CD.
Quy trình CI kiểm tra xem các thay đổi đối với một ứng dụng nhất định có hợp lệ hay không,
và quy trình CD tự động triển khai các thay đổi mã nguồn qua các môi trường của tổ chức từ kiểm thử đến production.

## Vấn đề nó giải quyết

Phát hành các phiên bản phần mềm mới có thể là một quá trình tốn nhiều công sức và dễ xảy ra lỗi.
Đây cũng thường là điều mà các tổ chức chỉ muốn thực hiện không thường xuyên để tránh các sự cố trên môi trường production
và giảm số lượng thời gian kỹ sư cần phải làm việc ngoài giờ làm việc thông thường.
Các mô hình triển khai phần mềm truyền thống khiến các tổ chức rơi vào một vòng luẩn quẩn
trong đó quy trình phát hành phần mềm không đáp ứng được nhu cầu của tổ chức về cả tính ổn định và tốc độ phát triển tính năng.

## Lợi ích mang lại

Bằng cách tự động hóa chu kỳ phát hành và buộc các tổ chức phải phát hành lên môi trường sản xuất thường xuyên hơn,
CD mang lại cho các nhóm vận hành những lợi ích tương tự như CI đã mang lại cho các nhóm phát triển.
Cụ thể, nó buộc các nhóm vận hành phải tự động hóa các phần triển khai trên môi trường production khó khăn và dễ xảy ra lỗi, giảm rủi ro tổng thể.
Nó cũng giúp các tổ chức chấp nhận và thích ứng tốt hơn với các thay đổi trên môi trường production, dẫn đến tính ổn định cao hơn.

## Thuật ngữ liên quan

* [Tích hợp liên tục](/continuous-integration/)
* [Phân phối liên tục](/continuous-delivery/)
