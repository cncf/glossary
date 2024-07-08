---
title: Pod
status: Completed
category: conceito
tags: ["infraestrutura", "fundamento", ""]
---

Em um ambiente [Kubernetes](/pt-br/kubernetes/), um pod atua como a unidade de implantação mais básica.
Ele representa um bloco essencial para implantar e gerenciar aplicações containerizadas.
Cada pod contém uma única instância de aplicação e pode conter um ou mais [contêineres](/pt-br/container/).
O Kubernetes gerencia pods como parte de uma implantação maior e pode escalar pods [verticalmente](/pt-br/vertical-scaling/) ou [horizontalmente](/pt-br/horizontal-scaling/) conforme necessário.

## Problema relacionado

Enquanto os contêineres geralmente atuam como unidades independentes que executam e controlam uma carga de trabalho específica,
há casos em que os contêineres precisam interagir e ser controlados de maneira fortemente acoplada.

Se cada um desses contêineres intimamente relacionados fosse gerenciado individualmente, isso levaria a tarefas de gerenciamento redundantes.
Por exemplo, o operador teria que determinar repetidamente o posicionamento dos contêineres relacionados para garantir que permaneçam juntos.
E embora os ciclos de vida desses contêineres relacionados precisem ser sincronizados, eles só podem ser gerenciados individualmente.  


## Como isso ajuda

Os pods agrupam contêineres intimamente ligados em uma única unidade, simplificando significativamente as operações de contêineres.
Por exemplo, contêineres auxiliares são frequentemente usados junto com o contêiner principal para adicionar funcionalidades adicionais ou para configurar configurações globais.
Exemplos incluem contêineres que injetam e aplicam configurações básicas ao contêiner principal,
_sidecar_ (contêineres) que gerenciam o roteamento de tráfego de rede para o contêiner principal (veja [service mesh](/pt-br/service-mesh/)), ou contêineres que coletam logs em conjunto com cada container.

Alocação de memória e CPU pode ser definida tanto em nível de pod, permitindo que os contêineres dentro compartilhem recursos de forma flexível, quanto individualmente por contêiner.