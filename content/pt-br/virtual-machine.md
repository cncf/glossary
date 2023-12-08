---
title: Máquina Virtual
status: Completed
category: tecnologia
tags: ["fundamento", "infraestrutura", ""]
---

## O que é

Uma máquina virtual ou VM (do inglês "Virtual Machine") é a inexistência de vínculo de um computador e seu sistema operacional a um hardware específico. As VMs dependem da [virtualização](/pt-br/virtualization/) para transformar um único computador físico em vários computadores virtuais. Essa separação permite que organizações e provedores de infraestrutura criem e destruam facilmente VMs sem afetar o hardware fisicamente.

## Problema relacionado

As máquinas virtuais se aproveitam da virtualização. Quando uma máquina [bare metal](/pt-br/bare-metal-machine/) está vinculada a um único sistema operacional, os recursos da máquina que podem ser usados são um pouco limitado. Além disso, quando um sistema operacional está vinculado a uma única máquina física, sua disponibilidade está diretamente ligada a esse hardware. Se a máquina física estiver desligada devido a falhas de manutenção ou hardware, o sistema operacional também estará.

## Como isso ajuda

Ao remover a relação direta entre um sistema operacional e uma única máquina física, você resolve vários problemas de máquinas *bare metal*: tempo de provisionamento, utilização de hardware e resiliência.

Sem nenhum hardware novo para ser comprado, instalado ou configurado para suportá-lo, o tempo de provisionamento de um novo computador é drasticamente melhorado. As VMs permitem que você use melhor seus recursos de hardware físico existentes, colocando várias máquinas virtuais em uma única máquina física. Não vinculadas a uma determinada máquina física, as VMs também são mais resilientes do que as máquinas físicas. Quando uma máquina física precisar ficar desligada, as VMs em execução nela podem ser movidas para outra máquina com pouco ou nenhum tempo de inatividade.
