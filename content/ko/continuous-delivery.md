---
title: 지속적인 전달 (Continuous Delivery)
status: Completed
category: 개념
tags: ["방법론", "애플리케이션", ""]
---

## 개념

지속적인 전달(continuous delivery, CD)은,
코드 변경사항이 승인 환경(acceptance environment)에 (또는
지속적인 배포(continuous deployment)의 경우, 프로덕션(production)에) 자동으로 배포되도록 만드는 일련의 작업 및 관행이다.
CD는 배포 전에 소프트웨어가 적절하게 테스트되었는지 보장하는 절차를 포함하며,
필요한 경우 변경사항을 롤백(rollback)하는 방법을 제공한다.
지속적인 통합(continuous integration, CI)은 지속적인 전달에 필요한 선결 단계이다. (즉,
변경사항이 테스트 및 배포되려면 그 전에 문제 없이 병합되어야 한다.)

## 다루는 문제

업데이트 배포의 [신뢰성](/reliability/)은 대규모일 때 더 큰 문제가 된다.
이상적으로, 최종 사용자에게 더 나은 가치를 제공하기 위해서는 배포를 더 자주 해야 한다.
그러나, 이를 수동으로 수행하면 변경사항이 있을 때마다 높은 트랜잭션(transaction) 비용이 발생한다.
역사적으로, 조직들은 이러한 비용을 피하기 위해 릴리스 빈도를 줄였는데,
이로 인해 한 번에 더 많은 변경사항을 배포하게 되어 문제가 발생할 위험이 증가했다.

## 문제 해결 방식

CD 전략은 소프트웨어를 테스트하고 [카나리](/canary-deployment/) 또는 [블루-그린](/blue-green-deployment/) 릴리스와 같이
다양한 배포 전략을 사용하여 배포할 수 있도록 완전히 자동화된
방법을 프로덕션에 제공한다.
새로운 수정사항(revision)이 자동으로 테스트되므로 개발자는 안심하고 코드를 더 자주 배포할 수 있다.
일반적으로, CD 전략에서는 피처 브랜칭(feature branching) 또는 풀 리퀘스트(pull requests) 활용이 아닌 트렁크 기반 개발(trunk-based development) 방식이 사용된다.

## 관련 용어

* [지속적인 통합](/continuous-integration/)
* [지속적인 배포](/continuous-deployment/)
