---
title: Ứng dụng không có trạng thái (Stateless Apps)
status: Completed
category: Property
tags: ["fundamental", "application", "property"]
---

Ứng dụng không có trạng thái xử lý mỗi yêu cầu một cách độc lập mà không ghi nhớ bất kỳ tương tác trước đó hoặc dữ liệu người dùng nào.
Dữ liệu từ các tương tác trước đây được gọi là trạng thái (state), và vì dữ liệu này không được lưu trữ ở bất kỳ đâu, nên các ứng dụng này được gọi là không có trạng thái (state*less*).
Đây là một ví dụ:
Khi bạn sử dụng công cụ tìm kiếm, và quá trình tìm kiếm đó bị gián đoạn (ví dụ: cửa sổ bị đóng), các kết quả tìm kiếm đó sẽ bị mất.
Bạn sẽ cần phải bắt đầu lại từ đầu.

Mặt khác, các ứng dụng xử lý yêu cầu trong khi xem xét các tương tác trước đó được gọi là [ứng dụng có trạng thái](/stateful-apps/).
