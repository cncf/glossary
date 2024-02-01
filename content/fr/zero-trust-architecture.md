---
title: Architecture Zéro Confiance
status: Completed
category: Concept
tags: ["sécurité", "", ""]
---

L'architecture zéro confiance est une approche de conception et de mise en place des systèmes informatiques qui élimine complètement la notion de confiance. 
Son principe fondamental repose sur le credo "ne jamais faire confiance, toujours vérifier", les dispositifs ou systèmes eux-mêmes, 
lorsqu'ils communiquent avec d'autres composants d'un système, se vérifient toujours avant de communiquer. 
Dans de nombreux réseaux actuels, au sein du réseau d'entreprise, les systèmes et les appareils communiquent librement entre eux, 
car ils se trouvent à l'intérieur de la zone de confiance définie par le périmètre du réseau d'entreprise. 
À l'inverse, l'architecture zéro confiance adopte une démarche contraire. 
Même à l'intérieur du périmètre du réseau, les composants du système doivent d'abord se soumettre à une vérification avant toute communication.

## Problème auquel il répond

Avec l'approche traditionnelle basée sur la confiance avec laquelle les systèmes et les dispositifs existent à l'intérieur d'un périmètre du réseau d'entreprise, 
l'hypothèse est que parce qu'il y a confiance, il n'y a aucun problème.
Cependant, l'architecture zéro confiance reconnaît que cette confiance peut constituer une vulnérabilité. 
Si un attaquant parvient à accéder à un appareil de confiance, la vulnérabilité du système dépend du niveau de confiance et d'accès accordé à cet appareil. 
L'attaquant se trouve alors à l'intérieur du périmètre "de confiance" du réseau et peut se déplacer librement dans l'ensemble du système. 
Dans une architecture zéro confiance, la confiance est éliminée, réduisant ainsi la surface d'attaque, 
car un attaquant est contraint de se soumettre à une vérification avant de pouvoir progresser dans le système.

## Quel en est l'utilité

L'adoption d'une architecture zéro confiance présente le principal avantage d'augmenter la sécurité tout en réduisant la surface d'attaque. 
En éliminant la notion de confiance de votre système d'entreprise, 
vous renforcez le nombre et la robustesse des portes de sécurité que l'attaquant doit franchir pour accéder à d'autres parties du système.
