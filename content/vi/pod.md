---
title: Pod
status: Completed
category: concept
tags: ["infrastructure", "fundamental", ""]
---

Trong môi trường [Kubernetes](/kubernetes/), pod là đơn vị triển khai cơ bản nhất.
Pod là thành phần nền tảng để triển khai và quản lý các ứng dụng được container hóa.
Mỗi pod chứa một phiên bản (instance) của ứng dụng và có thể chứa một hoặc nhiều [container](/container/).
Kubernetes quản lý pod như một phần của một bản triển khai (deployment) lớn hơn và có thể mở rộng pod [theo chiều dọc](/vertical-scaling/) hoặc [theo chiều ngang](/horizontal-scaling/) khi cần.

## Vấn đề nó giải quyết

Mặc dù container thường hoạt động như những đơn vị độc lập để chạy và kiểm soát một khối công việc (workload) cụ thể,
có những trường hợp các container cần tương tác với nhau và được kiểm soát theo cách gắn kết chặt chẽ.

Nếu từng container có liên quan mật thiết này được quản lý riêng lẻ, công việc quản lý sẽ bị lặp lại không cần thiết.
Ví dụ, người vận hành sẽ phải nhiều lần xác định vị trí đặt các container liên quan để bảo đảm chúng luôn ở cùng nhau.
Và mặc dù vòng đời của các container liên quan này cần được đồng bộ, chúng lại chỉ có thể được quản lý riêng lẻ.

## Cách nó giúp ích

Pod gom các container gắn bó chặt chẽ thành một đơn vị duy nhất, giúp việc vận hành container đơn giản hơn đáng kể.
Ví dụ, các container phụ trợ thường được dùng cùng với container chính để bổ sung chức năng hoặc thiết lập cấu hình chung.
Có thể kể đến các container đưa vào và áp dụng các thiết lập cơ bản cho container chính,
các container _sidecar_ xử lý việc định tuyến lưu lượng mạng cho container chính (xem [service mesh](/service-mesh/)),
hoặc các container thu thập log đi kèm với từng container.

Việc phân bổ bộ nhớ và CPU có thể được định nghĩa ở cấp pod, cho phép các container bên trong chia sẻ tài nguyên một cách linh hoạt, hoặc định nghĩa riêng cho từng container.
