---
title: Arquitetura Fortemente Acoplada
status: completo
category: propriedade
tags: ["fundamento", "arquitetura", "propriedade"]
---

Arquitetura fortemente acoplada é um estilo arquitetural em que vários componentes da aplicação são interdependentes (o paradigma oposto de [arquiteturas desacopladas](/loosely-coupled-architecture/)).
Isso significa que uma mudança em um componente provavelmente afetará outros componentes.
Geralmente é mais fácil de implementar do que estilos de arquitetura mais desacoplada, mas pode deixar um sistema mais vulnerável a falhas em cascata.
Esse estilo de arquitetura também tende a exigir implantações coordenadas de componentes, o que pode se tornar um obstáculo para a produtividade do desenvolvedor.

Arquiteturas fortemente acopladas são uma maneira bastante tradicional de criar aplicações.
Embora não sejam necessariamente consistentes com todas as melhores práticas de desenvolvimento de [microsserviços](/pt-br/microservices-architecture/), elas podem ser úteis em circunstâncias específicas.
Elas tendem a ser mais rápidas e simples de implementar e, assim como [aplicações monolíticas](/pt-br/monolithic-apps/), elas podem acelerar o ciclo inicial de desenvolvimento.
