---
Title: Serverless
Status: Completed
Category: tecnologia
tags: ["arquitetura", "", ""]
---

Serverless é um modelo de desenvolvimento nativo na nuvem que permite que desenvolvedores criem aplicações sem que seja necessário gerenciar servidores. Ainda existem servidores no modelo serverless, mas eles são [abstraídos](/pt-br/abstraction/) do desenvolvimento. Um provedor de computação em nuvem se encarrega do provisionamento, manutenção e [escala](/scalability/) da infraestrutura de servidores. Desenvolvedores podem simplesmente carregar o código em [contêineres](/pt-br/container/) para implantação. Uma vez implantadas, aplicações serverless respondem automaticamente à demanda, escalando para cima e para baixo conforme necessário. O preço cobrado por provedores de computação em nuvem para funções serverless geralmente é realizada com base na sua utilização sob demanda. Como resultado disto, quando uma função serverless não está em execução ela não tem custo algum.

## Problema relacionado

Em um modelo de [computação em nuvem](/pt-br/cloud-computing/) com [Infraestrutura-como-Serviço (IaaS)](/infrastructure-as-a-service/), usuários adquirem unidades de capacidade, o que significa que o provedor da nuvem fornece componentes de servidores sempre disponíveis para a execução de aplicações. É responsabilidade do usuário fazer com que os servidores escalem para cima durante períodos de alta demanda e que escalem para baixo quando a capacidade fornecida não é mais necessária. A infraestrutura de nuvem utilizada para executar uma aplicação fica, no entanto, ativa mesmo quando a aplicação não está sendo utilizada.

## Como isso ajuda

Na arquitetura serverless as aplicações são iniciadas conforme necessárias. Quando um evento ocorre o provedor da nuvem aloca os recursos dinamicamente para que o código da aplicação possa ser executado. O usuário deixa de pagar no momento em que o código finaliza sua execução. Além dos benefícios de custo e eficiência, a utilização de serverless libera pessoas desenvolvedoras de rotinas e tarefas relacionadas ao provisionamento de servidores e escala da aplicação. Com serverless tarefas rotineiras como gerenciar sistemas operacionais, correções de segurança, balanceamento de carga, gerenciamento de capacidade, escala, coleta de registros e monitoramento são todas atribuídas ao provedor do serviço de computação em nuvem.
