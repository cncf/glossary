---
title: Extensibilité (Scalabilité)
status: Completed
category: property
tags: ["fundamentals", "", ""]
---

L'extensibilité (ou scalabilité) correspond à la capacité d'un système à s'agrandir.
C'est à dire augmenter la capacité d'un système à faire ce qu'il est supposé faire.
Par exemple, un [cluster](/cluster/) [Kubernetes](/kubernetes/) change d'echelle en augmentant
ou en réduisant le nombre d'applications [contenerisées](/containerization/),
mais cette scalabilité dépend de plusieurs facteurs.
Combien de [nodes](/nodes/) possède-t-il, combien de [conteneurs](/container/) peut gérer chaque noeud,
et combien d'enregistrements et d'opérations le plan de contrôle (control plane) peut-il supporter ?

Un système extensible permet de rajouter simplement plus de capacité.
On différencie deux types d'extension.
D'un coté, il y a l'[extensibilité horizontale](/horizontal-scaling/) qui ajoute des noeuds pour supporter l'augmentation de charge.
A l'opposé, il y a l'[extensibilité verticale](/vertical-scaling/) où les nodes individuelles sont rendues plus performantes pour permettre plus de transactions
(i.e. en ajoutant plus de mémoire ou de CPU à une machine individuelle).
Un système extensible est capable de changer facilement pour satisfaire les besoins des utilisateurs.
