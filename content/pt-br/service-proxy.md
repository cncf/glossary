---
title: Proxy de serviço
status: Concluído
category: tecnologia
tags: ["networking", "", ""]
---

## O que é

Um proxy de serviço intercepta o tráfego de ou para um determinado [serviço](/service/),
aplica alguma lógica a ele e, em seguida, encaminha esse tráfego para outro serviço.
Ele atua essencialmente como um “intermediário” que coleta informações sobre o tráfego da rede e/ou aplica regras a ele.

## Problema relacionado

Para acompanhar a comunicação serviço a serviço (também conhecido como tráfego de rede) e
potencialmente transformá-lo ou redirecioná-lo, precisamos coletar dados.
Tradicionalmente, o código que permitia a coleta de dados e o gerenciamento do tráfego de rede era incorporado a cada aplicativo.

## Como isso ajuda

Um proxy de serviço nos permite “externalizar” essa funcionalidade.
Não precisa mais viver dentro dos aplicativos.
Em vez disso, agora está incorporado na camada da plataforma (onde seus aplicativos são executados).

Atuando como guardiões entre os serviços, os proxies fornecem informações sobre o tipo de comunicação que está acontecendo.
Com base em suas percepções, eles determinam para onde enviar uma solicitação específica ou até mesmo recusá-la totalmente.

Os proxies coletam dados críticos, gerenciam o roteamento (distribuem o tráfego uniformemente entre os serviços ou reencaminham se alguns serviços forem interrompidos),
criptografar conexões e armazenar conteúdo em cache (reduzindo o consumo de recursos).
