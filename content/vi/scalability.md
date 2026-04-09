---
title: Khả năng mở rộng
status: Completed
category: property
tags: ["fundamental", "property", ""]
---

Khả năng mở rộng nói đến khả năng xử lý các nhiệm vụ của một hệ thống có thể mở rộng tốt đến mức nào.
Ví dụ, một [cụm](/vi/cluster/) [Kubernetes](/kubernetes/) có thể tăng hoặc giảm số lượng ứng dụng [container hóa](/vi/containerization/) khi cần thiết, nhưng sự thay đổi này còn phụ thuộc vào nhiều yếu tố.
Cụm có bao nhiêu [node](/nodes/), mỗi node có thể duy trì bao nhiêu [container](/container/), control plane có thể xử lý được bao nhiêu bản ghi và thao tác vận hành?

Một hệ thống có khả năng mở rộng tốt cho phép tăng khả năng xử lý một cách dễ dàng.
Chúng ta thường phân biệt hai cách mở rộng. Một là [mở rộng theo chiều ngang](/horizontal-scaling/) 
bằng cách thêm các node mới để xử lý một lượng tải lớn.
Ngược lại là [mở rộng theo chiều dọc](/vertical-scaling/), tăng sức mạnh cho mỗi node riêng lẻ (ví dụ: bằng cách tăng bộ nhớ và CPU) để xử lý được nhiều hơn.
Một hệ thống có khả năng mở rộng phải có khả năng điều chỉnh linh hoạt để đáp ứng được nhu cầu của người dùng.
