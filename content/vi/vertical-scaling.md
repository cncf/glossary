---
title: Mở rộng theo chiều dọc (Vertical Scaling)
status: Completed
category: Concept
tags: ["infrastructure", "", ""]
---

Mở rộng theo chiều dọc (Vertical Scaling), còn gọi là “mở rộng lên hoặc xuống” (scaling up and down),
là một kỹ thuật tăng khả năng xử lý của hệ thống bằng cách bổ sung CPU và bộ nhớ cho từng [nút (node)](/nodes/) khi khối lượng công việc tăng lên.
Ví dụ, nếu bạn đang dùng một máy tính có RAM 4GB và muốn nâng lên 16GB,
việc chuyển sang hệ thống có RAM 16GB chính là một hình thức mở rộng theo chiều dọc.
(Xem thêm [mở rộng theo chiều ngang](/horizontal-scaling/) để biết phương pháp khác.)

## Vấn đề cần giải quyết

Khi nhu cầu sử dụng ứng dụng vượt quá khả năng hiện tại của một phiên bản ứng dụng,
chúng ta cần một cách để mở rộng (tăng dung lượng cho) hệ thống.
Có hai lựa chọn: bổ sung tài nguyên tính toán cho các nút hiện tại (mở rộng theo chiều dọc)
hoặc thêm nhiều nút mới vào hệ thống (mở rộng theo chiều ngang).
[Tính mở rộng (Scalability)](/scalability/) là yếu tố quan trọng quyết định năng lực cạnh tranh, hiệu suất, uy tín và chất lượng.

## Cách giải quyết

Mở rộng theo chiều dọc cho phép bạn tăng kích thước máy chủ mà không cần thay đổi mã nguồn của ứng dụng.
Điều này khác với mở rộng theo chiều ngang, vốn yêu cầu ứng dụng phải có khả năng nhân bản – có thể cần cập nhật mã nguồn.
Mở rộng theo chiều dọc giúp tăng năng lực xử lý của ứng dụng hiện có
bằng cách bổ sung tài nguyên tính toán, từ đó cho phép ứng dụng xử lý nhiều yêu cầu hơn và thực thi đồng thời hiệu quả hơn.

## Thuật ngữ liên quan

* [Mở rộng theo chiều ngang](/horizontal-scaling/)
* [Tự động mở rộng](/auto-scaling/)