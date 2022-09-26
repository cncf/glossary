---
title: Escalonamento Vertical
status: Completed
category: conceito
tags: ["infraestrutura", "", ""]
---

## O que é

O escalonamento vertical, também conhecido como "escalonamento para cima e para baixo", é uma técnica em que a capacidade de um sistema adiciona CPU e memória aos [nós](/nodes/) individuais à medida que a carga de trabalho aumenta. Digamos que você tenha um computador de 4GB de RAM e queira aumentar sua capacidade para 16GB de RAM, escalar verticalmente significa mudar para um sistema de 16GB de RAM. (Consulte [escalonamento horizontal](/horizontal-scaling/) para obter uma abordagem de dimensionamento diferente.)

## Problema relacionado

À medida que a demanda por um aplicativo cresce além da capacidade atual dessa instância do aplicativo, precisamos encontrar uma maneira de redimensionar (adicionar capacidade) ao sistema. Podemos adicionar mais recursos de computação aos nós existentes (escala vertical) ou mais nós ao sistema ([escala horizontal](/horizontal-scaling/)). [Escalabilidade](/scalability/) contribui para a competitividade, eficiência, reputação e qualidade.

## Como isso ajuda

O escalonamento vertical permite que você redimensione seu servidor sem alterar o código do aplicativo. Isso contrapõe com o escalonamento horizontal, onde o aplicativo deve ser replicado para escalar, que potencialmente exige atualizações do código. O escalonamento vertical aumenta a capacidade de um aplicativo existente, adicionando recursos de computação, permitindo que o aplicativo processe mais solicitações e faça mais trabalho simultaneamente.
