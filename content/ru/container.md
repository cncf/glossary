---
title: Контейнер
status: Completed
category: technology
tags: ["application", "fundamental", ""]
---

## Описание

Контейнер — это процесс, работающий под управлением операционной системы комьютера. 
Для него заданы определенные ограничения на ресурсы и возможности, и ОС следит за тем, чтобы эти ограничения соблюдались.
Файлы, доступные процессу, упаковываются в образ контейнера.
Контейнеры работают рядом друг с другом на одной и той же машине, 
при этом операционная система, как правило, не позволяет отдельным контейнерам взаимодействовать друг с другом.

## Проблема

До появления контейнеров для запуска приложений требовались отдельные машины.
На каждой машине устанавливалась операционная система, которая потребляла ресурсы процессора и памяти, а также дисковое пространство — и все это для работы одного единственного приложения.
Кроме того, приходилось тратить значительные силы на обслуживание, обновление и запуск самой операционной системы.

## Решение

Контейнеры совместно используют одну и ту же операционную систему и ее машинные ресурсы. 
Другими словами, вместо множества копий ОС используется лишь одна — 
ресурсы, потребляемые операционной системой, делятся сразу на несколько контейнеров. 
Тем самым обеспечивается эффективное использование памяти, процессора и дискового пространства.
Такая совместная работа контейнеров возможна только потому, что они, как правило, не могут взаимодействовать друг с другом.
Это позволяет запускать на одной физической машине сразу несколько приложений.

Однако есть и ограничения.
Подход, когда множество контейнеров используют одну и ту же операционную систему, потенциально более опасен, чем альтернативные варианты.
Кроме того, для контейнеров приходится задавать ограничения на общие ресурсы.
Лимитировать использование памяти и процессора необходимо для того, чтобы гарантировать, что все приложения получают справедливую долю ресурсов.