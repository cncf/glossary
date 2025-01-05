---
title: Architecture client-serveur
status: Completed
category: technology
tags: ["architecture", "fondamental", ""]
---
Dans une architecture client-serveur, la logique (ou le code) qui constitue une application est séparée en deux composants minimum :
- un client qui demande que le travail soit effectué (par exemple, l'application web Gmail exécutée dans votre navigateur web)
- un ou plusieurs serveurs qui satisfont cette demande (par exemple, le service "Envoyer un courrier électronique" exécuté sur les ordinateurs de Google dans le Cloud).

Dans cet exemple, les courriels sortants que vous écrivez sont envoyés par le client (application web exécutée dans votre navigateur web) à un serveur (les ordinateurs de Gmail, qui transfèrent vos courriels sortants à leurs destinataires).

Cette approche diffère de celle des applications autonomes (telles que les applications de bureau) qui effectuent tout le travail en un seul endroit.
Par exemple, un programme de traitement de texte comme Microsoft Word peut être installé et exécuté entièrement sur votre ordinateur.

## Problème auquel cela répond

Une architecture client-serveur résout un problème majeur posé par les applications autonomes : les mises à jour régulières.
Dans une application autonome, pour chaque mise à jour, les utilisateurs devraient télécharger et installer la dernière version.
Imaginez que vous deviez télécharger tout le catalogue de produits d'Amazon sur votre propre ordinateur avant de pouvoir le parcourir !

## Quelle en est l’utilité

En mettant en œuvre la logique de l'application dans un serveur ou un service distant,
les opérateurs peuvent mettre l'application à jour sans avoir à modifier la logique côté client.
Cela signifie que les mises à jour peuvent être effectuées beaucoup plus fréquemment.
Le stockage des données sur le serveur permet à de nombreux clients de voir et de partager les mêmes données.
Considérez la différence entre l'utilisation d'un traitement de texte en ligne et celle d'un traitement de texte traditionnel hors ligne.
Dans le premier cas, vos fichiers existent sur le serveur et
peuvent être partagés avec d'autres utilisateurs qui les téléchargent simplement à partir du serveur.
Dans l'ancien monde, les fichiers devaient être copiés sur des supports amovibles (disquettes !) et partagés avec des individus.
