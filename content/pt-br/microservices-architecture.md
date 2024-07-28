---
title: Arquitetura de Microsserviços
status: completo
category: conceito
tags: ["arquitetura", "fundamento"]
---

Uma arquitetura de microsserviços é uma abordagem arquitetural que divide aplicações em (micro)[serviços](/pt-br/service/) individuais independentes, sendo cada serviço focado em um aspecto específico.
Esses serviços trabalham juntos de perto, dando ao usuário final a impressão de que são uma única entidade.
Considere a Netflix como exemplo.
Sua interface te permite acessar, buscar e pré-visualizar vídeos.
Essas funcionalidades são provavelmente alimentadas por serviços menores, cada um lidando com uma delas, e.g., autenticação, busca, e pré-visualização no seu navegador.

Essa abordagem arquitetural permite que desenvolvedores entreguem atualizações ou novas funcionalidades muito mais rápido do que se fosse tudo fortemente acoplado, como em uma [aplicação monolítica](/pt-br/monolithic-apps/) (mais sobre isso abaixo).

## Problema relacionado

Aplicações são constituídas de diferentes partes, cada uma responsável por um aspecto específico.
Demanda por uma funcionalidade particular não vai necessariamente aumentar ou diminuir junto com a demanda por outras partes da aplicação.
Voltando ao exemplo da Netflix.
Digamos que após uma grande campanha de publicidade, a Netflix tenha um grande pico de assinaturas, mas a transmissão continuou aproximadamente estável nas primeiras horas do dia.
O aumento repentino de assinaturas demanda mais capacidade de assinaturas.
Tradicionalmente (abordagem monolítica), a aplicação inteira precisaria ser escalada para acomodar o aumento - um uso muito ineficiente de recursos.

Arquiteturas monolíticas também facilitam para que os desenvolvedores sucumbam às armadilhas do projeto.
Como todo o código está em um só lugar, é mais fácil tornar esse código [fortemente acoplado](/pt-br/tightly-coupled-architecture/) e mais difícil de impor o princípio da separação de responsabilidades.
Os monólitos geralmente exigem que os desenvolvedores entendam toda a base de código antes de fazer qualquer alteração.

## Como isso ajuda

Separar funcionalidades em diferentes microsserviços facilita a implantação, atualização e escala de forma independente.
Também permite que times diferentes trabalhem simultaneamente em pequenas partes de uma aplicação maior sem impactar negativamente e inadvertidamente o resto da aplicação.
Embora uma arquitetura de microsserviços resolva muitos problemas, ela também cria sobrecarga operacional — as coisas que você precisa para implantar e acompanhar aumentam em ordem de magnitude.
Muitas [tecnologias nativas de nuvem](/pt-br/cloud-native-tech/) visam tornar microsserviços mais fáceis de implantar e gerenciar.
