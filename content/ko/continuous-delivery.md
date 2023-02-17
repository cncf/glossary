---
title: 지속적인 전달 (Continuous Delivery)
status: Completed
category: 개념
tags: ["방법론", "애플리케이션", ""]
---

## 개념

지속적인 전달(Continuous delivery, CD)은,
코드 변경사항이 승인 환경(acceptance environment)으로(또는
지속적인 배포(continuous deployment)의 경우, 프로덕션(production)으로) 자동으로 배포되는 일련의 작업이다.
CD는 배포 전에 소프트웨어가 적절하게 테스트되었는지 보장하는 절차를 포함하며,
필요한 경우 변경사항을 롤백(rollback)하는 방법을 제공한다.
지속적인 통합(Continuous integration, CI)은 지속적인 전달에 필요한 선결 단계이다(즉,
변경사항이 테스트 및 배포되려면 그 전에 문제 없이 병합되어야 한다).

## 다루는 문제

[신뢰할 수 있는](/reliability/) 업데이트 배포는 대규모일 때 문제가 된다.
이상적으로, 최종 사용자에게 더 나은 가치를 제공하기 위해서는 배포를 더 자주 해야 한다.
그러나, 이를 수동으로 수행하면 변경사항이 있을 때마다 높은 트랜잭션(transaction) 비용이 발생한다.
역사적으로, 이러한 비용을 피하기 위해, 조직들은 릴리스를 덜 자주 해 왔는데,
이로 인해 한번에 더 많은 변경사항을 배포하게 되어 문제가 발생할 위험이 증가했다.

## 문제 해결 방식

CD 전략은 소프트웨어를 테스트하고 [카나리](/canary-deployment/) 또는 [블루-그린](/blue-green-deployment/) 릴리스와 같은
다양한 배포 전략을 사용하여 배포하는 완전히 자동화된
프로덕션 방향으로의 길(path)을 생성한다.
이를 통해 개발자는 새 리비전(revision)이 테스트되었다는 것에 안심할 수 있으므로, 코드를 더 자주 배포할 수 있게 된다.
일반적으로, CD 전략에는 피처 브랜칭(feature branching) 또는 풀 리퀘스트(pull requests)가 아닌 트렁크(trunk) 기반 개발이 사용된다.

## 관련 용어

* [지속적인 통합](/continuous-integration/)
* [지속적인 배포](/continuous-deployment/)