# sort-methods-runtime-register

## Sumário

- [sort-methods-runtime-register](#sort-methods-runtime-register)
  - [Sumário](#sumário)
  - [Motivação](#motivação)
  - [Pilha de tecnologia](#pilha-de-tecnologia)
  - [Como rodar](#como-rodar)
    - [Pré-requisitos](#pré-requisitos)
    - [Passo a passo](#passo-a-passo)

## Motivação

Este repositório de código foi criado para compor os códigos-fonte de um [relatório acadêmico](./docs/2023-1-so-1-relatorio-gerenciamento-de-processos-e-threads-em-typescript-uma-analise-pratica.pdf) de Sistemas Operacionais I sobre processos e _threads_, solicitado com um seminário para o qual foi criado outro repositório de código, [processos-e-threads](https://github.com/mdccg/processos-e-threads). O exemplo adotado para este repositório de código consiste em uma espécie de _logger_ para a atividade da unidade curricular Estruturas de Dados que consistiu em cronometrar o tempo de execução de seis métodos de ordenação, a qual está disponível no repositório de código [sorting-algorithms-benchmark](https://github.com/mdccg/sorting-algorithms-benchmark).

No repositório de código anterior, foi demonstrado que a saída padrão de um processo pode ser capturada por uma _thread_ virtual e convertida no formato _string_ para diversos fins. No relatório supracitado, o problema esmiuçado é o tipo de retorno do método `console.timeEnd`. Por se tratar de um método do objeto `console`, ele não tem retorno, o que dificulta o trabalho de armazenar os tempos de execução dos métodos de ordenação; uma vez que o desenvolvedor deveria copiar manualmente a saída do _shell_ de comando e colá-la em outro arquivo para que seja tratada. Com o _logger_, a saída padrão pode ser capturada e a informação pode ser tratada sem que o processo seja encerrado.

Este foi o segundo repositório de código apresentado no [Curso Superior de TSI do IFMS](https://www.ifms.edu.br/campi/campus-aquidauana/cursos/graduacao/sistemas-para-internet/sistemas-para-internet) como requisito para obtenção da nota parcial das atividades da unidade curricular Sistemas Operacionais I.

| [&larr; Repositório anterior](https://github.com/mdccg/processos-e-threads/) |
|-|

## Pilha de tecnologia

| Papel | Tecnologia |
|-|-|
| Ambiente de execução | [Node](https://nodejs.org/en/) |
| Linguagem de programação | [TypeScript](https://www.typescriptlang.org/) |

## Como rodar

### Pré-requisitos

- [Node](https://nodejs.org/en/download/);
- [Yarn](https://yarnpkg.com/) (opcional).

### Passo a passo

1. Clone o repositório de código em sua máquina;
   
2. Abra um shell de comando de sua preferência (prompt de comando, PowerShell, terminal _etc_.);
   
3. Instale as dependências do projeto através do seguinte comando:

```console
$ npm install
```

Caso esteja utilizando o gerenciador de pacotes Yarn, execute o seguinte comando como alternativa:

```console
$ yarn
```

4. Finalmente, execute o seguinte comando para iniciar o app:

Para npm:

```console
$ npm run log:start
```

Para Yarn:

```console
$ yarn log:start
```