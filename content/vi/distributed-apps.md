---
title: Ứng dụng phân tán
status: Completed
category: concept
tags: ["architecture", "", ""]
---

Một distributed application (ứng dụng phân tán) là ứng dụng mà chức năng được chia nhỏ thành nhiều thành phần độc lập. Các ứng dụng phân tán thường được cấu thành từ các [microservice](/microservices-architecture/), mỗi microservice đảm nhận một chức năng riêng biệt trong tổng thể ứng dụng. Trong môi trường cloud native, các thành phần này thường chạy dưới dạng [container](/container/) trên một [cluster](/cluster/).

## Vấn đề nó giải quyết

Một ứng dụng chạy trên một máy đơn lẻ sẽ trở thành single point of failure — nếu máy đó gặp sự cố, toàn bộ ứng dụng sẽ không thể truy cập được. Distributed application thường được so sánh với [monolithic application](/monolithic-apps/) (ứng dụng nguyên khối). Một ứng dụng monolithic thường khó mở rộng hơn vì các thành phần bên trong không thể mở rộng một cách độc lập. Ngoài ra, khi ứng dụng phát triển lớn dần, việc phát triển cũng trở nên chậm hơn do nhiều lập trình viên phải cùng làm việc trên một shared codebase (mã nguồn dùng chung) mà không nhất thiết phải có các rằng buộc được định nghĩa rõ ràng 

## Lợi ích mang lại

Khi tách một ứng dụng thành nhiều thành phần khác nhau và chạy chúng ở nhiều nơi, hệ thống tổng thể có thể chịu được nhiều lỗi hơn. Cách tiếp cận này cũng cho phép ứng dụng tận dụng các khả năng scaling mà một phiên bản đơn lẻ không có, đặc biệt là khả năng [horizontal scaling](/horizontal-scaling/) (mở rộng theo chiều ngang). Tuy nhiên, điều này cũng đi kèm với cái giá phải trả: độ phức tạp và gánh nặng vận hành tăng lên — thay vì chỉ chạy một ứng dụng duy nhất, bạn giờ phải quản lý nhiều thành phần ứng dụng riêng biệt. 
