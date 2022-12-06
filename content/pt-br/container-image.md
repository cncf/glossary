---
title: Imagem de Contêiner
status: Feedback Appreciated
category: conceito
tags: ["", "", ""]
---

Uma imagem de contêiner é um arquivo estático imutável que contém as dependências para a criação de um contêiner. Essas dependências podem incluir um único arquivo binário executável, bibliotecas do sistema, ferramentas do sistema, variáveis de ambiente e outras configurações necessárias da plataforma. As imagens do contêiner resultam do encapsulamento de um aplicativo e geralmente são armazenadas em repositório de imagens, onde podem ser baixadas e executadas como um processo isolado usando um Container Runtime Interface (CRI). Uma estrutura de imagem de um contêiner deve seguir o esquema padrão definido pela Open Container Initiative (OCI).

Tradicionalmente, os servidores de aplicativos são configurados por ambiente e os aplicativos são implantados neles. Qualquer configuração incorreta entre ambientes é problemática e geralmente leva a um tempo de inatividade ou implantações com falha. O ambiente de um aplicativo precisa ser replicável e bem definido; caso contrário, a chance de erros relacionados ao ambiente aumenta. Quando os ambientes de aplicativos são indefinidos ou imprecisos, o dimensionamento horizontal e vertical dos aplicativos se torna desafiador.

A imagem de um contêiner agrupa um aplicativo com suas dependências, como um servidor de aplicativos. Isso fornece consistência em todos os ambientes, incluindo a máquina de um desenvolvedor. A imagem de um contêiner podem ser usadas para instanciar quantos contêineres forem necessários, permitindo maior escalabilidade.
