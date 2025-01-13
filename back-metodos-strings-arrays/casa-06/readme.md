![](https://i.imgur.com/xG74tOh.png)

# Exercício de casa 🏡

## Sistema para formatar números.

Faça um sistema que consiga validar CPF ou CNPJ e exibir formatado de acordo com os padrões abaixo. Assuma que todos os dígitos que chegam para validação são numéricos:

**a)** Formatar CPF

-   Validar o tamanho (11 números)
-   Imprimir o CPF formatado se for válido

Exemplo 1:

```javascript=
const cpf = "12309";
```

Para o exemplo acima o sistema deverá imprimir:

```
CPF Inválido
```

Exemplo 2:

```javascript=
const cpf = "12345678900";
```

Para o exemplo acima o sistema deverá imprimir:

```
123.456.789-00
```

**b)** Formatar CNPJ

-   Validar o tamanho (14 números)
-   Imprimir o CNPJ formatado se for válido

Exemplo 1:

```javascript=
const cnpj = "12345678900";
```

Para o exemplo acima o sistema deverá imprimir:

```
CNPJ Inválido
```

Exemplo 2:

```javascript=
const cnpj = "12345678000199";
```

Para o exemplo acima o sistema deverá imprimir:

```
12.345.678/0001-99
```

Faça o teste com outros exemplos.

Faça commit do resultado.

---

Preencha a checklist para finalizar o exercício:

-   [ ] Resolver o exercício revendo a aula se necessário
-   [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos ou `git add nome_do_arquivo` para adicionar um arquivo específico)
-   [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
-   [ ] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)
-   [ ] Realizar o pull request

###### tags: `backend` `lógica` `exercício de casa` `nodeJS` `JavaScript`