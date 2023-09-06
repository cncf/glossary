---
title: Mise à l'échelle automatique (Autoscaling)
status: Completed
category: property
tags: ["infrastructure", "", ""]
---

La mise à l'échelle automatique (ou autoscaling) est la capacité d'un système à s'adapter automatiquement (voir [capacité de mise à l'échelle](/fr/scalability/)), généralement, en termes de ressources informatiques.
Avec un système permettant une mise à l'échelle automatique, les ressources sont automatiquement ajoutées en cas de besoin et peuvent être ajustées pour répondre aux demandes fluctuantes des utilisateurs.
Le processus de mise à l'échelle automatique varie et peut être configuré pour s'adapter à différentes métriques, telles que la mémoire ou le temps de traitement.
Les services cloud gérés sont couramment associés à cette fonctionnalité de mise à l'échelle automatique, car il y existe plus d'options et de mises en œuvre disponibles que dans la plupart des déploiements sur site.

Auparavant, l'infrastructure et les applications étaient conçues en tenant compte de l'utilisation maximale du système.
Cette architecture signifiait que beaucoup de ressources étaient sous-utilisées et inélastiques face à l'évolution de la demande des consommateurs.
L'inélasticité entraînait des coûts plus élevés pour l'organisation et des pertes d'activité causées par les pannes dues à une demande excessive.

En exploitant le cloud, la [virtualisation](/fr/virtualization/) et la [conteneurisation](/fr/containerization/) des applications et leurs dépendances,
les organisations peuvent développer des applications qui se mettent à l'échelle selon les demandes des utilisateurs.
Elles peuvent surveiller les applications et les mettre à l'échelle automatiquement, offrant ainsi une expérience utilisateur optimale.
Prenons l'exemple de l'augmentation du nombre de spectateurs que Netflix connaît chaque vendredi soir.
La mise à l'échelle automatique signifie ajouter dynamiquement plus de ressources: par exemple,
en augmentant le nombre de serveurs permettant une diffusion de plus de vidéos et en réduisant l'échelle une fois la consommation revenue a la normale.

## Termes liés

* [Mise à l'échelle horizontale (Horizontal Scaling)](/fr/horizontal-scaling/)
* [Mise à l'échelle verticale (Vertical Scaling)](/fr/vertical-scaling/)
