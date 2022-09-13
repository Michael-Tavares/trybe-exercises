# Comandos unix e operadores 


| **Comandos** | **Significado** |
|--------------|:---------------:|
|     `>`      |redireciona a saída e substituí o conteúdo|
|   `>>`       |anexa a saída e acrescenta ao conteúdo|
|    `<`       |redireciona a entrada padrão de um arquivo|
|   `|`        |concatena a saída de um comando com a entrada de outro|
|    `sort`    |ordena dados|
|    `who`     |lista todos os usuários atualmente logados|
|   `ls -lag`  |lista todos os arquivo e diretórios com suas permissões|
|    `chmod`   |altera permissões de uma arquivo ou diretório|
|     `&`      |executa um comando em segundo plano|
|    `Ctrl C`  |elimina o trabalho em execução em primeiro plano|
|  `Ctrl Z`    |suspende o trabalho em execução em primeiro plano|
|    `bg`      |retorna os processos que estão suspensos|
|    `jobs`    |lista processos suspensos e em segundo plano|
|     `fg`     |reinicia o processo suspenso|
|  `kill %1`   |encerra o primeiro processo|
|     `ps`     |lista os processos atuais|
|  `kill 'n'`  |elimina o processo específico|


# Exercícios


## Comandos de Input e Output

  1. Navegue até a pasta `unix_tests`.

  2. Crie um arquivo texto pelo terminal com o nome `skills2.txt` e adicione os valores **Internet, Unix** e **Bash**, um em cada linha.

  3. Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal. 🤓

  4. Conte quantas linhas tem o arquivo `skills2.txt`.

  5. Crie um arquivo chamado `top_skills.txt` usando o `skills2.txt`, contendo as 3 primeiras skills em ordem alfabética.

  6. Crie um novo arquivo chamado `phrases2.txt` pelo terminal e adicione algumas frases de sua escolha.

  7. Conte o número de linhas que contêm as letras **br**.

  8. Conte o número de linhas que não contêm as letras **br**.

  9. Adicione dois nomes de países ao final do arquivo `phrases2.txt`.

  10. Crie um novo arquivo chamado `bunch_of_things.txt` com os conteúdos dos arquivos `phrases2.txt` e `countries.txt`.

  11. Crie um novo arquivo `bunch_of_things_ordered.txt` com o conteúdo do arquivo `bunch_of_things.txt` ordenado.


## Permissões

1. Navegue até a pasta `unix_tests`.

2. Rode o comando `ls -l` e veja quais as permissões dos arquivos.

3. Mude a permissão do arquivo `bunch_of_things.txt` para que todos os usuários possam ter acesso à leitura e escrita, e verifique se está correto com o comando `ls -l`.
>Resultado esperado: `-rw-rw-rw- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt`

4. Tire a permissão de escrita do arquivo `bunch_of_things.txt` para todos os usuários, verifique se está correto com o comando `ls -l`.
>Resultado esperado: `-r--r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt`

5. Volte à permissão do arquivo `bunch_of_things.txt` para a listada inicialmente utilizando o comando `chmod 644 bunch_of_things.txt`.
>Resultado esperado: `-rw-r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt`