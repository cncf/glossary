---
title: Microsserviços
status: Completed
category: conceito
tags: ["arquitetura", "", ""]
---

Os microsserviços têm uma abordagem moderna para o desenvolvimento de aplicações que aproveita as tecnologias nativas da nuvem.
Embora as aplicações modernas, como a Netflix, pareçam ser uma única aplicação, elas são na verdade uma coleção de serviços menores - todos trabalhando em colaboração.
Por exemplo, uma única página que permite acessar, pesquisar e visualizar vídeos provavelmente é alimentada por serviços menores que lidam com um aspecto (por exemplo, pesquisa, autenticação e execução de visualizações no seu navegador).
Em resumo, os microsserviços referem-se a um padrão de arquitetura de aplicações geralmente contrária as [aplicações monolíticas](/pt-br/monolithic-apps/).

## Problema relacionado

Os microsserviços são uma resposta aos desafios colocados por aplicações monolíticas.
Geralmente, diferentes partes de uma aplicação precisarão ser dimensionadas separadamente.
Por exemplo, uma loja online terá mais visualizações de produtos do que a finalização da compra.
Isso significa que você precisará de mais cópias da funcionalidade de visualização do produto em execução do que a conclusão da compra.
Em uma aplicação monolítica, essa lógica não pode ser implantada individualmente.
Se você não conseguir dimensionar a funcionalidade do produto individualmente, terá que duplicar toda a aplicação com todos os outros componentes que não precisa - um uso ineficiente de recursos.
As aplicações monolíticas também tornam mais fácil para os desenvolvedores sucumbirem às armadilhas do projeto.
Como todo o código está em um só lugar, é mais fácil tornar esse [código bem acoplado](/pt-br/tightly-coupled-architecture/) e mais difícil de impor o princípio da separação de responsabilidades.
Os monólitos geralmente exigem que os desenvolvedores entendam toda a base de código antes que possam ser produtivos.

## Como isso ajuda

Separar a funcionalidade em diferentes microsserviços facilita a implantação, atualização e escala de forma independente.
Ao permitir que diferentes equipes se concentrem em sua própria e pequena parte de uma aplicação maior, você também torna mais fácil para elas trabalharem em suas aplicações sem afetar negativamente o resto da organização.
Embora os microsserviços resolvam muitos problemas, eles também criam sobrecarga operacional — as coisas que você precisa para implantar e acompanhar têm um aumento na ordem de grandeza ou mais.
Muitas [tecnologias nativas da nuvem](/pt-br/cloud-native-tech/) visam tornar os microsserviços mais fáceis de implantar e gerenciar.
