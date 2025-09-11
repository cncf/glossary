---
title: Contêinerização
status: Completed
category: tecnologia
tags: ["aplicação", "", ""]
---

A conteinerização é o processo de agrupar uma aplicação e suas dependências em uma imagem de contêiner. O processo de criação do contêiner requer adesão ao padrão [Open Container Initiative](https://opencontainers.org) (OCI). Desde que a saída seja uma imagem de contêiner que atenda a esse padrão, a ferramenta de conteinerização usada não importa.

## Problema relacionado

Antes que o uso de contêineres se tornasse mais comum , as organizações usavam máquinas virtuais (VMs) para orquestrar várias aplicações em uma única [máquina bare metal](/pt-br/bare-metal-machine/). As VMs são significativamente maiores que os contêineres e exigem um *hypervisor* para serem executados. Devido ao armazenamento, backup e transferência desses *templates* de VM maiores, a criação dos *templates* de VM também é lenta. Além disso, as VMs podem sofrer inconsistências nas configurações, o que viola o princípio da [imutabilidade](/immutable-infrastructure/).

## Como isso ajuda

As imagens de contêiner são leves (ao contrário das VMs tradicionais) e o processo de conteinerização requer apenas um arquivo com uma lista de dependências. Esse arquivo pode ser versionado e o processo de compilação pode ser automatizado, permitindo que uma organização se concentre em outras prioridades enquanto os processos automatizados cuidam da compilação. Uma imagem de contêiner é armazenada por um identificador exclusivo vinculado ao seu conteúdo e configuração exatos. À medida que os contêineres são programados e reprogramados, eles sempre são redefinidos para seu estado inicial, o que elimina inconsistências de configuração.
