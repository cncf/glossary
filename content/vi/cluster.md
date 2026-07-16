---
title: Cụm máy chủ (Cluster)
status: Completed
category: Concept
tags: ["infrastructure", "fundamental", ""]
---

Cụm máy chủ (cluster) là một nhóm các máy tính hoặc ứng dụng cùng phối hợp để đạt được một mục tiêu chung. 
Trong lĩnh vực điện toán đám mây (cloud native), thuật ngữ này thường được dùng để chỉ [Kubernetes](/kubernetes/). 
Một cụm Kubernetes là tập hợp các dịch vụ (hoặc khối lượng công việc) chạy trong các container riêng biệt, thường nằm trên nhiều máy khác nhau. 
Tập hợp tất cả các dịch vụ [được container hóa](/containerization/) này, kết nối với nhau qua mạng, tạo thành một cụm máy chủ.

## Vấn đề mà nó giải quyết

Phần mềm chỉ chạy trên một máy tính duy nhất sẽ tạo ra một điểm lỗi đơn lẻ (single point of failure) 
— nếu máy đó gặp sự cố hoặc ai đó vô tình rút dây nguồn, 
một hệ thống quan trọng có thể bị ngừng hoạt động. 
Đó là lý do tại sao phần mềm hiện đại thường được xây dựng dưới dạng [ứng dụng phân tán](/distributed-apps/), được nhóm lại thành các cụm.

## Lợi ích mang lại

Các ứng dụng phân tán theo cụm có thể chạy trên nhiều máy, loại bỏ nguy cơ bị gián đoạn do một điểm lỗi duy nhất. 
Tuy nhiên, xây dựng hệ thống phân tán là một thách thức lớn, 
thậm chí là một lĩnh vực riêng trong khoa học máy tính. 
Nhu cầu về các hệ thống toàn cầu và quá trình thử nghiệm qua nhiều năm đã dẫn đến sự ra đời của một hệ sinh thái công nghệ mới: 
[các công nghệ cloud native](/cloud-native-tech/). 
Những công nghệ này là nền tảng giúp việc xây dựng và vận hành hệ thống phân tán trở nên dễ dàng hơn.
