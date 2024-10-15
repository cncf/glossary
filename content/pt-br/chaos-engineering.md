---
title: Engenharia do Caos
status: Completed
category: conceito
tags: ["metodologia"]
---

A Engenharia do Caos, ou CE, é a disciplina de experimentar em um [sistema distribuído](/pt-br/distributed-systems/) em produção para construir confiança na capacidade do sistema de resistir a condições turbulentas e inesperadas.

## Problema relacionado

As práticas de [SRE](/pt-br/site-reliability-engineering/) e [DevOps](/pt-br/devops/)focam em técnicas para aumentar a resiliência e [confiabilidade](/pt-br/reliability/) do produto. A capacidade de um sistema de tolerar falhas enquanto garante qualidade de serviço adequada é tipicamente um requisito de desenvolvimento de software. Existem vários aspectos envolvidos que podem levar a falhas de um aplicativo, como infraestrutura, plataforma ou outras partes móveis de um aplicativo baseado em [microserviços](/pt-br/microservices-architecture/). A implantação frequente de novos recursos no ambiente de produção pode aumentar a probabilidade de tempo de inatividade e um incidente crítico — com consequências consideráveis para o negócio.

## Como ajuda

A engenharia do caos é uma técnica para atender aos requisitos de resiliência. É usada para alcançar resiliência contra falhas de infraestrutura, plataforma e aplicativo. Engenheiros de caos usam experimentos de caos para injetar proativamente falhas aleatórias e verificar se um aplicativo, infraestrutura ou plataforma pode se recuperar automaticamente e se a falha não pode afetar perceptivelmente os clientes. Os experimentos de caos visam descobrir pontos cegos (por exemplo, técnicas de monitoramento ou de escalonamento automático) e melhorar a comunicação entre equipes durante incidentes críticos. Essa abordagem ajuda a aumentar a resiliência e a confiança da equipe em sistemas complexos, especialmente em produção.
