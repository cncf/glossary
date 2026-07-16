---
title: Cách Đóng góp
toc_hide: true
status: Completed
menu:
  main:
    weight: 10
---

## Chào mừng

Chào mừng bạn đến với hướng dẫn đóng góp cho Từ Điển Thuật Ngữ Cloud Native, và cảm ơn sự quan tâm của bạn.
Có nhiều cách để bạn có thể đóng góp cho dự án này, và chúng tôi sẽ trình bày chi tiết ở đây:

1) [Làm việc với các issue hiện có](#work-on-an-existing-issue)
2) [Đề xuất thuật ngữ mới](#propose-new-terms)
3) [Cập nhật thuật ngữ hiện có](#update-an-existing-term)
4) [Bản địa hóa từ điển](#help-localize-the-glossary)

## Tổng quan về CNCF Glossary

Mục tiêu của từ điển này là đơn giản hóa lĩnh vực cloud native - vốn nổi tiếng với sự phức tạp của nó - và từ đó giúp mọi người dễ tiếp cận hơn.

Nội dung của Từ Điển Cloud Native được lưu trữ trong [kho lưu trữ GitHub này](https://github.com/cncf/glossary)
nơi bạn có thể tìm thấy danh sách các [issue](https://github.com/cncf/glossary/issues), pull request ([PR](https://github.com/cncf/glossary/pulls)), và
[thảo luận](https://github.com/cncf/glossary/discussions) về từ điển.

## Ai có thể đóng góp?

Cách bạn có thể tham gia vào dự án này phụ thuộc vào mức độ hiểu biết của bạn về cloud native.
Việc đơn giản hóa các khái niệm phức tạp đòi hỏi kiến thức sâu rộng về chủ đề.
Do đó, để đóng góp các thuật ngữ mới, bạn phải thành thạo về chúng.
Những người đóng góp thường là các kỹ sư đã làm việc với các công nghệ này trong một thời gian hoặc các học giả tập trung vào cloud native.

Kiến thức đó là cần thiết vì việc giải thích các khái niệm phức tạp bằng từ ngữ đơn giản là _thực sự_ khó.
Và mặc dù kết quả cuối cùng dễ hiểu, thân thiện với người dùng có vẻ dễ dàng, nhưng để đạt được sự đơn giản mong muốn là kết quả của sự làm việc chăm chỉ và sự hợp tác giữa các chuyên gia cloud native.

Nếu bạn chưa phải là chuyên gia cloud native nhưng vẫn muốn đóng góp, chúng tôi khuyên bạn nên hợp tác với một người đã có kinh nghiệm.
Khi chuyên gia đó tin tưởng rằng thuật ngữ mô tả chính xác khái niệm, bạn đã sẵn sàng cho đóng góp đầu tiên của mình vào Từ điển.

Nỗ lực bản địa hóa là nơi những người mới bắt đầu thông thạo ngôn ngữ khác có thể đóng góp có giá trị cho Từ điển.
Với các định nghĩa bằng tiếng Anh đã có sẵn, những người đóng góp ít kinh nghiệm hơn có thể bản địa hóa các thuật ngữ sang ngôn ngữ mục tiêu.
Bạn có thể tham gia vào một nhóm bản địa hóa hiện có hoặc tạo một nhóm mới.
Đọc phần [Giúp bản địa hóa từ điển](#help-localize-the-glossary) của hướng dẫn này để tìm hiểu cách bắt đầu.

## Trước khi bạn bắt đầu

Trước khi bắt đầu hành trình đóng góp cho Từ điển, hãy đảm bảo hoàn thành các bước sau:

1. Tạo [tài khoản GitHub](https://docs.github.com/en/get-started/signing-up-for-github/signing-up-for-a-new-github-account), nếu bạn chưa có.
2. Ký [Thỏa thuận Cấp phép Cộng tác viên](https://docs.linuxfoundation.org/lfx/easycla/v2-current/contributors) (CLA).
3. [Xác minh chữ ký commit của bạn](https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification)
4. Bật [chế độ cảnh giác](https://docs.github.com/en/authentication/managing-commit-signature-verification/displaying-verification-statuses-for-all-of-your-commits#about-vigilant-mode) trong tài khoản GitHub của bạn để hiển thị trạng thái "Đã xác minh" trên các commit của bạn.

## Các phương pháp hay {#best-practices}

Để tạo điều kiện thuận lợi cho quá trình đánh giá, vui lòng sử dụng [ngắt dòng theo ngữ nghĩa](https://sembr.org/) (ví dụ: mỗi câu một dòng).
Chúng tôi khuyên bạn nên tham khảo [markdown cheat sheet](https://www.markdownguide.org/cheat-sheet/) này
để định dạng văn bản Markdown chính xác trong GitHub (ví dụ: hyperlink, in đậm, in nghiêng).
Và khi đặt tên file .md, vui lòng sử dụng chữ thường và dấu gạch ngang thay vì khoảng trắng để phân tách các từ và tránh dấu ngoặc đơn.

## Quy tắc Trình bày

Đọc [Quy tắc Trình bày](/style-guide/) của chúng tôi để hiểu các hướng dẫn về định dạng và viết tài liệu và làm cho quá trình đóng góp hiệu quả hơn.

## Tham gia cộng đồng Glossary! {#join-the-glossary-community}

Kết nối với các maintainer và những người đóng góp khác trong kênh [#glossary](https://cloud-native.slack.com/archives/C02TX20MQBB) trên Slack CNCF
— chúng tôi rất muốn gặp bạn!

## Làm việc với các issue hiện có {#work-on-an-existing-issue}

Truy cập [Glossary GitHub repo issues](https://github.com/cncf/glossary/issues) để tìm danh sách các issue có sẵn.
Bạn có thể sử dụng nhãn (ví dụ: English language, help needed, good first issue) để lọc các issue.

![Issue và nhãn](/images/how-to/issue-and-labels.png)

Hãy chắc chắn rằng thuật ngữ bạn chọn chưa được giao cho ai.
Ví dụ, ở đây bạn có thể thấy ba thuật ngữ đầu tiên còn trống trong khi thuật ngữ thứ tư đã được giao.

![giao một thuật ngữ](/images/how-to/howto-04.png)

Sau khi chọn một thuật ngữ để làm việc, hãy bình luận vào issue đó.

![Nhận một issue](/images/how-to/claiming-an-issue.png)

Ngoài ra, thông báo cho các maintainer trên kênh [#glossary](https://cloud-native.slack.com/archives/C02TX20MQBB) của Slack CNCF và
gắn thẻ _@iamnoah_, _@nate-double-u_, _@Seokho Son_, _@Jihoon Seo_ và/hoặc _@Junya Okabe_ để đảm bảo họ không bỏ sót.

Đối với các bước tiếp theo, vui lòng tham khảo phần [Gửi một thuật ngữ mới (tạo PR)](#submitting-a-new-term).

**Lưu ý**: bạn có thể bắt đầu làm việc với một issue sau khi các maintainer giao nó cho bạn.
Bạn chỉ có thể nhận một thuật ngữ tại một thời điểm.
Làm việc với nhiều thuật ngữ là tuần tự, bạn phải hoàn thành một thuật ngữ trước khi nhận thuật ngữ tiếp theo.

## Đề xuất thuật ngữ mới {#propose-new-terms}

Bạn có thể đề xuất một thuật ngữ mới để người khác làm việc hoặc tự tạo một định nghĩa mới.
Dù là cách nào, bạn sẽ bắt đầu bằng việc [tạo một issue](#creating-an-issue).
Để được thêm vào từ điển, mọi thuật ngữ mới phải đáp ứng [định nghĩa cloud native của CNCF](https://github.com/cncf/toc/blob/main/DEFINITION.md).
Ngoại lệ duy nhất là các thuật ngữ nền tảng cần thiết để hiểu các khái niệm cloud native.

Dưới đây là hướng dẫn từng bước cho những người không quen với GitHub.
**Nếu bạn là GitHub Pro**, vui lòng _đọc_ hướng dẫn này để thu thập đủ thông tin về các chủ đề sau:

1. Tìm mẫu cho issue và thuật ngữ mới.
2. Nhận (claim) issue.
3. Xử lý lỗi [kiểm tra chính tả](#spell-check).

### Tạo một issue {#creating-an-issue}

Truy cập [Glossary GitHub repo](https://github.com/cncf/glossary/issues) issues và nhấp vào "New issue".

![issues](/images/how-to/howto-01.png)

Chọn "Request to add a new term (English)" từ danh sách mẫu.

![templates](/images/how-to/english-issue-template.jpg)

Thêm từ bạn đang đề xuất, trả lời các câu hỏi, đánh dấu vào các ô, và nhấn "Submit new issue".
Nếu bạn chỉ đề xuất một thuật ngữ mới, bạn đã hoàn thành! Nếu bạn muốn làm việc với định nghĩa, hãy tiếp tục đọc.

### Phân loại issue của bạn {#triaging-your-issue}

Tiếp theo, các maintainer sẽ phân loại issue.
Điều đó có nghĩa là họ sẽ đánh giá xem thuật ngữ có nên là một phần của Từ điển hay không.
Không phải mọi thuật ngữ đều được chấp nhận. Để được đưa vào Từ điển, chúng phải là các khái niệm cloud native đã được thiết lập và được sử dụng rộng rãi.

Vui lòng thông báo cho các maintainer rằng bạn đã đề xuất một thuật ngữ mới trên Slack và gắn thẻ _@iamnoah_, _@nate-double-u_, _@Seokho Son_, _@Jihoon Seo_ và/hoặc _@Junya Okabe_ để họ không bỏ sót.
Nếu bạn muốn làm việc với định nghĩa, hãy cho các maintainer biết và họ sẽ giao nó cho bạn.

### Gửi một thuật ngữ mới (tạo PR) {#submitting-a-new-term}

Như đã nêu trong [Quy tắc Trình bày](/style-guide/) của chúng tôi, chúng tôi khuyến nghị bắt đầu với tài liệu Google hoặc Word.

Khi thuật ngữ đã sẵn sàng để gửi, hãy vào content (dưới <>code)...

![content](/images/how-to/howto-05.png)

...sau đó "en" (cho tiếng Anh) hoặc hai chữ cái đầu tiên của ngôn ngữ bạn đang đóng góp...

![thư mục ngôn ngữ](/images/how-to/howto-06.png)

...và chọn `_TEMPLATE.md`

![template](/images/how-to/howto-07.png)

Sao chép nội dung...

![sao chép nội dung](/images/how-to/howto-08.png)

...và quay lại thư mục "en". Nhấp vào "Add file" và chọn "Create new file".

![tạo file mới](/images/how-to/howto-09.png)

Thêm tên của thuật ngữ vào URL như được mô tả trong phần [Các phương pháp hay](#best-practices).
Thêm phần mở rộng .md vào cuối tên (không có phần mở rộng này bạn sẽ không thể xem trước file của mình).
Bây giờ dán nội dung mẫu vào phần bên dưới. Sao chép và dán văn bản định nghĩa của bạn vào file.
Để xác minh bạn đã sử dụng Markdown như được mô tả trong phần [Các phương pháp hay](#best-practices), nhấp vào "Preview".

![hoàn thiện thuật ngữ](/images/how-to/howto-10.png)

Cuộn xuống và đặt tên cho file commit mới. Nhấn "Commit new file" khi bạn đã sẵn sàng gửi
và...

![commit file mới](/images/how-to/howto-11.png)

...bây giờ bạn đã sẵn sàng để tạo PR mới:

![tạo pr](/images/how-to/howto-12.png)

Sau khi nhấn nút "Create pull request", PR của bạn sẽ hiển thị trong tab "Pull requests".

![prs](/images/how-to/howto-13.png)

## Cập nhật thuật ngữ hiện có {#update-an-existing-term}

Để cập nhật một thuật ngữ hiện có, bạn có thể yêu cầu thay đổi bằng cách tạo issue
hoặc tự mình làm việc với các thay đổi và gửi PR.

### Yêu cầu thay đổi qua issue {#request-a-change-via-an-issue}

Nếu bạn muốn báo cáo vấn đề với một thuật ngữ, bạn có thể sử dụng tùy chọn "Report issue" của trang web CNCF Glossary.
Định vị đến trang CNCF của khái niệm bạn muốn báo cáo và nhấp vào "Report issue".
Thao tác này sẽ tự động mở một issue cho bạn

![báo cáo vấn đề](/images/how-to/howto-14.png)

Vui lòng mô tả đề xuất của bạn và lý do tại sao chúng cần thiết. Nhấn submit, và xong.

![gửi issue](/images/how-to/howto-15.png)

### Cập nhật thuật ngữ trực tiếp {#update-a-term-directly}

Để sửa đổi một thuật ngữ và gửi đề xuất của bạn, nhấp vào "Edit this page."

![chỉnh sửa trang này](/images/how-to/howto-16.png)

Thao tác này sẽ mở trang GitHub của thuật ngữ. Thực hiện thay đổi của bạn và tạo PR.
Vui lòng tham khảo phần [Các phương pháp hay](#best-practices) ở trên
và đọc [Quy tắc Trình bày](/style-guide/) của chúng tôi để đảm bảo bạn tuân thủ các hướng dẫn của chúng tôi.

## Giúp bản địa hóa từ điển {#help-localize-the-glossary}

Để giúp bản địa hóa từ điển sang một ngôn ngữ mục tiêu, vui lòng tham gia kênh [#glossary-localizations](https://cloud-native.slack.com/archives/C02N2RGFXDF) trên Slack CNCF và gửi tin nhắn cho chúng tôi.
Bạn có thể tham gia một nhóm hiện có hoặc tạo một nhóm mới
(để xem những gì cần thiết, hãy đọc [Hướng dẫn Bản địa hóa](https://github.com/cncf/glossary/blob/main/LOCALIZATION.md) của chúng tôi).
Vui lòng đọc hướng dẫn **Cách đóng góp** của ngôn ngữ mục tiêu để nắm được các chi tiết cụ thể về quy trình đóng góp của nhóm đó.

## Kiểm tra chính tả {#spell-check}

Có hai lý do chính khiến kiểm tra chính tả có thể thất bại:

- PR chứa lỗi chính tả.
- PR chứa các từ chưa được đăng ký trong danh sách từ.

Để thêm từ mới vào danh sách, hãy làm theo các bước sau:

1. Trong PR của bạn, định vị file "wordlist.txt".
2. Nhấp vào "Edit this file" và thêm các từ còn thiếu theo thứ tự bảng chữ cái.
3. Thêm thông điệp commit và chọn "Sign off and propose changes".

**Lưu ý**: kiểm tra chính tả không phân biệt chữ hoa chữ thường.


**Chúng tôi đã cập nhật hướng dẫn này dựa trên các mẫu từ [The Good Docs Project](https://thegooddocsproject.dev/).**