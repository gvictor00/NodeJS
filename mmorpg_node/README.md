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

O Express-Session serve para criar uma sessão enquanto o navegador estiver aberto. Sempre que o usuário faz a autenticação um cookie é enviado a cada requisição a fim de controlar o acesso à determinadas páginas do jogo. Ao finalizar o navegador (sessão), o usuário precisa fazer novo processo de acesso.

```shell
$ npm install express-session --save
```

### Instalando e utilizando o Crypto
O Crypto é um módulo usado para fazer criptografia de informações.

```shell
$ npm install crypto --save
```

No código, foi usado o crypto para fazer interface de codificação (MD5) das informações de senha dos usuários no banco.

```javascript
			var senha_criptograda = crypto.createHash("md5").update(usuario.senha).digest("hex");
```

Para mais informações sobre o módulo, [Clique aqui](https://nodejs.org/api/crypto.html).

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