---
title: Mutual Transport Layer Security (mTLS)
status: Completed
category: Concept
tags: ["sécurité", "réseau", ""]
---

## Ce que c'est

Le TLS mutuel (mTLS) est une technique utilisée pour authentifier et chiffrer les messages envoyés entre deux [services](/fr/service/). 
Le TLS mutuel est le protocole [Transport Layer Security](/fr/transport-layer-security/) (TLS) standard mais, 
au lieu de valider l'identité d'une seule connexion, les deux parties sont validées.

## Problème auquel il répond

Les [Microservices] (/fr/microservices/) communiquent sur un réseau et, 
tout comme sur votre réseau wifi, les communications qui transitent par ce réseau peuvent être piratées. 
Le mTLS garantit qu'aucune partie non autorisée ne peut écouter les requêtes légitimes ou se faire passer pour elles.

## Quel en est l'utilité

mTLS garantit que le trafic est sécurisé et fiable dans les deux sens entre un client et un serveur, 
Il fournit une couche de sécurité supplémentaire aux utilisateurs qui se connectent à un réseau ou à des applications. 
Il vérifie également les connexions avec les appareils clients qui ne suivent pas de processus de connexion, tels que les appareils de l'internet des objets (IoT). 
Les attaques telles que les attaques par tiers interposé (on-path), les attaques par usurpation d'identité, le bourrage de données d'identification, les attaques par force brute, etc. peuvent être évitées grâce au mTLS.