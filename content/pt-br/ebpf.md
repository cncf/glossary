---
título: eBPF
estado: Concluído
categoria: arquitetura
---

## O que é isso

eBPF, ou Berkeley Packet Filter estendido, é uma tecnologia que permite que pequenos programas ou scripts em sandbox sejam executados no espaço do kernel de um sistema Linux sem a necessidade de alterar o código-fonte do kernel ou carregar módulos do kernel Linux.

Um sistema Linux possui dois espaços: o kernel e o espaço do usuário.
O kernel representa o núcleo do sistema operacional e é a única parte
com acesso ilimitado ao hardware.

Os aplicativos residem no espaço do usuário e quando precisam de permissões mais altas,
eles enviam uma solicitação ao kernel.
Para aplicações que exigem mais flexibilidade, como hardware direto
acesso, o kernel pode ser estendido através do que é conhecido como "Linux
abordagem de módulos do kernel". Essa abordagem estende a funcionalidade padrão do kernel,
 permitindo aos aplicativos acesso mais profundo aos componentes subjacentes.
 No entanto, esta abordagem também introduz riscos de segurança, tornando o eBPF uma alternativa atraente.

## Problema que ele aborda
Normalmente, os aplicativos são executados no espaço do usuário e, se o aplicativo exigir alguns privilégios do kernel (por exemplo, para acessar algum hardware),
ele o solicita do kernel por meio da chamada "chamada de sistema".
Na maioria dos casos, essa abordagem funciona perfeitamente. No entanto, há casos em que os desenvolvedores exigem mais flexibilidade para acesso ao sistema de baixo nível.
Recursos de observabilidade, segurança e rede são bons exemplos.
Para conseguir isso, podemos usar módulos do kernel Linux, estendendo a base do kernel sem modificar o código-fonte do kernel.
Embora haja benefícios no uso de módulos do kernel Linux, ele também apresenta riscos de segurança.
Como operam dentro do espaço do kernel, os módulos do kernel do Linux podem travar o kernel e, quando o kernel trava, a máquina inteira também.
Além disso, os módulos do kernel possuem privilégios elevados e acesso direto aos recursos do sistema. E se não estiverem devidamente protegidos, os invasores podem explorá-los.

## Como isso ajuda
O eBPF fornece um ambiente mais controlado e contido para a execução de programas definidos pelo usuário do que os módulos do Kernel Linux.
Ele é executado em um ambiente sandbox dentro do kernel, fornecendo isolamento e mitigando riscos.
Se uma vulnerabilidade ou falha for explorada em um programa eBPF, seu impacto geralmente será limitado ao ambiente sandbox.
Além disso, antes que um programa eBPF possa começar a rodar no kernel, ele precisa passar por algumas verificações.
O componente verificador verifica o programa eBPF em busca de possíveis violações de segurança,
como acesso à memória fora dos limites, loops infinitos e funções de kernel não autorizadas.
Dessa forma, garante que o programa não entrará em um loop infinito e causará uma falha no kernel.
Esses controles de segurança tornam o eBPF uma opção mais segura para executar aplicativos no kernel Linux do que os módulos do kernel Linux.
