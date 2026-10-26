---
title: Mở Rộng Theo Chiều Ngang (Horizontal Scaling)
status: Completed
category: Concept
tags: ["infrastructure", "", ""]
---

Mở rộng theo chiều ngang là kỹ thuật tăng năng lực của một hệ thống bằng cách thêm nhiều [node](/nodes/),
thay vì bổ sung thêm tài nguyên tính toán cho từng node (cách sau được gọi là [mở rộng theo chiều dọc](/vertical-scaling/)).
Giả sử chúng ta có một hệ thống với 4GB RAM và muốn tăng năng lực lên 16GB RAM.
Mở rộng theo chiều ngang nghĩa là thêm 3 node, mỗi node 4GB RAM, thay vì chuyển sang
một hệ thống có 16GB RAM.

Cách tiếp cận này cải thiện hiệu năng của ứng dụng bằng cách thêm các phiên bản (instance) mới, hay các node mới,
để phân phối khối lượng công việc tốt hơn.
Nói một cách đơn giản, mục tiêu là giảm tải cho máy chủ
thay vì tăng năng lực của từng máy chủ riêng lẻ.

## Vấn đề nó giải quyết

Khi nhu cầu sử dụng một ứng dụng tăng vượt quá năng lực hiện tại của phiên bản ứng dụng đó,
chúng ta cần tìm cách [mở rộng](/scalability/) (tăng năng lực cho) hệ thống.
Chúng ta có thể thêm node vào hệ thống (mở rộng theo chiều ngang)
hoặc thêm tài nguyên tính toán cho các node hiện có (mở rộng theo chiều dọc).

## Cách nó giúp ích

Mở rộng theo chiều ngang cho phép ứng dụng mở rộng tới mọi giới hạn mà cluster bên dưới cung cấp.
Bằng cách thêm nhiều phiên bản vào hệ thống, ứng dụng có thể xử lý số lượng yêu cầu lớn hơn.
Nếu một node có thể xử lý 1.000 yêu cầu mỗi giây,
mỗi node được thêm vào sẽ giúp tăng tổng số yêu cầu xử lý được thêm khoảng 1.000 yêu cầu mỗi giây.
Điều này cho phép ứng dụng xử lý nhiều công việc đồng thời hơn
mà không cần tăng năng lực của bất kỳ node cụ thể nào.

## Thuật ngữ liên quan

* [Mở rộng theo chiều dọc](/vertical-scaling/)
* [Tự động mở rộng](/auto-scaling/)
