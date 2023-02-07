---
title: "camada de segurança de transporte mútuo"
status: Completed
---


O que é isso

TLS mútuo (mTLS) é uma técnica usada para autenticar e criptografar mensagens enviadas entre dois serviços.
O TLS mútuo é o protocolo TLS (Transport Layer Security) padrão,mas, em vez de validar a identidade de apenas
uma conexão, ambos os lados são validados.

Problema que resolve

Os microsserviços se comunicam por uma rede e, assim como sua rede wi-fi, a comunicação em trânsito nessa rede pode
ser invadida. O mTLS garante que nenhuma parte não autorizada possa ouvir ou representar solicitações legítimas.


Como isso ajuda

O mTLS garante que o tráfego seja seguro e confiável em ambas as direções entre um cliente e um servidor, fornecendo
uma camada adicional de segurança para usuários que fazem login em uma rede ou aplicativos. Ele também verifica conexões
com dispositivos clientes que não seguem um processo de login, como dispositivos Internet das Coisas (IoT). Ataques como 
ataques no caminho, ataques de falsificação, preenchimento de credenciais, ataques de força bruta etc. podem ser evitados
pelo mTLS.
