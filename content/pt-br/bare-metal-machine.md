---
title: Máquina Bare Metal
status: Completed
category: tecnologia
tags: ["infraestrutura", "", ""]
---

## O que é

Bare metal refere-se a um computador físico, mais especificamente um servidor, que tem um, e apenas um sistema operacional. A distinção é importante na computação moderna porque muitos, se não a maioria, servidores são [máquinas virtuais](/virtual-machine/). Um servidor físico geralmente é um computador com grande capacidade e com hardware embutido. Instalar um sistema operacional e executar aplicativos diretamente nesse hardware físico, sem [virtualização](/virtualization/), é conhecido como executar em “bare metal”.

## Problema relacionado

Instalar um sistema operacional em um computador físico é o padrão original de computação. Todos os recursos do computador físico ficam disponíveis diretamente para o sistema operacional, e sem nenhuma camada de virtualização presente não há atraso artificial na tradução de instruções do sistema operacional para hardware.

## Como isso ajuda

Ao dedicar todos os recursos de computação de um computador a um único sistema operacional, você potencialmente fornece o melhor desempenho possível ao sistema operacional. Se você precisa executar uma carga alta de trabalho que deve ter acesso extremamente rápido aos recursos de hardware, o bare metal pode ser a solução ideal.

No contexto de [aplicações nativas em nuvem](/pt-br/cloud-native-apps/), geralmente pensamos em desempenho em termos de [escala](/scalability/) para um grande número de eventos simultâneos, que podem ser tratados por [escala horizontal](/horizontal-scaling/) (adicionando mais máquinas ao  recursos disponíveis). Mas algumas cargas de trabalho podem exigir um redimensionamento vertical (adicionando mais energia a uma máquina física existente) e/ou uma resposta extremamente rápida de um hardware físico, caso em que o bare metal é mais adequado. Bare metal também permite que você ajuste o hardware físico e possivelmente até os drivers do hardware para melhorar a realização da sua tarefa.
