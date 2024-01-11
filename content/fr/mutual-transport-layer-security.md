---
title: Sécurité mutuelle de la couche de transport (mTLS)
status: Completed
category: Concept
tags: ["sécurité", "réseau", ""]
---

Le TLS mutuel (mTLS, mutual TLS en anglais) est une technique utilisée pour authentifier et chiffrer les messages envoyés entre deux [services](/fr/service/). 
Le TLS mutuel est le protocole standard de la [sécurité de la couche de transport](/fr/transport-layer-security/), mais 
au lieu de valider l'identité d'une seule connexion, les deux parties sont validées.

## Problème auquel il répond

Les [microservices](/fr/microservices-architecture/) communiquent sur un réseau et, 
tout comme sur votre réseau wifi, les communications qui transitent par ce réseau peuvent être piratées. 
Le mTLS garantit qu'aucune partie non autorisée ne peut écouter ou usurper des requêtes légitimes.

## Quel en est l'utilité

mTLS garantit que le trafic est sécurisé et digne de confiance dans les deux sens entre un client et un serveur, 
Il fournit une couche de sécurité supplémentaire aux utilisateurs qui se connectent à un réseau ou à des applications. 
Il vérifie également les connexions avec les appareils clients qui ne suivent pas de processus de connexion, tels que les appareils de l'Internet des objets (IoT). 
Les attaques telles que les attaques par tiers interposé (ou on-path attack en anglais), les attaques par usurpation d'identité, le bourrage de données d'identification, les attaques par force brute, etc. peuvent être évitées grâce au mTLS.
