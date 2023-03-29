---
title: 코드형 인프라 (IaC)
status: Completed
category: 개념
tags: ["인프라스트럭처", "", ""]
---

## 개념

코드형 인프라(IaC, Infrastructure as code)는 인프라의 정의를 하나 이상의 파일로 저장하는 방식(practice)이다.
이는 일반적으로 쉘 스크립트 또는 기타 설정(configuration) 도구를 통해 서비스형 인프라(IaaS, infrastructure as a service)를 수동으로 프로비저닝하던 기존 모델을 대체한다.

## 다루는 문제

클라우드 네이티브 방식으로 애플리케이션을 구축하려면 사용 후 처분(disposable) 및 재현(reproducible)할 수 있는 인프라를 필요로 한다.
또한 가급적 사람의 개입이 없는 자동화 및 반복적인 방식으로 수요/요구에 따라 [규모를 조절(scale)](/scalability/)하는 것도 필요하다.
수동 프로비저닝은 [클라우드 네이티브 애플리케이션](/cloud-native-apps/)의 응답성 및 확장성 요구사항을 충족할 수 없다.
수동 인프라 변경은 재현하기 어렵고, 규모 제한에 빠르게 도달하며, 잘못된 설정 오류를 유발한다.

## 문제 해결 방식

서버, 로드 밸런서 및 서브넷과 같은 데이터 센터 리소스를 코드로 표현함으로써,
인프라 팀이 모든 설정에 대해 단일 진실 공급원(single source of truth)을 가질 수 있고,
또한 버전 제어 및 배치 전략을 구현하는 [CI](/continuous-integration/)/[CD](/continuous-delivery/) 파이프라인으로 데이터 센터를 관리할 수 있다.