---
title: Тесно связанная архитектура
status: Completed
category: Property
tags: ["fundamental", "architecture", "property"]
---

Тесно связанная архитектура — это архитектурный стиль, при котором множество компонентов приложения являются взаимозависимыми
(в противоположность архитектурам [из слабо связанных компонентов](/ru/loosely-coupled-architecture/)).
Это означает, что изменение в одном компоненте, вероятно, потребует изменений в других компонентах.
Внедрять такую архитектуру обычно легче, чем более слабо связанные стили архитектуры,
но это может сделать систему более уязвимой к каскадным сбоям.
Также они, как правило, требуют координированных развертываний компонентов,
что может снизить производительность разработчиков.

Тесно связанные архитектуры — традиционный способ создания приложений.
Хотя они не всегда соответствует лучшим практикам разработки [микросервисов](/microservices-architecture/),
такие архитектуры могут быть полезны в определенных обстоятельствах.
Как правило, они быстрее и проще в реализации и, 
подобно [монолитным приложениям](/monolithic-apps/), могут ускорить начальный цикл разработки.