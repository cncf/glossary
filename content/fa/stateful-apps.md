---
title: Stateful Apps
status: Completed
category: Property
tags: ["fundamental", "application", "property"]
---

وقتی از Appهای Stateful (و [Stateless](/stateless-apps/)) صحبت می‌کنیم، State به هر داده‌ای اشاره دارد که App برای عملکرد مطابق طراحی باید ذخیره کند. هر فروشگاه آنلاین که سبد خرید شما را به خاطر می‌سپارد، مثالی از App Stateful است.

امروزه بیشتر Applicationهایی که استفاده می‌کنیم دست‌کم تا حدی Stateful هستند. اما در محیط‌های Cloud Native، Appهای Stateful چالش‌برانگیزند؛ زیرا [Applicationهای Cloud Native](/cloud-native-apps/) بسیار پویا هستند. این Applicationها می‌توانند Scale Up یا Down شوند، Restart شوند و جابه‌جا شوند، اما همچنان باید بتوانند به State خود دسترسی داشته باشند.

بنابراین Appهای Stateful به نوعی Storage نیاز دارند که از هرجا قابل دسترسی باشد؛ مانند پایگاه‌های داده.
