---
title: Kubernetes
status: Completed
category: tecnologia
tags: ["infraestrutura", "fundamental", ""]
---

Kubernetes, normalmente abreviado como K8s, é um orquestrador de contêineres de código aberto. 
Ele automatiza o ciclo de vida de aplicações em contêineres em infraestruturas modernas, funciona como um "sistema operacional de datacenter" que gerencia aplicativos em um [sistema distribuído](/distributed-systems/).

O Kubernetes planeja os [contêineres](/pt-br/container/) entre [nós](/pt-br/nodes/) de um [cluster](/pt-br/cluster/), agrupando vários recursos de infraestrutura como balanceador de carga, armazenamento persistente, etc., para executar aplicações em contêineres.

O Kubernetes permite automação e extensibilidade, permitindo que os usuários implantem aplicativos declarativamente (veja abaixo) de maneira reproduzível. É extensível por meio de sua [API](/pt-br/application-programming-interface/), permitindo que profissionais experientes do Kubernetes aproveitem seus recursos de automação de acordo com suas necessidades.

## Problema relacionado

A automação de infraestrutura e o gerenciamento declarativo de configuração são conceitos importantes há muito tempo, mas se tornaram mais prementes à medida que a [computação em nuvem](/pt-br/cloud-computing/) ganhou popularidade.
À medida que a demanda por recursos de computação aumenta e as organizações precisam fornecer mais recursos operacionais com menos engenheiros, novas tecnologias e métodos de trabalho são necessários para atender a essa demanda.

## Como isso ajuda

De forma similar às ferramentas tradicionais de [infraestrutura como código](/pt-br/infrastructure-as-code/), o Kubernetes ajuda na automação e tem a vantagem de trabalhar com contêineres.
Os contêineres são mais resistentes ao desvio de configuração do que [máquinas virtuais](/pt-br/virtual-machine/) ou físicas.

Adicionalmente, o Kubernetes funciona de forma declarativa, o que significa que, em vez de fornecer instruções ao Kubernetes os operadores descrevem o que desejam - geralmente com arquivos de manifesto (por exemplo, no formato YAML) - definindo como a infraestrutura deve ser.

Kubernetes cuida então do "como" e isso o torna extremamente compatível com a infraestrutura como código.

O Kubernetes também possui [auto recuperação](/self-healing/). 
O estado real do cluster sempre corresponderá ao estado desejado pelo operador. Se for detectado um desvio ao que foi descrito nos arquivos de manifesto um controlador do Kubernetes entrará em ação e procederá com a correção.
Embora a infraestrutura que o Kubernetes possa estar em constante mudança, o Kubernetes se adapta de forma constante e automática a estas mudanças, garantindo que o estado desejado permaneça.
