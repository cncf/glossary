---
título: Política como Código (PaC)
estado: Concluído
categoria: conceito
tags: ["metodologia", "", ""]
rascunho:
---

## O que é isso

Política como Código é a prática de armazenar a definição de políticas como um ou mais arquivos em formato legível e processável por máquina.
Isto substitui o modelo tradicional onde as políticas são documentadas em formato legível por humanos em documentos separados.

## Problema que ele aborda

A construção de aplicações e infraestruturas é muitas vezes limitada por muitas políticas que uma organização define,
por exemplo. políticas de segurança que proíbem o armazenamento de segredos no código-fonte, a execução de um contêiner com permissões de superusuário,
ou armazenar alguns dados fora de uma região geográfica específica.
É muito trabalhoso e sujeito a erros para desenvolvedores e revisores verificar manualmente os aplicativos e a infraestrutura em relação às políticas documentadas.
Os processos manuais não conseguem atender aos requisitos de capacidade de resposta e escalabilidade dos aplicativos nativos da nuvem.

## Como isso ajuda

A descrição de políticas por meio de código permite repetibilidade e reduz erros (ao contrário de quando feita manualmente).
Outra vantagem da Política como Código é que o código pode ser gerenciado por um sistema de controle de versão como o Git.
O Git cria um histórico de log de alterações que é particularmente útil quando algo não funciona conforme o esperado.
Ele permite ao usuário determinar quem fez a alteração e reverter para uma versão anterior.
