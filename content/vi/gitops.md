---
title: GitOps
status: Completed
category: Concept
tags: ["methodology", "", ""]
---

GitOps là tập hợp các phương pháp quản lý phầm mềm và hạ tầng bằng cách liên tục kiểm tra và đồng bộ trạng thái mong muốn 
(được định nghĩa trong một hệ thống quản lý phiên bản, ví dụ như Git) với trạng thái hiện tại của chúng.
Quá trình đồng bộ trạng thái này bao gồm cả việc thay đổi các tài nguyên để khớp với trạng thái đã được định nghĩa, 
thông qua quá trình triển khai hoặc cập nhật.

Trong GitOps, trạng thái hay cấu hình của một hệ thống được mô tả đầy đủ trong các tệp được lưu trữ 
trong nguồn tham chiếu chuẩn (source of truth), mà thường là các hệ thống quản lý phiên bản. 
Tuy nhiên nguồn tham chiếu chuẩn cũng có thể là những nguồn khác như Kubernetes Operator hay Artifact Storage.
Nguồn tham chiếu chuẩn có thể được tham chiếu bằng các quy trình tự động hóa việc điều chỉnh trạng thái 
của hệ thống hiện tại cho đúng với trạng thái đã định nghĩa.
Các quy trình này thay đổi hệ thống đang chạy khi cần thiết, đảm bảo tính nhất quán giữa các ứng dụng, 
hạ tầng và các tác vụ vận hành khác.

## Vấn đề mà nó giải quyết

Các phương pháp truyền thống trong việc quản lý cấu hình của hạ tầng và ứng dụng thường dẫn đến việc 
sai lệch cấu hình, triển khai lỗi, biến môi trường không nhất quán và khó khăn trong việc theo dõi lịch sử thay đổi.
Những vấn đề trên có thể gây ra sự mất ổn định và tăng nguồn lực bảo trì.
Sai lệch cấu hình thường rất khó để phát hiện và khắc phục nếu không có một nguồn tham chiếu chuẩn quản lý chúng, 
từ đó làm tăng thời gian xử lý sự cố.

## Lợi ích mang lại

GitOps giúp các tổ chức quản lý toàn bộ vòng đời hạ tầng, phát triển và triển khai ứng dụng bằng một quy trình duy nhất và thống nhất.

GitOps cũng mang lại cho các tổ chức một số lợi ích khác như tính minh bạch, khả năng theo dõi các thay đổi, 
độ tin cậy và bảo mật thông qua việc định nghĩa, khai báo các trạng thái, cùng với các khả năng rollback, revert và tự phục hồi.
