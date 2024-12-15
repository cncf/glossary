---
title: Aplicações Monolíticas
status: Completed
category: conceito
tags: ["arquitetura", "", ""]
---

Uma aplicação monolítica contém todas as funcionalidades em um único programa.
Este é muitas vezes o lugar mais simples e fácil para começar ao fazer uma aplicação.
No entanto, uma vez que a aplicação cresce em complexidade, os monólitos podem se tornar difíceis de manter.
Com mais desenvolvedores trabalhando na mesma base de código, a probabilidade de mudanças conflitantes e a necessidade de comunicação interpessoal entre desenvolvedores aumenta.

## Problema relacionado

A conversão de uma aplicação em [microsserviços](/pt-br/microservices-architecture/) aumenta sua sobrecarga operacional — existe mais coisas para testar, implantar e executar.
No início do ciclo de vida de um produto, pode ser vantajoso adiar essa complexidade e construir uma aplicação monolítica até que o produto seja determinado como bem-sucedido.

## Como isso ajuda

Um monólito bem projetado pode manter os princípios *lean*, sendo a maneira mais simples de colocar uma aplicação em funcionamento.
Quando o valor comercial da aplicação monolítica prova ser bem-sucedido, ela pode ser decomposta em microsserviços.
Desenvolver uma aplicação com base em microsserviços antes que ela tenha se mostrado valiosa pode ser um gasto prematuro de esforço de engenharia.
Se a aplicação não produzir valor, esse esforço se torna desperdiçado.
