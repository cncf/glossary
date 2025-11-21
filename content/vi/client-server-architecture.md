---
title: Kiến trúc máy khách - máy chủ
status: Completed
category: concept
tags: ["architecture", "fundamental", ""]
---

Trong kiến trúc máy khách - máy chủ (client-server), logic hay mã nguồn của một ứng dụng được chia thành hai hoặc nhiều thành phần:

- Client (máy khách): gửi yêu cầu thực hiện một công việc (ví dụ: ứng dụng web Gmail trên trình duyệt)
- Servers (các máy chủ): tiếp nhận và xử lý yêu cầu đó (ví dụ: dịch vụ "gửi email" chạy trên các máy chủ của Google)

Ở các ví dụ trên, khi bạn soạn và gửi email, ứng dụng Gmail trong trình duyệt đóng vai trò là *máy khách*.
Nó gửi email đến máy chủ của Gmail, nơi chịu trách nhiệm chuyển tiếp email của bạn đến người nhận.

Việc này trái ngược với các ứng dụng độc lập (như các ứng dụng desktop), trong đó toàn bộ công việc
được thực hiện ngay trên một thiết bị. Ví dụ, trình soạn thảo văn bản như Microsoft Word có thể được cài đặt
và chạy hoàn toàn trên máy của bạn.

## Vấn đề mà nó giải quyết 

Kiến trúc máy khách - máy chủ giải quyết một vấn đề lớn mà các ứng dụng độc lập thường gặp phải: việc cập nhật thường xuyên. 
Mỗi khi có bản cập nhật của các ứng dụng này, người dùng phải tải về và cài đặt phiên bản mới nhất.
Hãy thử tưởng tượng bạn phải tải toàn bộ danh mục sản phẩm của Amazon về máy tính của mình trước khi có thể bắt đầu xem hàng!

## Lợi ích mang lại

Bằng cách triển khai logic của ứng dụng trên một máy chủ từ xa, đội vận hành có thể cập nhật hệ thống
mà không cần thay đổi gì ở phía máy khách. Nhờ vậy, việc cập nhật có thể thực hiện thường xuyên hơn.
Khi dữ liệu được lưu trên máy chủ, nhiều máy khách có thể truy cập và chia sẻ chung dữ liệu với nhau.
Ví dụ, khi sử dụng trình soạn thảo văn bản trực tuyến, các tệp tin của bạn được lưu trên máy chủ và có thể dễ dàng
chia sẻ với người khác, họ chỉ cần tải về từ máy chủ. Trong khi với các trình soạn thảo văn bản truyền thống,
các tập tin phải được sao chép ra một thiết bị lưu trữ, sau đó gửi lại cho từng cá nhân.
