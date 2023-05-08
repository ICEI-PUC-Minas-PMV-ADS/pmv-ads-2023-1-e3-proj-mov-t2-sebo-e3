# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

## Avaliação
https://user-images.githubusercontent.com/89920953/236722370-6bec74f7-ded1-4cec-82ee-0aa2182ae59d.mp4

### CT 1 - Pré-login e Login
O teste foi iniciado pela tela de login. Inicialmente o aplicativo apresenta uma tela de pré-login, onde o usuário tem a opção de fazer o login, caso tenha uma conta, e fazer seu cadastro, caso ainda não possua uma conta.


>**Resultado**
> - Quando o usuário informou o email e/ou senha incorretos, apareceu uma mensagem dizendo "Usuário ou senha incorretos!"
> - Quando o usuário fez login informando todos os dados corretamente, apareceu uma mensagem dizendo "Usuário ou senha incorretos!", mas o login foi feito e ele conseguiu navegar pelo sistema.

### CT 2 - Cadastro
Caso o usuário não tenha uma conta, através da tela de pré-login, ele seria redirecionado para a página de cadastro, onde informaria seus dados se criaria a sua conta.


>**Resultado**
> - Quando as senhas informadas nos campos "Senha" e "Confirme a senha" não foram iguais, apareceu uma mensagem dizendo "As senhas fornecidas não são iguais".
> - Quando todas as informações foram preenchidas corretamente, a conta do usuário foi cadastrada e registrada no banco de dados.

### CT 3 - Recuperação de Senha
Caso o usuário tenha uma conta mas não se lembre da sua senha, ele poderá redefini-la através do link "esqueci minha senha" presente na tela de login.

>**Resultado**
> - Ao informar seu email, ele foi verificado e possibilitou que o usuário pudesse trocar sua senha.
> - Quando as senhas informadas nos campos "Senha" e "Confirme a senha" não foram iguais, apareceu uma mensagem dizendo "As senhas fornecidas não são iguais".
> - Quando as senhas foram escritas corretamente, a senha foi alterada no banco de dados, mostrando a mensagem "Senha alterada com sucesso!"


## Conclusão
O grupo conseguiu desenvolver as funções iniciais do aplicativo, tendo como ponto de destaque a parte visual das telas. Para as próximas iterações, os erros encontrados no registro de teste, serão resolvidos fazendo com que o funcionalidades e seu fluxo de navegação funcione normalmente como o esperado. Também será feito um teste geral com todas as telas que foram planejadas para o sistema.
