# Prática Métodos de Array para Typescript

Este pacote contém a uma série de funções utilitárias, principalmenete para manipulação de arrays. Nenhuma destas funções estão implementadas, apenas assinadas, anotadas com comentários, que explicam sua função, e com testes de unidade implementados, para garantir a correta implementação dos requisitos.

Você deverá implementar cada uma destas funções, de forma que os testes de unidade sejam executados com sucesso. Para isso, você deverá seguir as instruções abaixo.

## Instalação

Todas as bibliotecas necessárias para esta prática já estão adicionadas ao projeto. Desta forma, para iniciar o projeto, basta executar o comando abaixo, estando na pasta raiz deste repositório:

```sh
npm install
```

## comandos

Este projeto nasce com alguns comandos uteis para o desenvolvedor. Abaixo, uma breve descrição deles:

- `build`: comando responsável por transformar o código typescript em javascript, compreensível para o interpretador de node. A princípio, este comando será necessário apenas para o momento da publicação de nosso pacote.
- `test`: comando utilizado para rodar os testes uma vez apenas. Util também para o momento de publicação deste pacote.
- `test:watch`: comando utilizado para rodar os testes, de forma que a cada vez que seu código for alterado, ele será executado novamente, avaliando assim, a cada mudança, se sua solução está correta.
- `lint`: comando utilizado para avaliar se seu código está seguindo as boas práticas de desenvolvimento. Sugiro que você execute este comando sempre, antes de entregar sua solução. Ele vai garantir que você está fazendo um bom trabalho em qualidade do código entregue.
- `format`: este comando te ajudará garantir que as regras de formatação de código estão sendo seguidas. Rode ele para que todo seu código seja varrido e corrigido automaticamente.

Para executar qualquer um destes comandos, basta você executar, no terminal, o comando `npm run <nome-do-comando>`. Para executar o comando de build, por exemplo, você precisa executar um `npm run build`

## Estrutura do repositório

Este repositório possui dois diretórios principais:

- `src`: pasta onde todas as funções deverão estar implementadas
- `test`: pasta onde se localizam os testes de unidade das funções. Falaremos disso no futuro...

## Dicas

Como foi dito acima, todas as funções possuem testes implementados. Esta modalidade de testes será explicada nas próximas aulas, mas já podemos fazer bom uso deles. Para que você implemente seu método da forma mais fácil possível, sugiro que siga o passo-a-passo abaixo:

- baixar o pacote;
- executar o comando de instalação dos pacotes do projeto (`npm install`);
- colocar os testes em execução, com o comando `npm run test:watch <caminho-do-arquivo-de-tetes>`;
  - ex.: para rodar apenas os testes da função `fileName`, usar o comando `npm run test:watch test/fileName.test.ts`
- os testes deverão estar quebrados. Não se preocupe, este é o esperado.
- você deverá agora escrever sua função (no mesmo exemplo, alterar o arquivo `src/fileName.ts`), e implementar o código, de forma que seu teste funcione corretamente.
