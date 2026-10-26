---
title: Service Mesh
status: Completed
category: technology
tags: ["networking", "", ""]
---

Trong thế giới [microservices](/microservices-architecture/), ứng dụng được chia thành nhiều [dịch vụ](/service/) nhỏ hơn giao tiếp với nhau qua mạng.
Cũng giống như mạng wifi của bạn, mạng máy tính về bản chất là không đáng tin cậy, có thể bị tấn công và thường chậm.
Service mesh giải quyết nhóm thách thức mới này bằng cách quản lý lưu lượng (tức là giao tiếp) giữa các dịch vụ,
đồng thời bổ sung các tính năng về [độ tin cậy](/reliability/), [khả năng quan sát](/observability/) và bảo mật một cách đồng nhất cho tất cả các dịch vụ.

## Vấn đề nó giải quyết

Sau khi chuyển sang kiến trúc microservices, các kỹ sư phải làm việc với hàng trăm,
thậm chí hàng nghìn dịch vụ riêng lẻ, tất cả đều cần giao tiếp với nhau.
Điều đó có nghĩa là có rất nhiều lưu lượng qua lại trên mạng.
Thêm vào đó, từng ứng dụng có thể cần mã hóa dữ liệu truyền đi để đáp ứng các yêu cầu pháp lý,
cung cấp các chỉ số chung cho đội vận hành, hoặc cung cấp thông tin chi tiết về lưu lượng để hỗ trợ chẩn đoán sự cố.
Nếu được xây dựng sẵn trong từng ứng dụng,
mỗi tính năng như vậy sẽ gây ra xung đột giữa các nhóm và làm chậm việc phát triển tính năng mới.

## Cách nó giúp ích

Service mesh bổ sung các tính năng về độ tin cậy, khả năng quan sát và bảo mật
một cách đồng nhất cho tất cả các dịch vụ trong một cluster mà không cần thay đổi mã nguồn.
Trước khi có service mesh, các chức năng đó phải được lập trình vào từng dịch vụ,
trở thành nguồn tiềm ẩn gây lỗi và nợ kỹ thuật.

Mô hình [Sidecar Container](/sidecar-container/) ghép mỗi [pod](/pod/) với một proxy.
Proxy riêng của từng pod này chặn và quản lý lưu lượng mạng,
áp dụng các chính sách bảo mật, cân bằng tải,
và thu thập dữ liệu hiệu năng cho từng dịch vụ.
Cách tiếp cận này mang lại khả năng kiểm soát rất tốt và quản lý lưu lượng riêng cho từng dịch vụ,
nhưng cũng sử dụng nhiều tài nguyên tính toán hơn và trở nên phức tạp hơn khi hệ thống phát triển.

Ngược lại, thiết kế **không dùng sidecar** (sidecarless)
chuyển các chức năng của mesh nói trên xuống cấp hệ điều hành bằng cách sử dụng các tính năng của kernel như [eBPF](/ebpf/).
Nhờ loại bỏ proxy riêng cho từng pod,
phương pháp này giảm đáng kể mức sử dụng tài nguyên và loại bỏ các bước chuyển tiếp mạng không cần thiết,
từ đó giảm độ trễ và tăng hiệu năng.
Vì chi phí phát sinh giữ nguyên bất kể số lượng pod và có ít agent cần triển khai hơn,
các nhóm được hưởng lợi từ việc vận hành đơn giản hơn và khả năng mở rộng tuyến tính khi khối lượng công việc tăng lên.
