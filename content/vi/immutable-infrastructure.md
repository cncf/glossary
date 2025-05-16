---
title: Hạ tầng bất biến (Immutable Infrastructure)
status: Completed
category: property
tags: ["infrastructure", "property", ""]
---

Hạ tầng bất biến (Immutable Infrastructure) đề cập đến hạ tầng máy tính (như [máy ảo](/virtual-machine/), [containers](/container/), thiết bị mạng) không thể thay đổi sau khi đã được triển khai. Điều này có thể đạt được thông qua thực thi một quy trình tự động ghi đè các thay đổi không được phép hoặc thông qua một hệ thống không cho phép thay đổi ngay từ đầu. Containers là một ví dụ điển hình của Immutable Infrastructure vì mọi thay đổi bền vững lên container chỉ có thể thực hiện bằng cách tạo một phiên bản mới của container hoặc khởi tạo lại container hiện tại từ image của nó.

Bằng cách ngăn chặn hoặc phát hiện các thay đổi trái phép, Immutable Infrastructure giúp việc nhận diện và giảm thiểu rủi ro bảo mật trở nên dễ dàng hơn. Việc vận hành hệ thống này cũng trở nên đơn giản hơn vì quản trị viên có thể đưa ra các giả định về hệ thống, bởi họ biết rằng không ai thực hiện thay đổi hoặc mắc lỗi mà quên thông báo. Immutable Infrastructure thường đi đôi với [infrastructure as code](/infrastructure-as-code/), nơi toàn bộ tự động hoá cần thiết để tạo ra hạ tầng đều được lưu trữ trong version control (ví dụ: Git). Sự kết hợp giữa tính bất biến và version control này đảm bảo rằng luôn có một audit log bền vững cho mọi thay đổi được phép trên hệ thống.
