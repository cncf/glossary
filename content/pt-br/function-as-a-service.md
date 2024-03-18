---
title: Função como um Serviço (FaaS)
status: Completed
category: Tecnologia
tags: ["infraestrutura", "", ""]
---

## O que é

Função como um Serviço, (FaaS - Function as a Service ), é um tipo de [serviço](/pt-br/service/) de [computação em nuvem](/pt-br/cloud-computing/) [sem servidor](/pt-br/serverless/) que permite a execução de código em resposta a eventos sem manter a complexa infraestrutura normalmente associado à criação e lançamento de aplicações de [microsserviços](/microservices/).

Com FaaS, os usuários gerenciam apenas funções e dados enquanto o provedor de nuvem gerencia a aplicação.
Isso permite que os desenvolvedores obtenham as funções necessárias sem pagar pelos serviços quando o código não está em execução.

## Problema relacionado

Em um cenário tradicional, uma empresa gerencia e mantém seu próprio data center local. A empresa deve investir em servidores, armazenamento, software e outras tecnologias e possivelmente contratar uma equipe de TI ou terceirizados para comprar, gerenciar e atualizar todos os equipamentos e licenças. O data center deve ser construído para atender a demanda de pico, mesmo quando as cargas de trabalho diminuem e esses recursos ficam ociosos. Por outro lado, o departamento de TI pode ter dificuldades para acompanhar se o negócio se expandir.

Sob um modelo padrão de computação em nuvem [Infrastructure-as-a-Service (IaaS)](/infrastructure-as-a-service/), os usuários compram antecipadamente unidades de capacidade, o que significa que será pago a um provedor de nuvem pública por componentes de servidor sempre ativos para executar suas aplicações. É, portanto, responsabilidade do usuário aumentar a capacidade do servidor durante períodos de alta demanda e reduzir quando essa capacidade não for mais necessária.

A infraestrutura de nuvem necessária para executar uma aplicação está ativa mesmo quando a aplicação não está sendo usado.

## Como isso ajuda

O FaaS oferece aos desenvolvedores uma [abstração](/pt-br/abstraction/) para executar aplicações Web em resposta a eventos sem gerenciar servidores. Por exemplo, carregar um arquivo pode acionar um código personalizado que transcreve o arquivo em vários formatos.

A infraestrutura FaaS dimensionará automaticamente o código para uso pesado, e o desenvolvedor não precisa gastar tempo ou recursos criando o código para [escalabilidade](/pt-br/scalability/).

O faturamento é baseado apenas no tempo de computação, o que significa que as empresas não precisam pagar quando as funções não estiverem em uso.
