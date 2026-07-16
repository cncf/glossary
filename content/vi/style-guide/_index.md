---
title: Quy tắc Trình bày
toc_hide: true
status: Completed
menu:
  main:
    weight: 10
---

Quy tắc trình bày này sẽ giúp bạn hiểu về đối tượng độc giả của Từ điển, cấu trúc định nghĩa, mức độ chi tiết cần thiết, và cách duy trì phong cách nhất quán.

Từ Điển Cloud Native tuân theo [quy tắc trình bày mặc định](https://github.com/cncf/foundation/blob/master/style-guide.md) của kho lưu trữ CNCF.
Ngoài ra, nó còn tuân theo các quy tắc sau:

1. Sử dụng ngôn ngữ đơn giản, dễ tiếp cận, tránh thuật ngữ kỹ thuật và từ ngữ thời thượng
2. [Tránh ngôn ngữ thông tục](https://en.wikipedia.org/wiki/Colloquialism)
3. [Sử dụng ngôn ngữ nghĩa đen và cụ thể](https://guidetogrammar.org/grammar/composition/abstract.htm)
4. [Tránh dùng từ viết tắt](https://en.wikipedia.org/wiki/Contraction_(grammar))
5. [Hạn chế sử dụng câu bị động](https://www.ef.com/ca/english-resources/english-grammar/passive-voice/)
6. [Cố gắng diễn đạt câu ở dạng khẳng định](https://examples.yourdictionary.com/positive-sentence-examples.html)
7. [Không sử dụng dấu chấm than ngoài trích dẫn](https://www.grammarly.com/blog/exclamation-mark/)
8. Không phóng đại
9. Tránh lặp lại
10. Ngắn gọn, súc tích

## Đối tượng độc giả

Từ điển được viết cho cả đối tượng kỹ thuật *và* phi kỹ thuật.
Vui lòng giải thích các định nghĩa bằng từ ngữ đơn giản, và không giả định người đọc có kiến thức kỹ thuật. Chi tiết thêm về điều này được trình bày trong phần [Định nghĩa](#definition) và [Quy tắc Trình bày Ngôn ngữ Ký hiệu](#sign-language-style-guide).

## Định nghĩa tối thiểu khả thi

Chúng tôi hướng tới việc giúp mọi người dễ dàng hiểu các thuật ngữ cloud native.
Do đó, chúng tôi tập trung vào tính đơn giản.
Sử dụng ngôn ngữ rõ ràng, đơn giản với các ví dụ mà bất kỳ ai sử dụng công nghệ đều có thể liên hệ được, đồng thời cung cấp một *định nghĩa tối thiểu khả thi*, ít nhất là từ góc độ kỹ thuật.
Chúng tôi không muốn tiết kiệm ngữ cảnh và ví dụ—xét cho cùng, những điều này giúp người đọc hiểu khái niệm—nhưng nếu một chi tiết kỹ thuật không cần thiết để hiểu nó, chúng tôi sẽ bỏ qua.
Mục tiêu không phải là làm phức tạp vấn đề. Khi người đọc đã hiểu ý tưởng cơ bản, các tài liệu khác sẽ giúp họ tìm hiểu sâu hơn.
Phần đó nằm ngoài phạm vi của Từ điển này.

## Mẫu định nghĩa

Mỗi thuật ngữ trong từ điển được lưu trữ trong một file markdown và tuân theo mẫu này:

```md
---
title: 
status: 
category: 
---


Tóm tắt ngắn gọn về công nghệ hoặc khái niệm.

## Vấn đề nó giải quyết

Một vài dòng về vấn đề mà nó đang giải quyết.

## Cách nó giúp ích

Một vài dòng về cách thức giải quyết vấn đề.
```

### Tiêu đề

Nhãn **title** sẽ luôn ở đầu bố cục định nghĩa, và giá trị của nó phải ở dạng Title Case.

```md
---
title: Mẫu Định nghĩa
```

### Trạng thái

Nhãn **status** sẽ đến sau nhãn title. Các nhãn này cho biết lượng công sức còn cần thiết để hoàn thành định nghĩa.

Các giá trị hợp lệ là:

- Completed
- Feedback Appreciated
- Not Started

Bạn luôn có thể mở một issue cho định nghĩa đã hoàn thành. Khi một định nghĩa đang trong quá trình thay đổi, trạng thái của nó sẽ được chuyển thành *Feedback Appreciated*. Lưu ý rằng chúng ta không nên bản địa hóa các giá trị trạng thái hợp lệ.

```md
---
title: Mẫu Định nghĩa
status: Feedback Appreciated
```

### Thẻ

Nhãn **tag** theo sau nhãn status.
Để các thẻ có ý nghĩa và hữu ích cho người dùng, chúng tôi sẽ sử dụng chúng một cách nghiêm ngặt.
Áp dụng quá nhiều thẻ sẽ chỉ làm loãng ý nghĩa của chúng.
Một ngoại lệ là thẻ `fundamental`, cho biết thuật ngữ này cần thiết để hiểu các khái niệm cloud native khác; hầu hết các thuật ngữ có thể chỉ có một thẻ.

**Lưu ý**: Vui lòng chỉ giới thiệu thẻ mới nếu được maintainer phê duyệt. Khi thêm thẻ vào một mục, đảm bảo chúng được viết chính xác như danh sách dưới đây (số ít, không lỗi chính tả).

Các thẻ hiện tại là:

- application
- architecture
- fundamental
- infrastructure
- methodology
- networking
- property
- security

```md
---
title: Mẫu Định nghĩa
status: Feedback Appreciated
tags: ["tag 1", "tag 2", ""]
---
```

### Định nghĩa {#definition}

#### Hai phần phụ

Các định nghĩa cho các danh mục **công nghệ** và **khái niệm** bao gồm một tóm tắt ngắn gọn và hai phần phụ:

- (tóm tắt ngắn gọn) cung cấp tổng quan ngắn gọn và rõ ràng về nội dung đang được đề cập.
- **Vấn đề nó giải quyết**: tập trung vào vấn đề, không phải giải pháp (phần đó sẽ được đề cập trong phần tiếp theo).
  Tránh đề cập đến thuật ngữ đang được định nghĩa. Phần vấn đề tập trung vào *điều gì* dẫn đến việc chúng ta cần thứ đó.
- **Cách nó giúp ích**: bây giờ, quay lại thuật ngữ. Nó giải quyết vấn đề được mô tả ở trên như thế nào?

Lưu ý rằng các **thuộc tính** không yêu cầu các phần riêng biệt. Một định nghĩa là đủ.

Vui lòng sử dụng **ngắt dòng theo ngữ nghĩa** (mỗi câu một dòng) để dễ dàng cho việc đánh giá.

#### Chất lượng là ưu tiên hàng đầu

Nếu được hợp nhất, định nghĩa của bạn sẽ trở thành định nghĩa chính thức của CNCF cho thuật ngữ đó (cho đến khi có người khác cải thiện nó).
Việc tạo ra một thuật ngữ đáp ứng các tiêu chuẩn cao của CNCF không thể vội vàng—chất lượng cần thời gian và nỗ lực.

**Nghiên cứu kỹ**: Ngay cả khi bạn tự tin rằng mình hiểu thuật ngữ, hãy xác minh rằng bạn đã hiểu đúng.
Chúng ta thường sử dụng các thuật ngữ trong tổ chức theo một cách nhất định mà có thể không phản ánh đầy đủ bức tranh tổng thể.
Khi nghiên cứu, đặc biệt là khi bạn không hoàn toàn quen thuộc với thuật ngữ, hãy sử dụng nhiều nguồn tài liệu.
Nhiều định nghĩa có thể từ một phía, đặc biệt là nếu được cung cấp bởi một nhà cung cấp.
Từ điển phải chứa các định nghĩa trung lập với nhà cung cấp và được chấp nhận toàn cầu.

**Không đạo văn**. Các quy tắc tương tự áp dụng cho Từ điển như với bất kỳ ấn phẩm nghiêm túc nào khác.
Không sao chép và dán công việc của người khác trừ khi bạn đang trích dẫn và ghi nhận công của họ.
Nếu bạn thích một phần cụ thể của một định nghĩa, hãy diễn đạt lại bằng từ ngữ của riêng bạn.

**Tham khảo các nguồn có thẩm quyền**. Khi có thể, hãy liên kết đến các nguồn có thẩm quyền như tài liệu dự án.
Lưu ý rằng chúng ta không thể liên kết đến nội dung được phát triển bởi các nhà cung cấp.

#### Giữ cho đơn giản

Từ điển hướng tới việc **giải thích các khái niệm phức tạp bằng từ ngữ đơn giản**—một nhiệm vụ khó khăn đáng ngạc nhiên có thể sẽ phải sửa đổi nhiều lần.
Luôn ghi nhớ đối tượng độc giả khi soạn thảo định nghĩa của bạn.
Tránh sử dụng các thuật ngữ ngành và từ ngữ thời thượng—bạn có thể thấy mình quay lại với chúng và có thể cần phải tự rèn luyện để tìm kiếm các thuật ngữ khác.

Khi thích hợp, sử dụng **ví dụ thực tế** giúp người đọc (đặc biệt là những người không có kiến thức kỹ thuật) hiểu rõ hơn *khi nào* và *tại sao* ý tưởng bạn đang giải thích là phù hợp.

Khi được sử dụng trong định nghĩa của bạn, luôn **liên kết đến các thuật ngữ từ điển hiện có** (chỉ lần đề cập đầu tiên nên được siêu liên kết).

**Ví dụ**: xem phần tóm tắt của [định nghĩa service mesh](/service-mesh/).
Nó liên kết trở lại các định nghĩa của microservices, service, reliability, và observability.
Ngoài ra, nó sử dụng một ví dụ thực tế so sánh các thách thức mạng trong môi trường microservices (điều mà người không có kiến thức kỹ thuật không thể liên hệ)
với các vấn đề wifi (điều mà bất kỳ ai sử dụng laptop đều có thể hiểu).
Khi có thể, hãy cố gắng tạo ra kết nối đó.

#### Bắt đầu với tài liệu Google hoặc Word

Chúng tôi khuyến nghị bắt đầu với tài liệu Google hoặc Word, để nó nghỉ vài ngày, và quay lại xem xét.
Điều này sẽ giúp bạn phát hiện các cụm từ hoặc cách diễn đạt có thể được viết theo cách đơn giản và dễ tiếp cận hơn.
Ngoài ra, hãy đảm bảo chạy kiểm tra chính tả trước khi gửi PR.

Để đảm bảo không ai khác gửi PR trong khi làm việc với một thuật ngữ, hãy nhận (claim) một issue (hoặc tạo một issue) và yêu cầu nó được gán cho bạn.
Thông tin thêm về điều này có trong tài liệu [Cách Đóng góp](/contribute/).

Trước khi bắt đầu, vui lòng đọc một số thuật ngữ đã được xuất bản trong Từ điển
để có cảm nhận về mức độ chi tiết và độ khó, và khi nào nên sử dụng ví dụ.

## Quy tắc Trình bày Video Ngôn ngữ Ký hiệu {#sign-language-style-guide}

Nếu bạn muốn đóng góp video ngôn ngữ ký hiệu, vui lòng tuân theo các hướng dẫn sau để đảm bảo video rõ ràng, mang tính thông tin và dễ tiếp cận đối với mọi đối tượng (bao gồm cả cộng đồng người không khiếm thính).

### Thiết bị kỹ thuật

Tất cả những gì bạn cần là một camera độ phân giải cao và một giá đỡ. Một điện thoại thông minh hiện đại là đủ.

### Thiết lập Ghi hình

* **Ánh sáng:** Sử dụng ánh sáng phía trước để đảm bảo khuôn mặt và bàn tay của bạn được chiếu sáng tốt.

* **Nền:** Ghi hình trước một nền phẳng, đơn sắc để tránh làm phân tâm khỏi việc ký hiệu. Đảm bảo không có trang trí gây mất tập trung.

* **Quy tắc Trang phục:** Mặc áo đơn sắc (không có họa tiết) tương phản với màu da của bạn.

* **Vị trí Camera:** Đảm bảo rằng từ đầu đến khuỷu tay của bạn hiển thị trên màn hình, và đặt camera ngang tầm mắt. Camera nên vuông góc với nền để nó xuất hiện thẳng, không nghiêng.

* **Không gian Diễn đạt:** Tận dụng không gian tối đa có thể để đảm bảo bạn có đủ không gian thực hiện ký hiệu khi ngồi hoặc đứng.

* **Âm thanh:** Tắt micrô (âm thanh đầu vào) khi có thể để tránh tiếng ồn nền không mong muốn.

### Ký hiệu

* **Rõ ràng và Chính xác:** Ghi lại ký hiệu hai lần từ hướng chính diện, ký hiệu đủ chậm để người không biết ký hiệu có thể nhìn thấy và bắt chước. Việc thể hiện ký hiệu từ bên cạnh là không cần thiết trừ khi nó làm rõ hơn.

* **Biểu cảm Khuôn mặt:** Sử dụng biểu cảm khuôn mặt thoải mái hoặc trung tính. Không khuyến khích việc phát âm miệng hoặc nhăn nhó. Duy trì giao tiếp bằng mắt với camera nếu có thể.

* **Tần suất:** Chỉ cần một ký hiệu cho mỗi video, vì có thể lặp lại khi phát. Không cần thiết phải lặp lại ký hiệu trong video.

* **Thời lượng:** Tổng thời lượng video không nên vượt quá 7 giây.

* **Đánh vần bằng ngón tay:** Sử dụng ngôn ngữ ký hiệu cho từ càng nhiều càng tốt. Đánh vần bằng ngón tay là phương án cuối cùng, thường dành cho các từ viết tắt hoặc từ ngắn.

* **Tư thế:** Duy trì hướng chính diện với mắt nhìn vào camera khi ký hiệu. Không cần thiết phải thể hiện ký hiệu từ hướng bên cạnh. Khi nghỉ, tay nên để xuống với bàn tay thư giãn.

### Mẹo

* **Tiết kiệm dung lượng lưu trữ:** Hãy nhớ rằng video càng ngắn, file càng nhỏ. Nó sẽ tải lên nhanh hơn.

* **Sai sót là tốt:** Giữ việc ghi hình tiếp tục trong khi thực hiện nhiều lần thử. Bạn có nhiều khả năng tìm thấy một đoạn tốt giữa các lần thử, và bạn có thể cắt bỏ các phần không mong muốn. Điều này hiệu quả hơn việc thực hiện nhiều bản ghi với một lần thử ký hiệu trong mỗi bản.

* **Ví dụ Video:** Vui lòng tham khảo danh sách phát [CNCF Glossary: Cloud Native Signs](https://www.youtube.com/playlist?list=PLj6h78yzYM2PDlYnmfpRfKgcgBMb34kb5) để xem ví dụ.

### Hậu kỳ

* **Chỉnh sửa:** Nếu cần thiết, cắt bớt phần đầu và cuối của video.

* **Nhãn:** Tối thiểu, tên file của video phải chứa thuật ngữ từ điển của ký hiệu trước khi tải lên. Ví dụ, kubernetes.mp4.

* **Âm thanh:** Loại bỏ hoàn toàn track âm thanh, nếu có thể.

* **Tải lên:** Chia sẻ video trên kênh #glossary-sign-language Slack và yêu cầu phản hồi. Nếu được phê duyệt, các trưởng nhóm Từ điển Ngôn ngữ Ký hiệu sẽ giúp bạn tải video lên Danh sách phát CNCF. Vui lòng không tải video lên YouTube cá nhân của bạn vì YouTube có thể xóa các video trùng lặp từ tất cả các tài khoản sử dụng cùng video (để ngăn chặn lạm dụng kiếm tiền) khi CNCF sử dụng YouTube để tải lên video cuối cùng.

* **Tải video lên danh sách phát CNCF:** Chia sẻ video trên kênh #glossary-sign-language Slack và yêu cầu phản hồi. Nếu được phê duyệt, các trưởng nhóm Từ điển Ngôn ngữ Ký hiệu sẽ giúp bạn tải video lên Danh sách phát CNCF.

## Quy trình đánh giá: Những điều cần biết

Xin lưu ý rằng hiện tại chúng tôi chỉ có một số ít maintainer làm việc này trong thời gian rảnh của họ.
Đôi khi, chúng tôi có thể đánh giá các thuật ngữ nhanh chóng; vào những dịp khác, có thể mất một thời gian—chúng tôi đánh giá cao sự kiên nhẫn của bạn.
Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ với chúng tôi trong kênh Slack #glossary
(để biết nơi và cách tìm nó, vui lòng tham khảo tài liệu [Cách Đóng góp](/contribute/) của chúng tôi).

Mục tiêu của chúng tôi là để Từ điển trở thành nguồn tài nguyên tốt nhất có thể.
Sau khi bạn gửi PR, chúng tôi có thể yêu cầu một hoặc nhiều lần sửa đổi.
Đừng nản lòng—điều đó xảy ra với nhiều PR.
Những trao đổi qua lại này và sự hợp tác của chúng ta sẽ đảm bảo rằng đóng góp của bạn sẽ trở thành một định nghĩa hữu ích được đọc và tham khảo bởi độc giả trên toàn cầu.
