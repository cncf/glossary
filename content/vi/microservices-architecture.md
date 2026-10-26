---
title: Kiến Trúc Microservices
status: Completed
tags: ["architecture", "fundamental", ""]
---

Kiến trúc microservices là một cách tiếp cận kiến trúc chia ứng dụng thành các [dịch vụ](/service/) (vi dịch vụ) riêng lẻ và độc lập, mỗi dịch vụ tập trung vào một chức năng cụ thể.
Các dịch vụ này phối hợp chặt chẽ với nhau và hiện ra với người dùng cuối như một thể thống nhất.
Lấy Netflix làm ví dụ.
Giao diện của Netflix cho phép bạn truy cập, tìm kiếm và xem trước video.
Các khả năng này nhiều khả năng được vận hành bởi các dịch vụ nhỏ hơn, mỗi dịch vụ xử lý một chức năng, ví dụ: xác thực, tìm kiếm và chạy bản xem trước trên trình duyệt của bạn.

Cách tiếp cận kiến trúc này cho phép nhà phát triển đưa ra tính năng mới hoặc cập nhật chức năng nhanh hơn nhiều so với khi tất cả các phần gắn chặt với nhau, như trong một [ứng dụng nguyên khối](/monolithic-apps/) (xem thêm bên dưới).

## Vấn đề nó giải quyết

Ứng dụng được tạo thành từ nhiều phần khác nhau, mỗi phần chịu trách nhiệm cho một khả năng cụ thể.
Nhu cầu sử dụng một chức năng không nhất thiết tăng hoặc giảm cùng với nhu cầu sử dụng các phần khác của ứng dụng.
Quay lại ví dụ Netflix.
Giả sử sau một chiến dịch marketing lớn, số lượt đăng ký Netflix tăng vọt, trong khi lượng xem video gần như vẫn ổn định trong những giờ đầu ngày.
Lượng đăng ký tăng đột biến đòi hỏi thêm năng lực xử lý cho chức năng đăng ký.
Theo cách truyền thống (cách tiếp cận nguyên khối), toàn bộ ứng dụng sẽ phải được [mở rộng](/scalability/) để đáp ứng mức tăng này, đây là cách sử dụng tài nguyên rất kém hiệu quả.

Kiến trúc nguyên khối cũng khiến nhà phát triển dễ mắc các lỗi thiết kế.
Vì toàn bộ mã nằm ở một nơi, mã dễ trở nên [gắn kết chặt chẽ](/tightly-coupled-architecture/) và khó áp dụng nguyên tắc phân tách mối quan tâm (separation of concerns).
Ứng dụng nguyên khối cũng thường đòi hỏi nhà phát triển phải hiểu toàn bộ mã nguồn trước khi triển khai bất kỳ thay đổi nào.
Kiến trúc microservices là lời đáp cho những thách thức này.

## Cách nó giúp ích

Tách các chức năng thành những microservice khác nhau giúp việc triển khai, cập nhật và mở rộng từng phần một cách độc lập trở nên dễ dàng hơn.
Kiến trúc này cũng cho phép nhiều nhóm cùng lúc làm việc trên một phần nhỏ của một ứng dụng lớn mà không vô tình ảnh hưởng xấu đến phần còn lại của ứng dụng.
Dù giải quyết được nhiều vấn đề, kiến trúc microservices cũng tạo thêm chi phí vận hành: số lượng thành phần cần triển khai và theo dõi tăng lên gấp nhiều lần.
Nhiều [công nghệ cloud native](/cloud-native-tech/) hướng tới việc giúp triển khai và quản lý microservices dễ dàng hơn.
