---
title: WebAssembly
status: Completed
category: Conceito
tags: ["Aplicação", "", ""]
---

WebAssembly (frequentemente abreviado como Wasm) é um formato de instrução binária projetado como um alvo portátil para compilar linguagens de alto nível como C, C++, Rust e outras. Ele permite a implantação na web para aplicações do lado do cliente e do lado do servidor. 

É um formato de bytecode de baixo nível que pode ser executado em uma máquina virtual, normalmente integrada em navegadores web. Embora inicialmente desenvolvido para a web, WebAssembly é um Runtime Universal e vê aplicações em ambientes não-web como IoT e dispositivos de borda.


## Problema que ele resolve

Por muitos anos, a pilha LAMP (Linux Apache MySQL PHP) foi o modelo para aplicações baseadas na web. Mais tarde, Javascript se tornou o rei do desenvolvimento de aplicações front-end e aplicações baseadas em node.js se tornaram a norma. À medida que a tecnologia em torno da web evoluiu, ela favoreceu fortemente as linguagens interpretadas, que são tipicamente menos performáticas do que as linguagens compiladas, mesmo com avanços tecnológicos. Embora o JavaScript tenha melhorado ao longo dos anos, ele ainda enfrenta limitações de desempenho ao executar tarefas computacionalmente intensivas. Linguagens interpretadas que são compiladas em tempo de execução frequentemente apresentam problemas de desempenho e funcionalidade, pois o código é executado em diferentes ambientes. Por outro lado, binários compilados normalmente são executados da mesma forma, desde que tenham sido compilados corretamente. No entanto, historicamente, um binário compilado tem sido menos adequado para o ambiente web.

## Como ele ajuda

WebAssembly fornece um formato binário de baixo nível que pode ser executado em velocidades quase nativas, permitindo que aplicações web realizem computações complexas de forma eficiente. Ele permite que desenvolvedores construam aplicações web aproveitando suas habilidades existentes em linguagens como C, C++, Rust e outras. Isso abre novas possibilidades e permite que os desenvolvedores reutilizem bases de código e bibliotecas existentes. Além disso, os módulos WebAssembly podem ser executados de forma consistente em diferentes navegadores, sistemas operacionais e dispositivos, reduzindo a necessidade de código específico da plataforma. No geral, o WebAssembly aborda limitações de desempenho, restrições de linguagem, portabilidade de código, preocupações de segurança, tamanho do código e problemas de tempo de carregamento, fornecendo um ambiente mais robusto e flexível para o desenvolvimento de aplicações web.
