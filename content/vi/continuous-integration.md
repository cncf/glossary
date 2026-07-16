---
title: Tích hợp liên tục (Continuous integration - CI)
status: Completed 
category: concept
tags: ["application", "methodology", ""]
---

Tích hợp liên tục (Continuous integration), thường được viết tắt là CI, là phương pháp tích hợp các thay đổi mã nguồn thường xuyên nhất có thể.
CI là điều kiện tiên quyết cho [phân phối liên tục](/continuous-delivery/) (CD).
Thông thường, quy trình CI bắt đầu khi các thay đổi mã nguồn được commit vào hệ thống kiểm soát mã nguồn (Git, Mercurial, hoặc Subversion)
và kết thúc với một sản phẩm đã được kiểm thử sẵn sàng để được sử dụng bởi hệ thống CD.

## Vấn đề nó giải quyết

Các hệ thống phần mềm thường lớn và phức tạp, với nhiều nhà phát triển bảo trì và cập nhật chúng.
Làm việc song song trên các phần khác nhau của hệ thống,
các nhà phát triển này có thể tạo ra các thay đổi xung đột và vô tình phá vỡ công việc của nhau.
Ngoài ra, với nhiều nhà phát triển làm việc trên cùng một dự án,
bất kỳ công việc hàng ngày nào như kiểm thử và đánh giá chất lượng mã nguồn đều cần được lặp lại bởi mỗi nhà phát triển, lãng phí thời gian.

## Lợi ích mang lại

Phần mềm CI tự động kiểm tra xem các thay đổi mã nguồn có được hợp nhất một cách sạch sẽ hay không mỗi khi nhà phát triển commit một thay đổi.
Đó là một phương pháp gần như phổ biến để sử dụng máy chủ CI để chạy đánh giá chất lượng mã nguồn, kiểm thử, và thậm chí là triển khai.
Do đó, nó trở thành một cách triển khai cụ thể của quy trình kiểm soát chất lượng trong các nhóm.
CI cho phép các nhóm phần mềm biến mỗi lần commit mã nguồn thành một thất bại rõ ràng hoặc một bản phát hành khả thi.

## Thuật ngữ liên quan

* [Phân phối liên tục](/continuous-delivery/)
* [Triển khai liên tục](/continuous-deployment/)
