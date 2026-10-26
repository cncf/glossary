---
title: Kubernetes
status: Completed
category: technology
tags: ["infrastructure", "fundamental", ""]
---

Kubernetes, thường được viết tắt là K8s, là một công cụ điều phối container mã nguồn mở.
Kubernetes tự động hóa vòng đời của các ứng dụng được container hóa trên hạ tầng hiện đại, hoạt động như một "hệ điều hành cho trung tâm dữ liệu" quản lý các ứng dụng trên một [hệ thống phân tán](/distributed-systems/).

Kubernetes lập lịch chạy các [container](/container/) trên các [node](/nodes/) trong một [cluster](/cluster/), đồng thời kết hợp nhiều tài nguyên hạ tầng như bộ cân bằng tải (load balancer), bộ lưu trữ bền vững (persistent storage), v.v. để chạy các ứng dụng được container hóa.

Kubernetes hỗ trợ tự động hóa và khả năng mở rộng tính năng, cho phép người dùng triển khai ứng dụng theo cách khai báo (xem bên dưới) và có thể lặp lại.
Kubernetes có thể được mở rộng thông qua [API](/application-programming-interface/) của nó, cho phép những người dùng Kubernetes có kinh nghiệm tận dụng khả năng tự động hóa theo nhu cầu của mình.

## Vấn đề nó giải quyết

Tự động hóa hạ tầng và quản lý cấu hình theo cách khai báo đã là những khái niệm quan trọng từ lâu, nhưng chúng ngày càng trở nên cấp thiết khi [điện toán đám mây](/cloud-computing/) trở nên phổ biến.
Khi nhu cầu về tài nguyên tính toán tăng lên và các tổ chức cần cung cấp nhiều năng lực vận hành hơn với ít kỹ sư hơn, cần có những công nghệ và phương pháp làm việc mới để đáp ứng nhu cầu đó.

## Cách nó giúp ích

Tương tự các công cụ [hạ tầng dưới dạng mã](/infrastructure-as-code/) truyền thống, Kubernetes hỗ trợ tự động hóa, nhưng có thêm ưu điểm là làm việc với container.
Container ít bị sai lệch cấu hình (configuration drift) hơn so với [máy ảo](/virtual-machine/) hoặc máy vật lý.

Ngoài ra, Kubernetes hoạt động theo cách khai báo, nghĩa là thay vì chỉ cho máy biết phải làm một việc như thế nào, người vận hành mô tả hạ tầng cần trông như thế nào, thường bằng các tệp manifest (ví dụ: YAML).
Sau đó, Kubernetes sẽ lo phần "làm như thế nào".
Nhờ vậy, Kubernetes rất tương thích với hạ tầng dưới dạng mã.

Kubernetes cũng có khả năng [tự phục hồi](/self-healing/).
Trạng thái thực tế của cluster sẽ luôn khớp với trạng thái mong muốn của người vận hành.
Nếu Kubernetes phát hiện sai lệch so với những gì được mô tả trong các tệp manifest, một controller của Kubernetes sẽ vào cuộc và khắc phục.
Dù hạ tầng mà Kubernetes sử dụng có thể liên tục thay đổi, Kubernetes vẫn liên tục và tự động thích ứng với các thay đổi, bảo đảm hạ tầng luôn khớp với trạng thái mong muốn.
