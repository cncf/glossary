---
título: Segurança da camada de transporte mútuo (mTLS)
estado: Concluído
categoria: Conceito
tags: ["segurança", "rede", ""]
---

## O que é isso

Mutual TLS (mTLS) é uma técnica usada para autenticar e criptografar mensagens enviadas entre dois [serviços](/service/).
Mutual TLS é o protocolo padrão [Transport Layer Security](/transport-layer-security/) (TLS), mas,
em vez de validar a identidade de apenas uma conexão, ambos os lados são validados.

## Problema que ele aborda

[Microserviços](/microservices/) comunicam-se através de uma rede e,
assim como sua rede wifi, a comunicação em trânsito nessa rede pode ser hackeada.
O mTLS garante que nenhuma parte não autorizada possa ouvir ou representar solicitações legítimas.

## Como isso ajuda

mTLS garante que o tráfego seja seguro e confiável em ambas as direções entre um cliente e um servidor,
fornecendo uma camada adicional de segurança para usuários que fazem login em uma rede ou aplicativos.
Ele também verifica conexões com dispositivos clientes que não seguem um processo de login, como dispositivos da Internet das Coisas (IoT).
Ataques como ataques no caminho, ataques de falsificação, preenchimento de credenciais, ataques de força bruta, etc. podem ser evitados pelo mTLS.
