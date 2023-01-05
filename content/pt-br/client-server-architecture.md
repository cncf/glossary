---
title: Arquitetura Cliente Servidor
status: Completed
category: conceito
tags: ["arquitetura", "fundamento", ""]
---

## O que é

Em uma arquitetura cliente-servidor (client-server), a lógica (ou código) que compõe uma aplicação é dividida entre dois ou mais componentes: O Cliente, que solicita uma função a ser executada (por exemplo, o site do Gmail sendo executado no seu navegador) e um ou mais servidores que atendam essa requisição (por exemplo, o serviço "enviar-email" executado nos computadores do Google na nuvem). Neste exemplo, os e-mails que você escreve são enviandos pelo cliente (aplicação web sendo executada no seu navegador) para o servidor (computadores do Gmail, que encaminham seus e-mails para os destinatários).
Isso contrasta com aplicativos independentes (como aplicativos de desktop) que fazem todo o trabalho em um só lugar. Por exemplo, um programa de processamento de texto como o Microsoft Word pode ser instalado e executado inteiramente em seu computador.

## Problema relacionado

Uma arquitetura cliente-servidor resolve um grande desafio que os aplicativos independentes representam: atualizações regulares. Em um aplicativo independente, para cada atualização, os usuários teriam que baixar e instalar a versão mais recente. Imagine ter que baixar todo o catálogo de produtos da Amazon para o seu próprio computador antes de poder navegar!

## Como isso ajuda

Ao implementar a lógica do aplicativo em um servidor ou serviço remoto, os operadores podem atualizar isso sem precisar alterar a lógica no lado do cliente. Isso significa que as atualizações podem ser feitas com muito mais frequência. Armazenar dados no servidor permite que muitos clientes vejam e compartilhem os mesmos dados. Considere a diferença entre usar um processador de texto online, comparado a um processador de texto offline tradicional. No primeiro, seus arquivos existem no lado do servidor e podem ser compartilhados com outros usuários que simplesmente os baixam do servidor. No mundo legado, os arquivos precisavam ser copiados para mídia removível (disquetes!) e compartilhados com indivíduos.
