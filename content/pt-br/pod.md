---
title: Pod
status: Completed
category: conceito
tags: ["infraestrutura", "fundamento", ""]
---

Em um ambiente [Kubernetes](/kubernetes/), um pod atua como a unidade de implantação mais básica.
Ele representa um bloco essencial para implantar e gerenciar aplicações containerizadas.
Cada pod contém uma única instância de aplicação e pode conter um ou mais [containers](/container/).
O Kubernetes gerencia pods como parte de uma implantação maior e pode escalar pods [verticalmente](/vertical-scaling/) ou [horizontalmente](/horizontal-scaling/) conforme necessário.

## Problema relacionado

Enquanto os containers geralmente atuam como unidades independentes que executam e controlam uma carga de trabalho específica,
há casos em que os containers precisam interagir e ser controlados de maneira fortemente acoplada.

Se cada um desses containers intimamente relacionados fosse gerenciado individualmente, isso levaria a tarefas de gerenciamento redundantes.
Por exemplo, o operador teria que determinar repetidamente o posicionamento dos containers relacionados para garantir que permaneçam juntos.
E embora os ciclos de vida desses containers relacionados precisem ser sincronizados, eles só podem ser gerenciados individualmente.  


## Como isso ajuda

Os pods agrupam containers intimamente ligados em uma única unidade, simplificando significativamente as operações de containers.
Por exemplo, containers auxiliares são frequentemente usados junto com o container principal para adicionar funcionalidades adicionais ou para configurar configurações globais.
Exemplos incluem containers que injetam e aplicam configurações básicas ao container principal,
_sidecar_ (containers) que gerenciam o roteamento de tráfego de rede para o container principal (veja [service mesh](/service-mesh/)), ou containers que coletam logs em conjunto com cada container.

Alocação de memória e CPU pode ser definida tanto em nível de pod, permitindo que os containers dentro compartilhem recursos de forma flexível, quanto individualmente por container.