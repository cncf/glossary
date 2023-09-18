---
título: Malha de serviço
estado: Concluído
categoria: tecnologia
tags: ["redes", "", ""]
---

## O que é isso

Em um mundo de [microsserviços](/microservices/), os aplicativos são divididos em vários [serviços](/service/) menores que se comunicam por uma rede.
Assim como sua rede Wi-Fi, as redes de computadores são intrinsecamente não confiáveis, hackeáveis ​​e muitas vezes lentas.
As malhas de serviços abordam esse novo conjunto de desafios gerenciando o tráfego (ou seja, a comunicação) entre serviços e
adicionando [confiabilidade](/reliability/), [observabilidade](/observability/) e recursos de segurança uniformemente em todos os serviços.

## Problema que ele aborda

Tendo migrado para uma arquitetura de microsserviços, os engenheiros agora lidam com centenas,
possivelmente até milhares de serviços individuais, todos necessitando de comunicação.
Isso significa que muito tráfego está indo e voltando pela rede.
Além disso, os aplicativos individuais podem precisar criptografar as comunicações para dar suporte aos requisitos regulatórios,
forneça métricas comuns às equipes de operações ou forneça informações detalhadas sobre o tráfego para ajudar a diagnosticar problemas.
Se integrado aos aplicativos individuais,
cada um desses recursos causará atrito entre as equipes e retardará o desenvolvimento de novos recursos.

## Como isso ajuda

As malhas de serviço adicionam confiabilidade, observabilidade e recursos de segurança
uniformemente em todos os serviços de um cluster sem exigir alterações de código.
Antes das malhas de serviço, essa funcionalidade tinha que ser codificada em cada serviço,
tornando-se uma fonte potencial de bugs e dívida técnica.
