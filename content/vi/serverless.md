---
Title: Serverless
Status: Completed
Category: Technology
tags: ["architecture", "", ""]
---


Điện toán serverless (phi máy chủ) [trừu tượng hóa](/abstraction/) máy chủ khỏi người dùng.
Việc quản lý vận hành thuộc về nhà cung cấp dịch vụ, bao gồm việc xử lý máy vật lý và cấp phát máy ảo.
Nhà cung cấp dịch vụ có thể là các nhà cung cấp đám mây công cộng hoặc bộ phận IT nội bộ phục vụ các nhóm phát triển của họ.
Các nhà cung cấp này cung cấp giao diện cho người dùng như SDK, CLI hoặc các [runtime](/runtime/) tương thích OCI, tập trung vào mã nguồn và các tác vụ triển khai.
Chi phí được tính theo mô hình dùng bao nhiêu trả bấy nhiêu.
Việc [mở rộng](/scalability/) và cấp phát tài nguyên tính toán, lưu trữ hoặc mạng được tự động điều chỉnh theo nhu cầu của ứng dụng mà người dùng không cần can thiệp.
Nhà cung cấp nền tảng serverless gộp tài nguyên để phục vụ nhiều người dùng trên cùng một máy vật lý, đồng thời bảo đảm sự cô lập thông qua ảo hóa, đặc biệt là bằng [máy ảo](/virtual-machine/).

Serverless là một thuật ngữ bao quát, gồm các dịch vụ có những đặc điểm trên, trải dài từ Platform-as-a-Service (PaaS) đến Software-as-a-Service (SaaS).

## Vấn đề nó giải quyết

Trong các mô hình [điện toán đám mây](/cloud-computing/) [Infrastructure-as-a-Service (IaaS)](/infrastructure-as-a-service/) truyền thống, người dùng cam kết sử dụng một dung lượng định trước, dẫn đến việc phải trả phí cho máy chủ luôn sẵn sàng, bất kể mức sử dụng thực tế.
Người dùng phải tự chịu trách nhiệm điều chỉnh dung lượng máy chủ để đáp ứng nhu cầu thay đổi, và phải duy trì hạ tầng hoạt động ngay cả trong những lúc không có tải.

## Cách nó giúp ích

Kiến trúc serverless mang lại một cách tiếp cận hiệu quả hơn: dịch vụ chỉ được kích hoạt khi có nhu cầu.
Mô hình này bảo đảm nhà cung cấp đám mây phân bổ tài nguyên một cách linh hoạt, loại bỏ chi phí cho các dịch vụ không được sử dụng.
Ngoài hiệu quả về chi phí và vận hành, công nghệ serverless giúp nhà phát triển không phải lo việc mở rộng ứng dụng và quản lý hạ tầng máy chủ.
Các công việc như bảo trì hệ điều hành, cập nhật bảo mật, cân bằng tải, lập kế hoạch dung lượng và giám sát được giao cho nhà cung cấp đám mây, giúp quy trình phát triển gọn nhẹ hơn.

Xem mục [Function-as-a-Service (FaaS)](/function-as-a-service/) trong từ điển để biết thêm thông tin.
Mặc dù "serverless" và "FaaS" thường được dùng thay thế cho nhau, chúng thể hiện những khái niệm khác nhau.

{{% sign-language-section rbyBgXqCN2k %}}
