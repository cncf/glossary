---
title: Contêineres
status: Completed
category: tecnologia
tags: ["aplicação", "fundamento", ""]
---

## O que é

Um contêiner é um processo em execução com restrições de recursos e capacidade gerenciadas pelo sistema operacional. Os arquivos disponíveis para o processo de contêiner são empacotados como uma imagem de contêiner. Os contêineres são executados um ao lado do outro na mesma máquina, mas normalmente o sistema operacional impede que os processos de contêiner separados interajam entre si.

## Problema relacionado

Antes da existência dos contêineres, eram necessárias máquinas separadas eram para executar os aplicativos. Cada máquina exigiria seu próprio sistema operacional, que consome CPU, memória e espaço em disco, tudo para que um aplicativo individual funcione. Além disso, a manutenção, atualização e inicialização de um sistema operacional é outra fonte significativa de trabalho repetitivo.

## Como isso ajuda

Os contêineres compartilham o mesmo sistema operacional e seus recursos de máquina, diminuindo a sobrecarga de recursos do sistema operacional e criando um uso eficiente da máquina física. Essa funcionalidade só é possível porque os contêineres geralmente têm limitações para interagir uns com os outros. Isso permite que muitos outros aplicativos sejam executados na mesma máquina física.

No entanto, existem limitações. Como os contêineres compartilham o mesmo sistema operacional, os processos podem ser considerados menos seguros do que outras alternativas. Os contêineres também exigem limites nos recursos compartilhados. Para garantir recursos, os administradores devem restringir e limitar o uso de memória e CPU para que outros aplicativos não tenham um desempenho ruim.
