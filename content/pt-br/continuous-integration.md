---
title: Integração Contínua
status: Completed 
category: conceito
tags: ["aplicação", "metodologia", ""]
---

## O que é

A integração contínua (continuous integration - CI), é a prática de integrar mudanças de código da maneira mais regular possível. A integração contínua é um pré-requisito para a [entrega contínua](/pt-br/continuous-delivery/). Tradicionalmente, o processo de integração contínua começa quando as alterações do código são confirmadas em um sistema de controle de código-fonte (Git, Mercurial ou Subversion) e termina com o artefato testado e pronto para ser consumido por um sistema de entrega contínua.

## Problema relacionado

Os sistemas de software geralmente são grandes e complexos, com vários desenvolvedores mantendo e atualizando-os. Trabalhando em paralelo e em diferentes partes do sistema, esses desenvolvedores podem fazer alterações conflitantes e inadvertidamente podem atrapalhar o trabalho um do outro. Além disso, com vários desenvolvedores trabalhando no mesmo projeto, quaisquer tarefas diárias, como testar e avaliar a qualidade do código, precisariam ser repetidas por cada desenvolvedor, e assim, ocasionando a perda de tempo.

## Como isso ajuda

A integração contínua verifica automaticamente se as alterações de código são mescladas de forma limpa sempre que um desenvolvedor confirma uma alteração. É uma prática quase onipresente usar o servidor de integração contínua para executar as verificações de qualidade de código, testes e até implantações. Assim, torna-se uma implementação concreta do controle de qualidade dentro das equipes. A integração contínua  permite que as equipes de software transformem cada envio do código em uma falha concreta ou em um candidato a versão estável.
