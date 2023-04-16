---
title: Capacité de mise à l'échelle (Scalabilité)
status: Completed
category: property
tags: ["fundamentals", "", ""]
---

La capacité de mise à l'échelle (ou scalabilité) correspond à la capacité d'un système à s'agrandir.
C'est à dire à augmenter la capacité d'un système à faire ce qu'il est supposé faire.
Par exemple, un [cluster](/cluster/) [Kubernetes](/kubernetes/) change d'echelle en augmentant
ou en réduisant le nombre d'applications [conteneurisées](/containerization/),
mais cette scalabilité dépend de plusieurs facteurs.
Combien de [nœuds](/nodes/) possède-t-il, combien de [conteneurs](/container/) peut gérer chaque nœud,
et combien d'enregistrements et d'opérations le plan de contrôle (control plane) peut-il supporter ?

Un système extensible permet de rajouter simplement plus de capacité.
On différencie deux types d'extension.
D'un coté, il y a la [mise à l'échelle horizontale](/horizontal-scaling/) qui ajoute des nœuds pour supporter l'augmentation de charge.
À l'opposé, il y a la [mise à l'échelle verticale](/vertical-scaling/) où les nœuds individuels sont rendus plus performants pour permettre plus de transactions
(i.e. en ajoutant plus de mémoire ou de CPU à une machine individuelle).
Un système extensible est capable de changer facilement pour satisfaire les besoins des utilisateurs.
