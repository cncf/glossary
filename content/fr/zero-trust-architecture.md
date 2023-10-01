---
title: Architecture Zéro Confiance
status: Completed
category: concepts
tags: ["sécurité", "", ""]
---

## Ce que c'est

L'architecture zéro confiance est une approche de conception et de mise en place des systèmes informatiques qui élimine complètement la notion de confiance. 
Son principe fondamental repose sur le credo "ne jamais faire confiance, toujours vérifier". 
Dans de nombreux réseaux actuels, au sein du réseau d'entreprise, les systèmes et les appareils communiquent librement entre eux, 
car ils se trouvent à l'intérieur de la zone de confiance définie par la périphérie du réseau d'entreprise. 
À l'inverse, l'architecture zéro confiance adopte une démarche contraire. 
Même à l'intérieur de la périphérie du réseau, les composants du système doivent d'abord se soumettre à une vérification avant toute communication.

## Problème auquel il répond

Avec l'approche traditionnelle basée sur la confiance, on part du principe qu'il n'y a pas de problème tant que les systèmes et les appareils se trouvent à l'intérieur de la périphérie du réseau d'entreprise. 
Cependant, l'architecture zéro confiance reconnaît que cette confiance peut constituer une vulnérabilité. 
Si un attaquant parvient à accéder à un appareil de confiance, la vulnérabilité du système dépend du niveau de confiance et d'accès accordé à cet appareil. 
L'attaquant se trouve alors à l'intérieur de la périphérie "de confiance" du réseau et peut se déplacer librement dans l'ensemble du système. 
Dans une architecture zéro confiance, la confiance est éliminée, réduisant ainsi la surface d'attaque, 
car un attaquant est contraint de se soumettre à une vérification avant de pouvoir progresser dans le système.

## Quel en est l'utilité

L'adoption d'une architecture zéro confiance présente le principal avantage d'augmenter la sécurité tout en réduisant la surface d'attaque. 
En éliminant la notion de confiance de votre système d'entreprise, 
vous renforcez le nombre et la robustesse des portes de sécurité que l'attaquant doit franchir pour accéder à d'autres parties du système.