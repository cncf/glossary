---
title: Bảo mật tầng truyền tải (Transport Layer Security - TLS)
status: Completed
category: Concept
tags: ["security", "networking", ""]
---

**Bảo mật tầng truyền tải (Transport Layer Security – TLS)** là một giao thức được thiết kế nhằm tăng cường bảo mật cho việc truyền thông qua mạng.
TLS đảm bảo dữ liệu được gửi qua Internet đến nơi một cách an toàn,
tránh nguy cơ bị theo dõi và/hoặc thay đổi trong quá trình truyền tải.
Giao thức này được sử dụng rộng rãi trong các ứng dụng như nhắn tin, email, v.v.

## Vấn đề mà TLS giải quyết

Nếu không có TLS, các thông tin nhạy cảm như thói quen duyệt web, nội dung email, cuộc trò chuyện trực tuyến và các cuộc gọi hội nghị
có thể dễ dàng bị theo dõi và chỉnh sửa bởi bên thứ ba trong quá trình truyền tải.
Việc kích hoạt hỗ trợ TLS cho cả ứng dụng máy chủ và máy khách sẽ đảm bảo rằng
dữ liệu trao đổi giữa hai bên được mã hóa và không thể bị xem bởi người khác.

## Cách TLS hỗ trợ

TLS sử dụng kết hợp các kỹ thuật mã hóa để đảm bảo an toàn trong quá trình truyền dữ liệu qua mạng.
TLS cho phép thiết lập kết nối được mã hóa giữa ứng dụng máy khách và máy chủ, chẳng hạn giữa trình duyệt và trang web ngân hàng.
Ngoài ra, TLS cũng giúp ứng dụng máy khách xác minh danh tính của máy chủ mà nó đang kết nối,
giảm thiểu nguy cơ truy cập nhầm vào các trang giả mạo.
Nhờ đó, bên thứ ba không thể quan sát hay theo dõi dữ liệu truyền giữa các ứng dụng sử dụng TLS,
giúp bảo vệ các thông tin nhạy cảm như số thẻ tín dụng, mật khẩu, vị trí, v.v.
