---
title: Ứng dụng có trạng thái (Stateful Apps)
status: Completed
category: Property
tags: ["fundamental", "application", "property"]
---

Khi chúng ta nói về ứng dụng có trạng thái (stateful) (và [không có trạng thái](/stateless-apps/)),
trạng thái (state) ở đây đề cập đến bất kỳ dữ liệu nào mà ứng dụng cần lưu trữ để hoạt động đúng như đã được thiết kế.
Ví dụ, bất kỳ cửa hàng trực tuyến nào ghi nhớ giỏ hàng của bạn đều là một ứng dụng có trạng thái.

Ngày nay, hầu hết các ứng dụng chúng ta sử dụng đều có ít nhất một phần stateful. Tuy nhiên, trong môi trường cloud native,
các ứng dụng có trạng thái là một thách thức. Điều này là do [ứng dụng cloud native](/cloud-native-apps/) rất linh hoạt.
Chúng có thể được mở rộng lên hoặc thu nhỏ lại, khởi động lại, và di chuyển xung quanh nhưng vẫn cần có khả năng truy cập vào trạng thái của chúng.

Do đó, các ứng dụng có trạng thái cần một loại lưu trữ nào đó có thể truy cập từ bất kỳ đâu, như cơ sở dữ liệu.
