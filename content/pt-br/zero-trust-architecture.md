---
title: Arquitetura de Confiança Zero
status: Completed
category: conceito
tags: ["segurança", "", ""]
---

A arquitetura de confiança zero (do inglês "Zero trust architecture") prescreve uma abordagem para o projeto e implementação de sistemas de TI onde a confiança é completamente removida. O princípio central é "nunca confie, sempre verifique", dispositivos ou sistemas em si, enquanto se comunicam com outros componentes de um sistema, sempre se verificam antes de fazê-lo. Atualmente, em muitas redes, dentro da rede corporativa, os sistemas e dispositivos internos podem se comunicar livremente uns com os outros, pois estão dentro do perímetro confiável da rede corporativa. A arquitetura de confiança zero adota a abordagem oposta, que, embora dentro do perímetro da rede, os componentes dentro do sistema primeiro precisam passar pela verificação antes que qualquer comunicação seja feita.

## Problema relacionado

Com a abordagem tradicional baseada em confiança, onde sistemas e dispositivos que existem dentro de um perímetro de rede corporativa, a suposição é que, como há confiança, não há problema. No entanto, a arquitetura de confiança zero reconhece que a confiança é uma vulnerabilidade. No caso de um invasor ter obtido acesso a um dispositivo confiável, dependendo do nível de confiança e acesso que foi dado a esse dispositivo, o sistema agora está vulnerável a ataques, pois o invasor está dentro do perímetro "confiável" de rede e é capaz de se mover lateralmente por todo o sistema. Em uma arquitetura de confiança zero, a confiança é removida, portanto, reduzindo a superfície de ataque força o invasor a verificar antes de ir mais longe em todo o sistema.

## Como isso ajuda

Adotar uma arquitetura de confiança zero traz o principal benefício do aumento da segurança com uma redução na superfície de ataque. Remover a confiança do seu sistema corporativo aumenta o número e a força das barreiras de segurança pelos quais um invasor precisa passar para obter acesso a outras áreas do sistema.
