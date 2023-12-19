---
title: Multitenancy
status: Completed
category: propriedade
---

## O que é

Multitenancy (ou multi-tenancy) se refere a uma única instalação de software que atende a múltiplos inquilinos. Um inquilino pode ser um usuário, uma aplicação ou um grupo de usuários/aplicações que usam esse software para operar no seu próprio conjunto de dados. Esses inquilinos não compartilham dados (a não ser que explicitamente instruído pelo proprietário), e podem até não estar cientes um dos outros.

Um inquilino pode ser tão pequeno quanto um único usuário com um único ID — pense em software de produtividade pessoal — ou tão grande quanto uma corporação inteira, com milhares de IDs de logins, cada qual com seus privilégios, e interrelacionados de múltiplas formas.
Exemplos de software multitenant são: Google Mail, Google Docs, Microsoft Office 365, Salesforce CRM, e Dropbox, dentre tantos outros softwares que podem ser totalmente ou parcialmente multitenant.


## Problema relacionado 

Sem multitenancy, cada inquilino necessitaria de uma instalação de software dedicada. Isso aumenta a utilização de recursos, esforço de manutenção, e, por fim, o custo do software.

## Como isso ajuda

Software multitenant dá a cada inquilino um ambiente segregado (dados de trabalho, configurações, credenciais, etc.), servindo simultaneamente vários inquilinos. Da perspectiva dos inquilinos, cada um tem uma instalação de software dedicada, mas, na realidade, todos estão compartilhando apenas uma. Isso é feito executando o software em um servidor e permitindo que os inquilinos conectem a ele pela rede, via uma interface e/ou uma [API](/pt-br/application-programming-interface/) (veja também [Arquitetura Cliente-Servidor](/pt-br/client-server-architecture/)).
Com software multitenant, inquilinos compartilham os recursos de uma instalação sem afetar uns aos outros, ou de forma predefinida e controlada. O resultado é a economia de recusos no provedor de software, que pode ser repassada aos inquilinos, diminuindo significativamente o custo de software para os usuários (novamente, pense em clientes web de e-mail, ou editores de documentos).

## Termos relacionados

Multitenancy não é sinônimo de [SaaS](/pt-br/software-as-a-service/), mas é bem comum que SaaS seja multitenant e que multitenancy seja um dos seus maiores benefícios. 