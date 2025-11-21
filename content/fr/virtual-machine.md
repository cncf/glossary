---
title: Machine virtuelle
status: Completed
category: Technology
tags: ["fondamental", "infrastructure", ""]
---

Une machine virtuelle (VM) est un ordinateur et son système d'exploitation
qui n'est pas lié à un matériel particulier.
Les VMs s'appuient sur la [virtualisation](/fr/virtualization/) pour découper un unique ordinateur physique en plusieurs ordinateurs virtuels.
Cette séparation permet aux entités et aux fournisseurs d'infrastructure de
facilement créer et détruire des VMs sans impacter l'infrastructure sous-jacente.

## Problème auquel il répond

Les machines virtuelles tirent parti de la virtualisation.
Lorsqu'une [machine physique](/fr/bare-metal-machine/) est liée à un unique système d'exploitation,
la manière donc les ressources peuvent être utilisées est en quelque sorte limitée.
De plus, lorsqu'un système d'exploitation est lié à une unique machine physique,
sa disponibilité est directement liée à ce matériel.
Si la machine physique est indisponible à cause d'une maintenance ou d'un problème matériel, le système d'exploitation l'est également.

## Quelle en est l'utilité

En supprimant la relation directe entre un système d'exploitation et la machine physique unique,
vous résolvez plusieurs problèmes des machines physiques:
temps de provisionning, utilisation du matériel et résiliance.

Sans avoir besoin d'acheter, d'installer ou du configurer du nouveau matériel, le temps de provisionning d'un nouvel ordinateur est considérablement amélioré.
Les VMs vous permettent de mieux utiliser vos ressources matérielles existantes
en plaçant plusieurs machines virtuelles sur une seule machine physique.
N'étant pas lié à une machine physique particulière, les VMs sont également plus
résiliantes que les machines physiques.
Lorsqu'une machine physique a besoin d'être indisponible,
les VMs qui sont éxécutées dessus sont déplacées sur une autre machine avec peu
ou pas d'indisponibilité.
