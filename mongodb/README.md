# MongoDB

## Instalação e Download

Para instalar o MongoDB no linux é necessário verificar se não existe nenhuma vesão prévia do banco. Para tal, basta executar a instrução mongod e verificar o retorno.

```shell
$ mongod
O programa 'mongod' não está instalado no momento. Você pode instalá-lo digitando:
sudo apt install mongodb-server
```
## Criando a pasta de arquivos

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
## Para executar o mongoDB
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

## Para executar o cliente MongoDB
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