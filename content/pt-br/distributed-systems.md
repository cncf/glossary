---
title: Sistemas Distribuídos
status: Completed
category: conceito
tags: ["arquitetura", "", ""]
---

## O que é

Um sistema distribuído é uma coleção de elementos de computação autônomos conectados por uma rede que aparece para os usuários como um único sistema coerente. Geralmente referidos como [nós](/pt-br/nodes/), esses componentes podem ser dispositivos de hardware (por exemplo, computadores, telefones móveis) ou processos de software. Os nós são programados para alcançar um objetivo comum e, para colaborar, eles trocam mensagens pela rede.

## Problema relacionado     

Hoje, inúmeras aplicações modernas são tão grandes que precisariam de supercomputadores para operar. Pense no Gmail ou Netflix. Nenhum computador único é suficientemente poderoso para hospedar toda a aplicação. Ao conectar vários computadores, o poder computacional se torna praticamente ilimitado. Sem a computação distribuída, muitas das aplicações das quais dependemos hoje não seriam possíveis.

Tradicionalmente, os sistemas seriam [escalados](/pt-br/scalability) verticalmente. Isso significa adicionar mais CPU ou memória a uma máquina individual. A [escalabilidade vertical](/pt-br/vertical-scaling/) é demorada, requer tempo de inatividade e atinge seu limite rapidamente.

## Como ajuda

Sistemas distribuídos permitem a [escalabilidade horizontal](/horizontal-scaling/) (por exemplo, adicionar mais nós ao sistema sempre que necessário). Isso pode ser automatizado, permitindo que um sistema lide com um aumento repentino na carga de trabalho ou no consumo de recursos.

Um sistema não distribuído expõe-se a riscos de falhas, porque se uma máquina falhar, o sistema inteiro falha. Um sistema distribuído pode ser projetado de tal maneira que, mesmo se algumas máquinas falharem, o sistema geral ainda pode continuar funcionando para produzir o mesmo resultado.
