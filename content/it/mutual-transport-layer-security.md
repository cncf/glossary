---
title: Mutual Transport Layer Security (mTLS)
status: Completed
category: Concetto
tags: ["sicurezza", "networking", ""]
---

## Cos'è

Il Mutual TLS (mTLS) è una tecnica utilizzata per autenticare e criptare i messaggi inviati tra due [servizi](/it/service/).
Il Mutual TLS è il protocollo [Transport Layer Security](/it/transport-layer-security/) (TLS) standard,
che permette la validazione dell'identità di entrambi gli estremi della connessione.


## Quali problematiche affronta

I [microservizi](/it/microservices/) comunicano tramite una rete e,
proprio come in una rete Wi-Fi domestica, le comunicazioni in transito su quella rete possono essere violate.
Il mTLS assicura che nessun soggetto non autorizzato possa mettersi in ascolto o impersonare richieste legittime.

## In che modo aiuta

Il mTLS garantisce che il traffico sia sicuro e affidabile in entrambe le direzioni tra un client e il server,fornendo un livello di sicurezza per gli utenti che accedono a una rete o a delle applicazioni.
Inoltre, verifica le connessioni con dispositivi client che non seguono un processo di accesso, come i dispositivi Internet of Things (IoT).

Gli attacchi come quelli on-path, spoofing, credential stuffing, brute force, ecc. possono essere prevenuti dal mTLS.
