---
title: Mở Rộng Theo Chiều Dọc (Vertical Scaling)
status: Completed
category: Concept
tags: ["infrastructure", "", ""]
---

Mở rộng theo chiều dọc, còn được gọi là "scale up và scale down", là kỹ thuật
tăng năng lực của một hệ thống bằng cách bổ sung CPU và bộ nhớ cho từng [node](/nodes/) khi khối lượng công việc tăng lên.
Giả sử bạn có một máy tính 4GB RAM và muốn tăng năng lực lên 16GB RAM,
mở rộng theo chiều dọc nghĩa là chuyển sang một hệ thống có 16GB RAM.
(Xem [mở rộng theo chiều ngang](/horizontal-scaling/) để biết một cách mở rộng khác.)

## Vấn đề nó giải quyết

Khi nhu cầu sử dụng một ứng dụng tăng vượt quá năng lực hiện tại của phiên bản ứng dụng đó,
chúng ta cần tìm cách mở rộng (tăng năng lực cho) hệ thống.
Chúng ta có thể thêm tài nguyên tính toán cho các node hiện có (mở rộng theo chiều dọc)
hoặc thêm node vào hệ thống (mở rộng theo chiều ngang).
[Khả năng mở rộng](/scalability/) góp phần nâng cao sức cạnh tranh, hiệu quả, uy tín và chất lượng.

## Cách nó giúp ích

Mở rộng theo chiều dọc cho phép bạn thay đổi cấu hình máy chủ mà không cần thay đổi mã nguồn ứng dụng.
Điều này khác với mở rộng theo chiều ngang, khi ứng dụng phải có khả năng nhân bản để mở rộng, và có thể cần cập nhật mã nguồn.
Mở rộng theo chiều dọc tăng năng lực của một ứng dụng hiện có bằng cách
bổ sung tài nguyên tính toán, cho phép ứng dụng xử lý nhiều yêu cầu hơn và thực hiện nhiều công việc đồng thời hơn.

## Thuật ngữ liên quan

* [Mở rộng theo chiều ngang](/horizontal-scaling/)
* [Tự động mở rộng](/auto-scaling/)
