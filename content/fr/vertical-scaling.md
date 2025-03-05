---
title: Mise à l'échelle verticale (vertical scaling)
status: Completed
category: Concept
tags: ["infrastructure", "", ""]
---

La mise à l'échelle verticale, également connue sous le nom de "mise à l'échelle vers le haut et vers le bas", est une technique qui consiste à augmenter la capacité d'un système en ajoutant des processeurs et de la mémoire à chaque [nœud](/fr/nodes/) unitaire à mesure que la charge de travail augmente.
Supposons que vous avez un ordinateur avec 4 Go de mémoire et que vous voulez augmenter sa capacité à 16 Go, la mise à l'échelle verticale consiste à passer à un système avec 16 Go de mémoire. (Veuillez vous référer à la [mise à l'échelle horizontale](/fr/horizontal-scaling/) pour une approche différente de mise à l'échelle.)

## Problème auquel il répond

Lorsque la demande d'une application dépasse la capacité actuelle de l'instance de cette application, nous devons trouver un moyen de [mettre à l'échelle](/fr/scalability/) le système (ajouter de la capacité au système).
Nous pouvons soit ajouter plus de ressources informatiques aux nœuds existants (mise à l'échelle verticale), soit ajouter plus de nœuds au système (mise à l'échelle horizontale).
La [capacité de mise à l'échelle](/fr/scalability/) contribue à la compétitivité, à l'efficacité, à la réputation et à la qualité.

## Quelle en est l'utilité

La mise à l'échelle verticale vous permet de redimensionner votre serveur sans modifier le code de l'application.
Cela contraste avec la mise à l'échelle horizontale, où l'application doit être réplicable pour être mise à l'échelle, ce qui peut nécessiter des mises à jour du code.
La mise à l'échelle verticale augmente la capacité d'une application existante en ajoutant des ressources informatiques, ce qui permet à l'application de traiter davantage de requêtes et d'effectuer davantage de travail simultanément.

## Termes liés

* [Mise à l'échelle horizontale (Horizontal Scaling)](/fr/horizontal-scaling/)
* [Mise à l'échelle automatique (Auto Scaling)](/fr/auto-scaling/)
