---
title: Implantação Canário
status: Completed
category: conceito
tags: ["aplicação", "", ""]
---

## O que é

Implantação Canário é uma estratégia de implantação que começa com dois ambientes: um com tráfego e outro contendo o código atualizado sem tráfego. O tráfego é gradualmente movido da versão original do aplicativo para a versão atualizada. Pode começar movendo 1% do tráfego, depois 10%, 25% e assim por diante, até que tudo esteja passando pela versão atualizada. As organizações podem testar a nova versão do software em produção, obter feedback, diagnosticar erros e reverter rapidamente para a versão estável, se necessário.

O termo "canário" refere-se à prática do "canário em uma mina de carvão", onde aves canárias foram levadas para minas de carvão para manter os mineiros seguros. Se gases nocivos inodoros estivessem presentes, o pássaro morreria e os mineiros sabiam que tinham que evacuar rapidamente. Da mesma forma, se algo der errado com o código atualizado, o tráfego será "evacuado" de volta à versão original.

## Problema relacionado

Não importa o quão completa seja a estratégia de teste, sempre existirá alguns bugs a serem descobertos na produção. Mudar 100% do tráfego de uma versão de um aplicativo para outra pode levar a falhas mais impactantes.

## Como isso ajuda

As implantações canários permitem que as organizações vejam como o novo aplicativo se comporta nos cenários de produção antes de mover o tráfego para a nova versão. Essa estratégia permite que as organizações minimizem o tempo de inatividade e a reversão rápida em caso de problemas com a nova implantação. Também permite testes de aplicativos de produção mais aprofundados sem um impacto significativo na experiência geral do usuário.
