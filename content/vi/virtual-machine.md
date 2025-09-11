---
title: Máy Ảo
status: Completed
category: Technology
tags: ["fundamental", "infrastructure", ""]
---

Máy ảo (VM – Virtual Machine) là một máy tính cùng hệ điều hành của nó
nhưng không gắn liền với một phần cứng vật lý cụ thể.
VM sử dụng [công nghệ ảo hóa](/virtualization/) để phân chia một máy tính vật lý thành nhiều máy tính ảo.
Sự tách biệt này cho phép các tổ chức và nhà cung cấp hạ tầng
dễ dàng tạo hoặc hủy các VM mà không ảnh hưởng đến phần cứng bên dưới.

## Vấn đề mà nó giải quyết

Khi một máy [bare metal](/bare-metal-machine/) gắn cố định với một hệ điều hành,
khả năng tận dụng tài nguyên của máy sẽ bị giới hạn.
Ngoài ra, khi hệ điều hành gắn với một máy vật lý cụ thể,
thì mức độ sẵn sàng của hệ điều hành cũng phụ thuộc hoàn toàn vào phần cứng đó.
Nếu máy vật lý gặp sự cố hoặc cần bảo trì, hệ điều hành cũng sẽ bị gián đoạn theo.

## Lợi ích mà nó mang lại

Việc tách rời mối liên hệ trực tiếp giữa hệ điều hành và máy vật lý
giúp giải quyết nhiều vấn đề của mô hình bare metal,
bao gồm: thời gian cấp phát, khả năng sử dụng phần cứng và độ bền hệ thống.

Vì không cần mua, cài đặt hay cấu hình phần cứng mới,
thời gian để khởi tạo một máy tính mới được rút ngắn đáng kể.
Máy ảo giúp tận dụng tốt hơn tài nguyên phần cứng hiện có
bằng cách chạy nhiều VM trên cùng một máy vật lý.
Và vì không bị ràng buộc với một máy vật lý cụ thể,
VM cũng có tính linh hoạt và khả năng phục hồi cao hơn.
Khi một máy vật lý cần ngắt hoạt động,
các VM đang chạy trên đó có thể được chuyển sang máy khác với thời gian gián đoạn rất ít hoặc không có.

{{% sign-language-section Fq-kda8kIHg %}}
