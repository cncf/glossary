---
title: Infraestrutura Imutável
status: Completed
category: propriedade
---

## O que é

A infraestrutura imutável refere-se à infraestrutura de computadores ([máquinas virtuais](/virtual_machine/), [contêineres](/container/), dispositivos de rede) que não pode ser alterada após ter sido implantada. Podendo ser aplicada por um processo automatizado, para retornar ao estado original caso haja alterações não autorizadas em um sistema que de antemão não aceita alterações. Contêineres são um bom exemplo de infraestrutura imutável, pois mudanças persistentes só podem ser realizadas com a criação de uma nova versão do contêiner, ou recriando o contêiner existente à partir de sua imagem.

## Problema relacionado

Ao impedir ou identificar mudanças não autorizadas, as infraestruturas imutáveis, facilitam a identificação e mitigação de riscos de segurança. 

## Como isso ajuda

Gerenciar estes sistemas torna-se mais previsível, pois os administradores podem contar que eles estejam conforme foram criados. E antes de tudo, é possível saber que ninguém cometeu enganos, ou alterações que esqueceu de comunicar. A infraestrutura imutável anda de mãos dadas com a [infraestrutura como código](/infrastructure_as_code/), onde toda a automação necessária para criar a infraestrutura está armazenada em algum sistema de controle de versão (ex. Git). Esta combinação de infraestrutura imutável e controle de versão, permite que haja um registro de auditoria permanente de todas as alterações autorizadas em um sistema.