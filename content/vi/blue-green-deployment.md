---
title: Triển khai Blue-Green
status: Completed
category: concept
tags: ["methodology", "application", ""]
---

Triển khai blue-green là một chiến lược cập nhật hệ thống đang vận hành với mục tiêu giảm thiểu tối đa thời gian gián đoạn (downtime).  
Người vận hành duy trì song song hai môi trường: “blue” và “green”.  
Một môi trường phục vụ toàn bộ lưu lượng của môi trường production (phiên bản mà tất cả người dùng đang sử dụng), trong khi môi trường còn lại được cập nhật.  
Khi việc kiểm thử trên môi trường không hoạt động (green) đã hoàn tất, lưu lượng của môi trường production sẽ được chuyển sang (thông thường qua bộ cân bằng tải – load balancer).  

Lưu ý rằng, triển khai blue-green thường được hiểu là việc chuyển đổi toàn bộ môi trường, bao gồm nhiều [dịch vụ](/service/) cùng một lúc. Tuy nhiên, đôi khi thuật ngữ này lại được sử dụng để chỉ việc triển khai ở cấp độ dịch vụ đơn lẻ trong hệ thống. Để tránh nhầm lẫn, khi nói về từng thành phần riêng lẻ, nên ưu tiên dùng thuật ngữ “triển khai không gián đoạn” (zero-downtime deployment).

## Vấn đề mà nó giải quyết

Triển khai blue-green giúp giảm thiểu downtime khi cập nhật phần mềm cần thay đổi "đồng thời" (lockstep) do thiếu khả năng tương thích ngược (backward compatibility).

Ví dụ:
triển khai blue-green sẽ phù hợp với một cửa hàng trực tuyến bao gồm website và cơ sở dữ liệu. Phiên bản mới của cơ sở dữ liệu không tương thích với website cũ, và ngược lại. Do đó, cả hai phải được nâng cấp đồng bộ.  
Nếu thực hiện trực tiếp trên hệ thống sản xuất, khách hàng sẽ thấy gián đoạn dịch vụ.

## Lợi ích mang lại

Triển khai blue-green là một chiến lược phù hợp với phần mềm không phải cloud-native, khi cần nâng cấp mà vẫn đảm bảo thời gian gián đoạn tối thiểu.  
Tuy nhiên, việc sử dụng thường cho thấy dấu hiệu (“smell”) rằng hệ thống legacy cần được tái kiến trúc để các thành phần có thể cập nhật độc lập, thay vì phụ thuộc lẫn nhau.
