---
título: Orquestração de contêineres
estado: Concluído
categoria: Conceito
---

## O que é isso

A orquestração de [Container](/container/) refere-se ao gerenciamento e à automatização do ciclo de vida de aplicativos em contêineres em ambientes dinâmicos.
Ele é executado por meio de um orquestrador de contêineres (na maioria dos casos, [Kubernetes](/kubernetes)), que permite implantações, escalonamento (automático), recuperação automática e monitoramento.
A orquestração é uma metáfora:
A ferramenta de orquestração conduz contêineres como um maestro musical, garantindo que cada contêiner (ou músico) faça o que deveria.

## Problema que ele aborda

Gerenciar [microsserviços](/microservices), segurança e comunicação de rede em escala — e [sistemas distribuídos](/sistemas distribuídos) em geral — é difícil, se não impossível, de gerenciar manualmente.
A orquestração de contêineres permite que os usuários automatizem todas essas tarefas de gerenciamento.

## Como isso ajuda

As ferramentas de orquestração de contêineres permitem que os usuários determinem o estado de um sistema.
Primeiro, eles declaram como deveria ser a aparência (por exemplo, x contêineres, y pods, etc.).
A ferramenta de orquestração monitorará automaticamente a infraestrutura e a corrigirá se seu estado se desviar do declarado (por exemplo, ativar um novo contêiner se um deles travar).
Essa automação simplifica muitas das tarefas operacionais altamente manuais e complexas das equipes de engenharia, incluindo provisionamento, implantação, escalabilidade (aumento e redução), rede, balanceamento de carga e outras atividades.
