---
title: Kiến trúc Zero Trust
status: Completed
category: Concept
tags: ["security", "", ""]
---

Kiến trúc Zero Trust tuân theo một phương pháp tiếp cận trong thiết kế và triển khai các hệ thống IT
mà trong đó sự tin tưởng bị loại bỏ hoàn toàn.
Nguyên tắc cốt lõi là "không bao giờ tin tưởng, luôn xác minh", các thiết bị hoặc hệ thống,
trong khi giao tiếp với các thành phần khác của hệ thống, luôn phải tự xác minh mình trước khi làm điều đó.
Trong nhiều mạng ngày nay, trong mạng nội bộ của doanh nghiệp, các hệ thống và thiết bị bên trong có thể tự do giao tiếp với nhau
vì chúng nằm trong ranh giới tin cậy của phạm vi mạng doanh nghiệp.
Kiến trúc Zero Trust áp dụng phương pháp ngược lại, dù đang ở trong phạm vi mạng,
các thành phần trong hệ thống trước tiên phải vượt qua xác minh trước khi bất kỳ giao tiếp nào được thực hiện.

## Vấn đề nó giải quyết

Với phương pháp tiếp cận dựa trên sự tin tưởng truyền thống, nơi các hệ thống và thiết bị tồn tại trong phạm vi mạng doanh nghiệp,
giả định rằng vì có sự tin tưởng, nên không có vấn đề gì.
Tuy nhiên, Kiến trúc Zero Trust nhận ra rằng sự tin tưởng là một lỗ hổng.
Trong trường hợp kẻ tấn công đã có quyền truy cập vào thiết bị đáng tin cậy,
tùy thuộc vào mức độ tin tưởng và quyền truy cập đã được cấp cho thiết bị đó,
hệ thống hiện đang dễ bị tấn công
vì kẻ tấn công đã ở trong phạm vi mạng "đáng tin cậy" và có thể di chuyển theo chiều ngang trong toàn bộ hệ thống.
Trong Kiến trúc Zero Trust, sự tin tưởng bị loại bỏ, do đó giảm bề mặt tấn công
khi kẻ tấn công giờ đây buộc phải xác minh trước khi đi sâu hơn vào hệ thống.

## Lợi ích mang lại

Áp dụng Kiến trúc Zero Trust mang lại lợi ích chính là tăng cường bảo mật
với việc giảm bề mặt tấn công.
Loại bỏ sự tin tưởng khỏi hệ thống doanh nghiệp của bạn giờ đây làm tăng số lượng và sức mạnh của các hàng rào bảo mật
mà kẻ tấn công phải vượt qua để có thể truy cập vào các khu vực khác của hệ thống.
