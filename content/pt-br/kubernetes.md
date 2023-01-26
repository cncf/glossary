---
title: Kubernetes
status: Completed
category: tecnologia
tags: ["infrastructure", "fundamental", ""]
---

## O que é

Kubernetes, normalmente abreviado como K8s, é um orquestrador de containers de código aberto. 
Ele automatiza o ciclo de vida de aplicações em containers em infraestruturas modernas, funciona como um "sistema operacional de datacenter" que gerencia aplicativos em um [sistema distribuído](/distributed-systems/).

O Kubernetes planeja os [contêineres](/container/) entre [nós](/nodes/) de um [cluster](/cluster/), agrupando vários recursos de infraestrutura como balanceador de carga, armazenamento persistente, etc., para executar aplicações em containers.

O Kubernetes permite automação e extensibilidade, permitindo que os usuários implantem aplicativos declarativamente (veja abaixo) de maneira reproduzível. É extensível por meio de sua [API](/application-programming-interface/), permitindo que profissionais experientes do Kubernetes aproveitem seus recursos de automação de acordo com suas necessidades.

## Problema relacionado

A automação de infraestrutura e o gerenciamento declarativo de configuração são conceitos importantes há muito tempo, mas se tornaram mais prementes à medida que a [computação em nuvem](/cloud-computing/) ganhou popularidade.
À medida que a demanda por recursos de computação aumenta e as organizações precisam fornecer mais recursos operacionais com menos engenheiros, novas tecnologias e métodos de trabalho são necessários para atender a essa demanda.

## Como isso ajuda

De forma similar às ferramentas tradicionais de [infraestrutura como código](/infraestrutura como código/), o Kubernetes ajuda na automação e tem a vantagem de trabalhar com contêineres.
Os contêineres são mais resistentes ao desvio de configuração do que [virtual](/virtual-machine/) ou máquinas físicas.

Similar to traditional [infrastructure as code](/infrastructure-as-code/) tools, Kubernetes helps with automation but has the advantage of working with containers. 
Containers are more resistant to configuration drift than [virtual](/virtual-machine/) or physical machines. 

Adicionalmente, o Kubernetes funciona de forma declarativa, o que significa que, em vez de fornecer instruções ao Kubernetes os operadores descrevem o que desejam - geralmente com arquivos de manifesto (no formato YAML) - definindo como a infraestrutura deve ser.

Kubernetes cuida então do "como" e isso o torna extremamente compatível com a infraestrutura como código.

O Kubernetes também possui [autocura](/self-healing/). 
O estado real do cluster sempre corresponderá ao estado desejado pelo operador. Se for detectado um desvio ao que foi descrito nos arquivos de manifesto um controlador do Kubernetes entrará em ação e procederá com a correção.
Embora a infraestrutura que o Kubernetes possa estar em constante mudança, o Kubernetes se adapta de forma constante e automática a estas mudanças, garantindo que o estado desejado permaneça.
