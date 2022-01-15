---
title: Client-Server Architecture
status: Completed
category: concept
---

## O que é

Em uma arquitetura cliente-servidor (client-server), a lógica (ou código) que compõe uma aplicação é dividida entre dois ou mais componentes: O Cliente, ele solicita  uma função a ser executada (por exemplo, o site do Gmail sendo executado no seu navegador) e em um ou mais servidores que atendem essa requisição (por exemplo, o serviço "enviar-email" executado nos computadores do Google na nuvem).
Isso é diferente dos softwares legados que normalmente eram independentes (como softwares de desktop na década de 1990) e faziam todo o trabalho em um só lugar (no nosso exemplo, o e-mail é enviado pelos servidores da Google e não pelo seu computador). 

## Qual problema é resolvido 

Uma arquitetura cliente-servidor (client-server), resolve um grande desafio que as aplicações/softwares independentes representam: atualizações constantes e regulares. Em uma aplicação/software independente, para cada atualização, os usuários teriam que baixar e instalar a versão mais recente. Imagina você ter que baixar todo o catálogo de produtos da Amazon para o seu computador, antes de poder navegar no site!

## No que isso ajuda

Ao implementar o software/aplicação em um servidor remoto, os servidores podem atualizá-lo sem precisar alterar a logica no lado do cliente. Isso siginifica que as atualizações podem ser feitas com muito mais frequência. Armazenar dados no servidor permite que muitos clientes vejam e compartilhem os mesmos dados. Considere a diferença entre usar um editor de texto online, comparado a um editor de texto offline tradicional. No primeiro, seus arquivos existem no lado do servidor e podem ser compartilhado com outros usuários, onde o download é realizado automaticamente. No mundo legado, os arquivos precisavam ser copiados para algum dispositivo removível (disquetes, pen drives, cd's) e aí compartilhar com alguém.
