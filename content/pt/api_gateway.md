---
title: API Gateway
status: Completed
category: technology
---

## O que é

Um [API](/application_programming_interface/) gateway é uma ferramenta que gerencia as requisições que chegam até ele e distribui entre as APIs que foram adicionadas nele, tornando-as disponíveis em um só lugar. Ele permite que configurações importantes, como autenticação e autorização ou limitação do número de solicitações entre aplicativos (rate limit), de forma centralizada e totalmente gerenciado. Um API gateway funciona como uma interface comum para quem consome as APIs (geralmente APIs expostas).

## Qual problema é resolvido

Se você estiver disponibilizando APIs para consumidores externos, precisará de um ponto de entrada para gerenciar e controlar todo o acesso. Além disso, se você precisar aplicar funcionalidades nessas interações, um API gateway permite aplicá-las uniformemente a todo o tráfego sem exigir alterações no código do aplicativo, ou apenas na rota desejada.

## No que isso ajuda

Fornecendo um único ponto de acesso para várias APIs em um aplicativo, os API gateways tornam mais fáceis as configurações/aplicações das lógicas de negócios ou da segurança das APIs (cross-cutting, rate-limit). Eles também permitem que os consumidores de aplicativos acessem um único endereço todas as APIs. Um API gateway pode simplificar questões operacionais, como segurança e [observabilidade](/observability/), fornecendo um único ponto de acesso para solicitações a todos os serviços da Web em um sistema. À medida que todas as solicitações chegam/passam pelo API gateway, ele apresenta um único local para adicionar funcionalidades como coleta de métricas, limitação de taxa (rate-limit) e autorização.

