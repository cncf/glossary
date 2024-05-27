---
title: Orquestração de Contêiners
status: Completed
category: conceito
---


Orquestração de [Contêiners](/pt-br/container/) refere-se à gestão e automatização do ciclo de vida de aplicativos [contêinerizados](/pt-br/containerization/) em ambientes dinâmicos. 
É executado através de um Orquestrador de Contêiners ([Kubernetes](/kubernetes) na maioria dos casos). Plataformas que possibilitam e facilitam a implantação controlada de multiplos aplicativos,  o seu [escalonamento](/pt-br/scalability/) automatizado, a recuperação automática em caso de falha e monitoramento.
A utilização do termo Orquestração serve neste contexto como metáfora para descrever o papel deste tipo de ferramenta na condução dos varios elementos, normalmente de natureza distribuída, como se fosse um verdadeiro maestro, onde cada contêiner se comporta como um músico da orquestra. 

## Problema relacionado

A gestão em escala de [microserviços](/pt-br/microservices) e em geral de qualquer outro [sistema distribuído](/pt-br/distributed-systems), incluindo segurança e comunicação de rede, é algo muito difícil, senão impossível, de se fazer manualmente. As plataformas de orquestração de contêiners possibilitam a automatização deste tipo de tarefa de administração.

## Como isso ajuda

Plataformas e respectivas ferramentas de orquestração de contêiners, são eminentemente declarativas. Isto é, permitem declarar o estado desejável do sistema, como por exemplo o número de contêineres, a quantidade de réplicas de um determinado pod, etc. 
Com base nesta declaração, a plataforma ou ferramenta de orquestração de contêiners vai automaticamente controlar e monitorar qualquer desvio do estado actual contra a declaração inicialmente manifesta, e por exemplo, provisionar um novo pod ou contêiner em caso de uma falha grave ou irrecuperável. 
Este tipo de automatização simplifica o desafio diário com que as equipes de engenharia se deparam ao fazer com que tarefas que exigem muito esforço e que são complexas, tais como provisionamento, implantação, escalabilidade vertical e horizontal, rede e comunicação, balanceamento de carga, etc, possam ser executadas mais facilmente e com menor incidência de erros de origem humana, aumentando assim a eficiência geral dos processos de administração de sistemas.  
