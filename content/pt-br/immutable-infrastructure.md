---
title: Infraestrutura Imutável
status: Completed
category: property
tags: ["infraestrutura", "propriedade", "infraestrutura-como-codigo"]
---

Infraestrutura Imutável refere-se à infraestrutura de computadores
([máquinas virtuais](/pt-br/virtual-machine/), [contêineres](/pt-br/container/), dispositivos de rede)
que não pode ser alterada uma vez implantada.
Isso pode ser garantido por meio de um processo automatizado que sobrescreve alterações não autorizadas ou 
por meio de um sistema que não permite alterações na implantação original. 
Os contêineres são um bom exemplo de infraestrutura imutável 
porque alterações persistentes nos contêineres só podem ser feitas 
criando-se uma nova versão do contêiner ou recriando o contêiner existente a partir de sua imagem.

Ao prevenir ou identificar modificações não autorizadas, 
infraestruturas imutáveis tornam mais fácil identificar e mitigar riscos de segurança. 
Operar um sistema assim se torna muito mais simples 
uma vez que os administradores podem tirar conclusões sobre ele. 
Além do mais, eles sabem que ninguém cometeu erros ou modificações que esqueceram de comunicar. 
Infraestrutura imutável está intimamente ligada à [infraestrutura como código](/pt-br/infrastructure-as-code/), 
onde toda a automação necessária para criar infraestrutura é armazenada em controle de versão (por exemplo, Git). 
Essa combinação de imutabilidade e controle de versão significa que 
há um log de auditoria durável para cada alteração autorizada de um sistema.
