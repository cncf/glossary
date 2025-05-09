---
title: Ứng dụng Cloud Native
status: Completed
category: concept
tags: ["application", "fundamental", ""]
---

Các ứng dụng Cloud Native được thiết kế đặc biệt để tận dụng các đổi mới trong [điện toán đám mây](/cloud-computing/).  
Những ứng dụng này dễ dàng tích hợp với kiến trúc đám mây tương ứng, tận dụng hiệu quả tài nguyên và khả năng [mở rộng](/scalability/) mà môi trường đám mây mang lại.  
Thuật ngữ này cũng chỉ các ứng dụng tận dụng những đổi mới trong hạ tầng do điện toán đám mây mang lại.  
Ngày nay, các ứng dụng cloud native bao gồm cả những ứng dụng chạy trong trung tâm dữ liệu của nhà cung cấp đám mây và trên các nền tảng cloud native triển khai on-premise.

## Vấn đề nó giải quyết

Trước đây, môi trường on-premise thường cung cấp tài nguyên tính toán theo cách khá đặc thù.  
Mỗi trung tâm dữ liệu có các dịch vụ [ràng buộc chặt chẽ](/tightly-coupled-architecture/) với ứng dụng,  
thường phụ thuộc nhiều vào việc cấp phát hạ tầng thủ công như [máy ảo](/virtual-machine/) và các dịch vụ liên quan.  
Điều này khiến các nhà phát triển và ứng dụng của họ bị giới hạn trong một trung tâm dữ liệu cụ thể.  
Các ứng dụng không được thiết kế cho môi trường đám mây thì không thể tận dụng khả năng phục hồi (resiliency) và khả năng mở rộng tự động (scale automatically) của đám mây.  
Ví dụ, những ứng dụng yêu cầu can thiệp thủ công để khởi động đúng cách thì không thể tự động mở rộng quy mô, cũng như không thể được khởi động lại tự động khi có sự cố.

## Lợi ích mang lại

Mặc dù không có một lộ trình "mặc định" phù hợp với tất cả khi xây dựng ứng dụng cloud native, nhưng chúng vẫn có một số điểm chung.  
Ứng dụng cloud native có khả năng phục hồi, dễ quản lý và được hỗ trợ bởi nhiều dịch vụ đám mây đi kèm.  
Các dịch vụ này cung cấp mức độ [quan sát hệ thống](/observability/) rất cao, cho phép người dùng phát hiện và xử lý sự cố trước khi chúng trở nên nghiêm trọng.
Khi kết hợp với khả năng tự động hóa mạnh mẽ, các ứng dụng cloud native cho phép kỹ sư thực hiện các thay đổi lớn một cách thường xuyên, có thể dự đoán được và ít công việc thủ công nhất.
