# MMORPG baseado em Game of Thrones

## Descrição
Desenvolvimento de um *jogo* baseado em Game of Thrones para aplicação de conhecimentos pertinentes à manipulação de dados no **MongoDB**.

## Instalações úteis

Como nas atividades anteriores, foi preciso instalar algum package através de NPM. Neste caso, foi preciso instalar o **módulo de conexão com MongoDB**

### Instalando MongoDB
```shell
$ npm install mongodb --save
```

### Instalando Express-Session
```shell
$ npm install express-session --save
```

## Observações

### Configurando Path no Windows

Para poder acessar qualquer executável diretamente do prompt do DOS **sem precisar navegar até a pastar onde o executável encontra-se** precisamos configurar os paths. 

Para fazer isso:
1. Painel de Controle
2. Sistema e Segurança
3. Sistema
4. Configurações avançadas do sistema
5. Na aba Avançado clicar em Variáveis de Ambiente
6. Clicar duas vezes na variável PATH e incluir o caminho para a parta onde estão os executáveis

No nosso caso, vamos incluir o diretório dos executáveis do mongoDB que, no meu caso, encontram-se em
```
C:\Program Files\MongoDB\Server\3.4\bin
```