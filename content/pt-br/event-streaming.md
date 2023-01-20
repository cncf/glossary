---
title: Streaming de Eventos
status: Completed
category: conceito
---

## O que é

O streaming de eventos é uma abordagem em que o software envia dados de eventos de uma aplicação para outra para comunicar continuamente o que eles estão fazendo.
Imagine um serviço transmitindo tudo o que faz para todos os outros serviços.
Cada atividade realizada por um serviço é referida como um evento, portanto, streaming de evento.
Por exemplo, a NASDAQ obtém atualizações sobre preços de ações e commodities a cada segundo.
Se você tivesse um aplicação que monitorasse um conjunto específico de ações, gostaria de receber essas informações quase em tempo real.
O Yahoo! Finance fornece uma [API](/pt-br/application-programming-interface/) que extrai da NASDAQ e envia (ou transmite) as informações (ou eventos) de seu aplicativo para qualquer aplicativo que o assine.
Os dados enviados, bem como as alterações nesses dados (preços das ações), são os eventos, enquanto o processo de entregá-los a um aplicativo é o streaming de eventos.

## Problema relacionado

Tradicionalmente, o Yahoo! Finance usaria requisições únicas de TCP.
Isso seria muito ineficiente, pois exigiria a criação de uma conexão para cada evento.
À medida que os dados se tornam mais em tempo real por natureza, o dimensionamento dessa solução torna-se ineficiente.
Abrir uma conexão uma vez e permitir que os eventos fluam é ideal para coleta em tempo real.
A quantidade de dados gerados está crescendo exponencialmente e, com isso, o estado dos dados está em fluxo constante. Os desenvolvedores e usuários precisam poder ver esses dados quase em tempo real.

## Como isso ajuda

O streaming de eventos permite que os dados alterados sejam comunicados da fonte ao receptor.
Em vez de esperar que os serviços solicitem as informações, o serviço transmite continuamente todos os seus eventos (ou atividades).
Não está preocupado com o que acontece com a informação.
Ele apenas faz o que precisa fazer e o transmite, permanecendo assim completamente independente de qualquer outro serviço.
