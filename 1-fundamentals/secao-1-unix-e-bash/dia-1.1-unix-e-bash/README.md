# Comandos unix 


| **Comandos** | **Significado** |
|--------------|:---------------:|
|     `ls`     |lista os arquivos e diretórios|
|   `ls -la`   |lista todos os arquivos e diretórios|
|    `mkdir`   |cria um diretório|
|   `cd 'dir'` |altera para o diretório|
|     `cd ~`   |muda para o diretório `/home`|
|    `cd ..`   |retorna ao diretório 'pai'|
|    `pwd`     |mostra o caminho do diretório atual|
|     `cp`     |realiza a cópia de um arquivo|
|     `mv`     |move ou renomeia um arquivo|
|     `rm`     |remove um arquivo|
|    `rmdir`   |remove um diretório|
|     `cat`    |exibe o conteúdo de um arquivo|
|    `less`    |exibe um arquivo por página|
|    `head`    |exibe as primeiras linhas de um arquivo|
|     `tail`   |exibe as últimas linhas de um arquivo|
|     `grep`   |procura por palavras-chave em um arquivo|
|     `wc`     |conta o número de letras, caracteres e linhas de um arquivo|
|     `*`      |corresponde a qualquer número de caractere|
|     `?`      |corresponde a um caractere|
|    `man`     |exibe a página do manual de qualquer comando|
|   `whatis`   |breve descrição de um comando|
|   `apropos`  |busca por palavras-chave em um comando|
|    `touch`   |cria um arquivo vazio com sua determinada extensão|


# Exercícios

## Criação de arquivos e diretórios

Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu, crie um diretório chamado `unix_tests` e navegue até ele.

  1. Crie um arquivo de texto com o nome `trybe.txt`.

  2. Crie uma cópia do arquivo trybe.txt com nome `trybe_backup.txt`. 
 
  3. Renomeie o arquivo `trybe.txt`.

  4. Dentro de `unix_tests`, crie um novo diretório chamado `backup`.

  5. Mova o arquivo `trybe_backup.txt` para o diretório `backup`.

  6. Dentro de `unix_tests`, crie um novo diretório chamado `backup2`.

  7. Mova o arquivo `trybe_backup.txt` da pasta backup para a pasta `backup2`.

  8. Apague a pasta `backup`.

  9. Renomeie a pasta `backup2` para `backup`.

  10. Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.

  11. Apague o diretório `backup`.

  12. Limpe o terminal.

**Para os exercícios 14 e 15, crie, de forma manual na parte gráfica do seu sistema operacional (através do mouse), um arquivo de texto com o conteúdo abaixo, chamado `skills.txt:`**

```
Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL
```
  14. Mostre na tela as 5 primeiras skills do arquivo `skills.txt`.

  15. Mostre na tela as 4 últimas skills do arquivo `skills.txt`.

  16. Apague todos os arquivos que terminem em `.txt`.


## Manipulação & Busca

  1. Na pasta `unix_tests`, baixe um arquivo com os nomes de todos os países do mundo utilizando o comando [curl](https://linux.die.net/man/1/curl):

```
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
```

  2. Mostre todo o conteúdo do arquivo `countries.txt` na tela.

  3. Mostre o conteúdo de `countries.txt`, página por página, até encontra a `Zambia`.

  4. Mostre novamente o conteúdo de `countries.txt` página por página, mas agora utilize um comando para buscar por `Zambia`.

  5. Busque por `Brazil` no `countries.txt`.

  6. Busque novamente por `brazil` , mas agora utilizando o lower case.

**Para os próximos exercícios, crie um novo arquivo chamado `phrases.txt` e adicione algumas frases a sua escolha. Não precisa criar o arquivo pelo terminal.**

  7. Busque pelas frases que não contenham a palavra `fox`.

  8. Conte o número de palavras do arquivo `phrases.txt`.

  9. Conte o número de linhas do arquivo `phrases.txt`.

  10. Crie os arquivos `empty.tbt` e `empty.pdf`.

  11. Liste todos os arquivos do diretório `unix_tests`.

  12. Liste todos os arquivos que terminem com `txt`.

  13. Liste todos os arquivos que terminem com `tbt` ou `txt`.

  14. Acesse o manual do comando `ls`.

### Comentário adicional

Com esse comandos básicos é capaz de se: *criar, manipular e deletar* arquivos e diretórios apenas utilizando o **terminal**. 

