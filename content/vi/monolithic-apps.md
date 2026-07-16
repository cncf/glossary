---
title: Ứng dụng nguyên khối (Monolithic App)
status: Completed
category: concept
tags: ["architecture", "fundamental", ""]
---

Một ứng dụng nguyên khối (monolithic application) là ứng dụng 
đóng gói toàn bộ các chức năng của nó trong một chương trình triển khai duy nhất.
Đây thường được xem là cách nhanh nhất và đơn giản nhất để phát triển một ứng dụng,
tuy nhiên sẽ khó để bảo trì khi ứng dụng trở nên phức tạp hơn.
Khi nhiều lập trình viên cùng làm việc trên một mã nguồn chung, nguy cơ có xung đột 
khi thay đổi mã nguồn tăng lên, đồng thời đòi hỏi nhiều hơn sự phối hợp và trao đổi giữa các thành viên.

## Vấn đề mà nó giải quyết

Phát triển phần mềm theo hướng [microservices](/microservices-architecture/) 
làm tăng nguồn lực vận hành, do có nhiều thành phần cần kiểm thử, triển khai, và duy trì hoạt động.
Do đó trong giai đoạn đầu của vòng đời sản phẩm, việc phát triển ứng dụng 
theo hướng nguyên khối cho đến khi sản phẩm hoạt động như mong muốn, 
thay vì tốn nguồn lực cho microservices, lại có ích hơn.

## Lợi ích mang lại

Một ứng dụng nguyên khối được thiết kế tốt có thể duy trì các nguyên tắc tinh gọn 
do đây là cách đơn giản nhất để khởi chạy ứng dụng. 
Khi ứng dụng nguyên khối chứng minh được các giá trị kinh doanh, 
ứng dụng có thể được chia thành các dịch vụ nhỏ hơn (microsevices). 
Ngược lại, việc phát triển ứng dụng theo hướng microservices từ đầu 
mà chưa chứng minh được giá trị của nó là một sự lãng phí sớm các nỗ lực về mặt kỹ thuật. 
Nếu ứng dụng không mang lại giá trị gì, toàn bộ nỗ lực đó trở thành vô ích.
