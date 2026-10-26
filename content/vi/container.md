---
title: Container
status: Completed
category: technology
tags: ["application", "fundamental", ""]
---

Container là một tiến trình đang chạy, bị giới hạn về tài nguyên và quyền hạn, do hệ điều hành của máy tính quản lý.
Các tệp mà tiến trình container sử dụng được đóng gói thành một container image.
Các container chạy cạnh nhau trên cùng một máy,
nhưng thông thường hệ điều hành sẽ ngăn các tiến trình container khác nhau tương tác với nhau.

## Vấn đề nó giải quyết

Trước khi có container, mỗi ứng dụng cần một máy riêng để chạy.
Mỗi máy lại cần hệ điều hành riêng, vốn tiêu tốn CPU, bộ nhớ và dung lượng ổ đĩa,
chỉ để một ứng dụng duy nhất có thể hoạt động.
Ngoài ra, việc bảo trì, nâng cấp và khởi động hệ điều hành cũng là một nguồn công việc thủ công, lặp đi lặp lại đáng kể.

## Cách nó giúp ích

Các container dùng chung một hệ điều hành và tài nguyên của máy đó,
nhờ vậy chi phí tài nguyên của hệ điều hành được chia sẻ và máy vật lý được sử dụng hiệu quả hơn.
Điều này chỉ khả thi vì các container thường bị hạn chế khả năng tương tác với nhau.
Nhờ đó, có thể chạy nhiều ứng dụng hơn trên cùng một máy vật lý.

Tuy nhiên, container cũng có những hạn chế.
Vì các container dùng chung một hệ điều hành, các tiến trình có thể bị xem là kém an toàn hơn so với các giải pháp thay thế.
Container cũng cần được giới hạn mức sử dụng tài nguyên dùng chung.
Để bảo đảm tài nguyên, người quản trị phải giới hạn mức sử dụng bộ nhớ và CPU để các ứng dụng khác không bị giảm hiệu năng.

{{% sign-language-section meUtsFU7ndo %}}
