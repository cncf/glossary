---
title: Engenharia do Caos
status: Completed
category: conceito
tags: ["metodologia", "", ""]
---

## O que é

Engenharia do Caos ou EC é a disciplina de experimentação em um [sistema distribuído](/distributed-systems/) em produção para aumentar a confiança na capacidade do sistema para resistir a condições turbulentas e inesperadas.

## Problema relacionado

As práticas [SRE](/pt-br/site-reliability-engineering/) e [DevOps](/pt-br/devops/) focam-se em técnicas para aumentar a resiliência e confiabilidade do produto.
A capacidade de um sistema para tolerar falhas enquanto garante um serviço de qualidade é geralmente um requisito de desenvolvimento de software.
Existem vários aspetos envolvidos que podem levar a interrupções da aplicação, como infraestrutura, plataforma ou outras partes móveis de uma aplicação com base em ([micro serviços](/microservices/)).
O *Deploy* frequente de novas funcionalidades para ambientes de produção podem resultar em alta probabilidade de indisponibilidade e incidentes críticos — com consequências consideráveis para o negócio.

## Como isso ajuda

Engenharia do Caos é uma técnica para satisfazer os requisitos de resiliência.
É utilizado para assegurar resiliência contra falhas na infraestrutura, plataforma e falhas aplicacionais.
Engenheiros do Caos utilizam experiências de caos para injetar falhas aleatórias de forma proativa, a fim de verificar se uma aplicação, infraestrutura ou plataforma podem ser autorregeneradas e se a falha não tem um impacto visível para os clientes.
Experiencias do Caos visa descobrir pontos cegos (p.e. monitorização ou técnicas de escalonamento automático) e melhorar a comunicação entre equipas durante incidentes críticos.
Esta abordagem ajuda a aumentar a resiliência e a confiança das equipas em sistemas complexos, particularmente em produção.