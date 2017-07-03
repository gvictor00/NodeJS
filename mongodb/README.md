# MongoDB
Banco de dados não relacional muito utilizados em ferramentas atuais.
## Download, instalação e configuração

Para instalar o MongoDB no linux é necessário verificar se não existe nenhuma vesão prévia do banco. Para tal, basta executar a instrução mongod e verificar o retorno.

```shell
$ mongod
O programa 'mongod' não está instalado no momento. Você pode instalá-lo digitando:
sudo apt install mongodb-server
```

### Criando a pasta de arquivos

Para utilizar o MongoDB é preciso criar a pasta /data/db ou passar -dbpath como argumento quando iniciar o processo. 

Para verificar se ela já está criada executamos o mongod
```shell
$ mongod 
mongod --help for help and startup options
2017-06-30T11:46:53.042-0300 [initandlisten] MongoDB starting : pid=4895 port=27017 dbpath=/data/db 64-bit host=george-G1-Sniper-B5
2017-06-30T11:46:53.042-0300 [initandlisten] db version v2.6.10
2017-06-30T11:46:53.042-0300 [initandlisten] git version: nogitversion
2017-06-30T11:46:53.042-0300 [initandlisten] OpenSSL version: OpenSSL 1.0.2g  1 Mar 2016
2017-06-30T11:46:53.042-0300 [initandlisten] build info: Linux lgw01-12 3.19.0-25-generic #26~14.04.1-Ubuntu SMP Fri Jul 24 21:16:20 UTC 2015 x86_64 BOOST_LIB_VERSION=1_58
2017-06-30T11:46:53.042-0300 [initandlisten] allocator: tcmalloc
2017-06-30T11:46:53.042-0300 [initandlisten] options: {}
2017-06-30T11:46:53.042-0300 [initandlisten] exception in initAndListen: 10296 
*********************************************************************
 ERROR: dbpath (/data/db) does not exist.
 Create this directory or give existing directory in --dbpath.
 See http://dochub.mongodb.org/core/startingandstoppingmongo
*********************************************************************
, terminating
2017-06-30T11:46:53.042-0300 [initandlisten] dbexit: 
2017-06-30T11:46:53.042-0300 [initandlisten] shutdown: going to close listening sockets...
2017-06-30T11:46:53.042-0300 [initandlisten] shutdown: going to flush diaglog...
2017-06-30T11:46:53.042-0300 [initandlisten] shutdown: going to close sockets...
2017-06-30T11:46:53.042-0300 [initandlisten] shutdown: waiting for fs preallocator...
2017-06-30T11:46:53.042-0300 [initandlisten] shutdown: lock for final commit...
2017-06-30T11:46:53.042-0300 [initandlisten] shutdown: final commit...
2017-06-30T11:46:53.042-0300 [initandlisten] shutdown: closing all files...
2017-06-30T11:46:53.042-0300 [initandlisten] closeAllFiles() finished
2017-06-30T11:46:53.042-0300 [initandlisten] dbexit: really exiting now
```

Criamos a pasta **/data/db** e damos os devidos direitos

```shell
$ sudo mkdir -p /data/db
$ sudo chown mongodb /data/db
$ sudo chown -R $USER /data/db
$ sudo chown -R mognodb:mognodb /data/db
```

### Para executar o mongoDB

```shell
$ sudo mongod
mongod --help for help and startup options
2017-06-30T12:15:51.299-0300 [initandlisten] MongoDB starting : pid=5761 port=27017 dbpath=/data/db 64-bit host=george-G1-Sniper-B5
2017-06-30T12:15:51.299-0300 [initandlisten] db version v2.6.10
2017-06-30T12:15:51.299-0300 [initandlisten] git version: nogitversion
2017-06-30T12:15:51.299-0300 [initandlisten] OpenSSL version: OpenSSL 1.0.2g  1 Mar 2016
2017-06-30T12:15:51.299-0300 [initandlisten] build info: Linux lgw01-12 3.19.0-25-generic #26~14.04.1-Ubuntu SMP Fri Jul 24 21:16:20 UTC 2015 x86_64 BOOST_LIB_VERSION=1_58
2017-06-30T12:15:51.299-0300 [initandlisten] allocator: tcmalloc
2017-06-30T12:15:51.299-0300 [initandlisten] options: {}
2017-06-30T12:15:51.321-0300 [initandlisten] journal dir=/data/db/journal
2017-06-30T12:15:51.321-0300 [initandlisten] recover : no journal files present, no recovery needed
2017-06-30T12:15:51.384-0300 [initandlisten] waiting for connections on port 27017
```

### Para executar o cliente MongoDB

```shell
$ mongo
MongoDB shell version: 2.6.10
connecting to: test
Welcome to the MongoDB shell.
For interactive help, type "help".
For more comprehensive documentation, see
	http://docs.mongodb.org/
Questions? Try the support group
	http://groups.google.com/group/mongodb-user
> 
```

## Utilizando o MongoDB
Depois de iniciar o cliente através do comando

```shell
$ mongo
```
Temos as seguintes funções:
### 1. Exibe as databases
```shell
> show dbs;
admin  (empty)
local  0.078GB
```
### 2. Troca entre as databases ou cria uma nova
```shell
> use curso_mongodb
switched to db curso_mongodb
>
```
### 3. Inserir no banco
```shell
> db.alunos.save({Nome: "George"})
WriteResult({ "nInserted" : 1 })
```
### 4. Remover banco de dados
Para remover, é preciso acessar o banco e dar um drop
```shell
> use curso_mongodb
switched to db curso_mongodb
> db.dropDatabase();
{ "dropped" : "curso_mongodb", "ok" : 1 }
```
### 5. Criando coleções
```shell
> db.createCollection("alunos");	# Cria coleção
{ "ok" : 1 }
> db.getCollectionNames() 		 	# Exibe as coleções
[ "alunos"]
> db.createCollection("cursos");
{ "ok" : 1 }
> db.getCollectionNames()
[ "alunos", "cursos"]
> db.cursos.drop(); 			 	# Deleta a coleção
true
> db.getCollectionNames() 			
[ "alunos"]
> show collections; 				# Exibe as coleções
alunos
> 
```
### 6. Adicionando itens à coleção
```shell
> db.alunos.save(
... {
... nome: 'José',
... idade: 30,
... sexo: 'M',
... cpf: '123.123.123-12',
... rg: '123.123.123-1',
... matricula: 'abcd123'
... }
... )
WriteResult({ "nInserted" : 1 })
> db.alunos.save(
... {
... nome: 'Fernanda',
... idade: 32,
... sexo: 'F'
... ,
... matricula: 'hjk456',
... cursos_interesse: [
... {
... curso: 'Curso Completo do Desenvolvedor NodeJS'},
... {curso: 'Curso Completo de Desenvolvimento WEB - Crie 6 projetos'}
... ]
... }
... )
WriteResult({ "nInserted" : 1 })
```
### 7. Busca documentos na coleção

#### 7.1 `db.COLEÇÃO.findOne();` retorna apenas 1 documento
```shell
> db.alunos.findOne(); 				# Retorna um documento
{
	"_id" : ObjectId("595a40de400947f533bbf92a"),
	"nome" : "José",
	"idade" : 30,
	"sexo" : "M",
	"cpf" : "123.123.123-12",
	"rg" : "123.123.123-1",
	"matricula" : "abcd123"
}
```
#### 7.2 `db.alunos.find()` retorna todos os documentos da coleção
```shell
> db.alunos.find(); 				# Retorna todos os documentos
{ "_id" : ObjectId("595a40de400947f533bbf92a"), "nome" : "José", "idade" : 30, "sexo" : "M", "cpf" : "123.123.123-12", "rg" : "123.123.123-1", "matricula" : "abcd123" }
{ "_id" : ObjectId("595a416a400947f533bbf92b"), "nome" : "Maria", "idade" : 25, "sexo" : "F", "matricula" : "uio123" }
{ "_id" : ObjectId("595a41d1400947f533bbf92c"), "nome" : "Fernanda", "idade" : 32, "sexo" : "F", "matricula" : "hjk456", "cursos_interesse" : [ { "curso" : "Curso Completo do Desenvolvedor NodeJS" }, { "curso" : "Curso Completo de Desenvolvimento WEB - Crie 6 projetos" } ] }
> db.alunos.find().pretty();		# Retorna todos os documentos indentados
{
	"_id" : ObjectId("595a40de400947f533bbf92a"),
	"nome" : "José",
	"idade" : 30,
	"sexo" : "M",
	"cpf" : "123.123.123-12",
	"rg" : "123.123.123-1",
	"matricula" : "abcd123"
}
{
	"_id" : ObjectId("595a416a400947f533bbf92b"),
	"nome" : "Maria",
	"idade" : 25,
	"sexo" : "F",
	"matricula" : "uio123"
}
{
	"_id" : ObjectId("595a41d1400947f533bbf92c"),
	"nome" : "Fernanda",
	"idade" : 32,
	"sexo" : "F",
	"matricula" : "hjk456",
	"cursos_interesse" : [
		{
			"curso" : "Curso Completo do Desenvolvedor NodeJS"
		},
		{
			"curso" : "Curso Completo de Desenvolvimento WEB - Crie 6 projetos"
		}
	]
}
```
#### Busca condicional com `db.alunos.find()`
Para os operadores de comparação, tomando como **referência** comandos *MySQL*, no MongoDB temos:

| Operador SQL	| Operador	| Nome	| Operação	|
|:-------------:|:---------:|:-----:|:---------:|
| = | $eq | Equals | Igual a |
| > | $gt | Greater Than | Maior que |
| >= | $gte | Greater Than or Equal | Maior que ou igual |
| < | $lt | Less Than | Menor que |
| <= | $lte | Less Than Equal | Menor que ou igual |
| != / <> | $ne | Not Equal | É diferente |

```shell
> db.alunos.find({idade:{$lt:30}}).pretty();
{
	"_id" : ObjectId("595a416a400947f533bbf92b"),
	"nome" : "Maria",
	"idade" : 25,
	"sexo" : "F",
	"matricula" : "uio123"
}
> db.alunos.find({nome:{$eq: "José"}}).pretty();
{
	"_id" : ObjectId("595a40de400947f533bbf92a"),
	"nome" : "José",
	"idade" : 30,
	"sexo" : "M",
	"cpf" : "123.123.123-12",
	"rg" : "123.123.123-1",
	"matricula" : "abcd123"
}
> 

```