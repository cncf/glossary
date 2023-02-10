---
title: Blue Green Deployment
status: Completed
category: conceito
tags: ["aplicação", "", ""]
---

## O que é

O Blue-green deployment é uma estratégia para atualizar os sistemas de computador em execução com o mínimo de tempo de indisponibilidade. O operador mantém dois ambientes, chamados "blue" e "green".
Um atende ao tráfego de produção (a versão que os usuários estão usando atualmente), enquanto o outro é atualizado. Depois que o teste é concluído no ambiente inativo (green), o tráfego de produção é redirecionado (geralmente com o uso de um baleanceador de carga - load balancer). Observe que blue-green deployment geralmente significa alternar os ambientes por completo, abrangendo muitos serviços, todos de uma vez. Confusamente, às vezes o termo é usado em relação a serviços individuais em um sistema. Para evitar essa ambiguidade, o termo "zero-downtime deployment" é preferido quando se refere a componentes individuais.

## Problema relacionado

Blue-green deployments permitem um tempo mínimo de indisponibilidade ao atualizar o software que deve ser alterado em "lockstep" devido à falta de compatibilidade com versões anteriores. Por exemplo, blue-green deployment poderia ser apropriado para uma loja online consistindo de um site e um banco de dados que precisam ser atualizados, mas a nova versão do banco de dados não funciona com a versão antiga do site, e vice-versa. Neste caso, ambos precisam ser alterados ao mesmo tempo. Se isso fosse feito em um sistema de produção, os clientes perceberiam um tempo de indisponibilidade.

## Como isso ajuda

Blue-green deployment é uma estratégia apropriada para softwares que não são nativos da nuvem e que precisam ser atualizados com o mínimo de indisponibilidade. No entanto, o seu uso é normalmente um sinal ("code smell") de que o software legado precisa ser reprojetado de forma que os componentes possam ser atualizados individualmente.
