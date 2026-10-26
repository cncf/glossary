---
title: Khả Năng Quan Sát
status: Completed
category: concept
tags: ["property", "", ""]
---

Khả năng quan sát (observability) là một thuộc tính của hệ thống, cho biết hệ thống có thể tạo ra những thông tin hữu ích để hành động ở mức độ nào.
Nó cho phép người dùng hiểu được trạng thái của hệ thống từ các dữ liệu đầu ra bên ngoài này và thực hiện hành động (khắc phục).

Các hệ thống máy tính được đo lường bằng cách quan sát các tín hiệu cấp thấp như thời gian CPU, bộ nhớ, dung lượng ổ đĩa, cùng các tín hiệu cấp cao hơn và tín hiệu nghiệp vụ, bao gồm thời gian phản hồi API, lỗi, số giao dịch mỗi giây, v.v.
Các hệ thống có khả năng quan sát này được **quan sát** (hay giám sát) bằng các công cụ chuyên dụng, gọi là công cụ observability. Danh sách các công cụ này có thể xem trong [mục observability của Cloud Native Landscape](https://landscape.cncf.io/?group=projects-and-products&view-mode=card#observability-and-analysis--observability).

Hệ thống có khả năng quan sát tốt cung cấp cho người vận hành những dữ liệu có ý nghĩa và có thể dùng để hành động, giúp họ đạt được kết quả tốt hơn (phản ứng với sự cố nhanh hơn, tăng năng suất của nhà phát triển), đồng thời giảm công việc thủ công lặp lại và thời gian gián đoạn.

Do đó, mức độ quan sát được của một hệ thống sẽ ảnh hưởng đáng kể đến chi phí vận hành và phát triển của hệ thống đó.
