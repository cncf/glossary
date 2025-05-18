---
title: Kiến trúc gắn kết chặt chẽ (Tightly Coupled Architecture)
status: Completed
category: Property
tags: ["fundamental", "architecture", "property"]
---

**Kiến trúc gắn kết chặt chẽ (Tightly Coupled Architecture)** là một phong cách kiến trúc trong đó nhiều thành phần của ứng dụng phụ thuộc lẫn nhau
(trái ngược với [kiến trúc ràng buộc lỏng lẻo](/loosely-coupled-architecture/)).
Điều này có nghĩa là khi một thành phần thay đổi, khả năng cao các thành phần khác cũng bị ảnh hưởng theo.
Kiểu kiến trúc này thường dễ triển khai hơn so với kiến trúc gắn kết lỏng lẻo,
nhưng dễ khiến hệ thống rơi vào tình trạng lỗi dây chuyền (cascading failures).
Chúng cũng thường đòi hỏi triển khai đồng bộ giữa các thành phần,
gây ảnh hưởng đến năng suất phát triển của lập trình viên.

Kiến trúc ứng dụng gắn kết chặt chẽ là một cách xây dựng phần mềm truyền thống.
Dù không hoàn toàn phù hợp với các nguyên tắc của [kiến trúc microservice](/microservices-architecture/),
nhưng vẫn có thể hữu ích trong một số trường hợp cụ thể.
Chúng thường đơn giản và nhanh chóng hơn trong giai đoạn khởi đầu,
và tương tự như [ứng dụng nguyên khối (monolithic)](/monolithic-apps/),
có thể rút ngắn đáng kể chu kỳ phát triển ban đầu.