---
title: Infraestrutura como Código
status: Completed
category: conceito
tags: ["infraestrutura", "metodologia", ""]
---

Infraestrutura como código é a prática de armazenar a definição da infraestrutura como um ou mais arquivos. Isso substitui o modelo tradicional em que a infraestrutura como serviço era provisionada manualmente, geralmente por meio de scripts shell ou outras ferramentas de configuração.

## Problema relacionado

A criação de aplicações nativa em nuvem requer que a infraestrutura seja descartável e reproduzível. Também precisa ser dimensionada sob demanda de maneira automatizada e repetível, preferencialmente sem intervenção humana. O provisionamento manual não atende aos requisitos de capacidade de resposta e [escalabilidade](/scalability/) das [aplicações nativas em nuvem](/pt-br/cloud-native-apps/). As alterações manuais na infraestrutura não são reproduzíveis, rapidamente encontram limites de escala e introduzem erros na configuração.

## Como isso ajuda

Ao representar os recursos do data center, como servidores, balanceadores de carga e sub-redes como código, a infraestrutura como código permite que as equipes de infraestrutura tenham uma única fonte para todas as configurações e também permite que elas gerenciem seu data center em um pipeline de [CI](/pt-br/continuous-integration/)/[CD](/pt-br/continuous-delivery/), implementando estratégias de controle de versão e implantação.
