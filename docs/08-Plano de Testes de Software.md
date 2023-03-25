# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

Os requisitos para realização dos testes de software são:

       •	Aplicação publicada em dispositivos móveis com acesso à Internet
       •	Navegador da Internet - Chrome, Firefox, Edge ou Google Play Store
       •	Conectividade de Internet para acesso às plataformas (APIs)
 
| **Caso de Teste** 	| **CT-01 – Login** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-002 – Autenticação no sistema |
| Objetivo do Teste 	| Verificar se o login está funcionando corretamente. |
| Passos 	| 1) Acessar o aplicativo “Sebo Digital” 2) Visualizar a página de Login, clicando em Fazer Login na página inicial 3) Inserir o e-mail e senha cadastrados 4) Ser redirecionado para a tela home onde contém os livros e campos de pesquisar/atalhos para fácil acesso do usuário. |
|Critério de Êxito | - A tela de login deve abrir corretamente - O login e senha cadastrados devem direcionar o usuário para a tela de home do Sebo Digital - Login e senha incorretos devem exibir uma mensagem de login ou senha incorretos. |
|  	|  	|
| **Caso de Teste** 	| **CT-02 – Cadastrar usuário** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-001 – Cadastro de clientes com nome, CPF, endereço, e-mail, senha |
| Objetivo do Teste 	| Verificar se o usuário consegue se cadastrar na aplicação. |
| Passos 	| 1) Acessar o aplicativo “Sebo Digital” 2) Visualizar a página de Login, clicando em Cadastre-se na página inicial 3) Cadastrar um novo usuário 4) Preencher os campos solicitados (nome, e-mail, senha e confirme senha) 5) Clique no botão cadastrar. |
|Critério de Êxito | - O cadastro foi realizado com sucesso, caso não seja bem-sucedido deverá obedecer aos critérios de senha: - Crie uma senha com no mínimo 8 caracteres, - Adicione letras minúsculas, -Adicione pelo menos uma letra maiúscula. |
|  	|  	|
| **Caso de Teste** 	| **CT-03 – Esqueceu a senha / Redefinir senha** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-002 – Autenticação no sistema |
| Objetivo do Teste 	| Verificar se a alteração de cadastro está ocorrendo corretamente. |
| Passos 	| 1) Acessar o aplicativo “Sebo Digital” 2) Visualizar a página de Login, clicando em Fazer Login na página inicial 3) Ir para a página de login 4) Acessar com o e-mail e senha 5) Clicar no botão esqueceu a senha 6) O usuário será direcionado para a página de esqueceu a senha, digitará o e-mail para que possa acessar sua caixa de entrada do e-mail. Clicar no link presente no corpo da mensagem enviada no e-mail pessoal, encaminhar a página do app de redefinir senha e alterar para uma nova senha com êxito 7) Acessar o login novamente com a senha alterada. |
|Critério de Êxito | - A tela de novo cadastro deve abrir corretamente - Ao alterar a senha, o usuário deverá conseguir realizar o login perfeitamente |
|  	|  	|
| **Caso de Teste** 	| ** CT-04 – Área do usuário** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-007 –  O usuário cliente, poderá visualizar as compras realizadas após a finalização do pedido|
| Objetivo do Teste 	| Verificar se o administrador consegue fazer a gestão de estoque na aplicação. |
| Passos 	| 1) Acessar o aplicativo “Sebo Digital” 2) Visualizar a página de Login, clicando em Fazer Login na página inicial 3) Inserir o e-mail e senha cadastrados 4) Ser redirecionado para a tela home do administrador em que ele poderá cadastrar, alterar, excluir ou editar os itens do estoque. |
|Critério de Êxito | - A tela área do administrador deve abrir corretamente, o usuário deverá conseguir alterar, cadastrar, excluir e editar os itens do estoque, que deverão ser atualizados no estoque após o salvamento das informações. |
|  	|  	|
| **Caso de Teste** 	| **CT-05 – Área do administrador** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-006 - O administrador do sistema poderá visualizar, alterar, excluir e cadastrar os itens do estoque. RF-001 - Cadastro de livros, autores, editoras e clientes.|
| Objetivo do Teste 	| Verificar se a área do usuário está apresentando as informações de compras realizadas corretamente. |
| Passos 	| 1) Acessar o aplicativo “Sebo Digital” 2) Visualizar a página de Login, clicando em Fazer Login na página inicial 3) Inserir o e-mail e senha cadastrados 4) Ser redirecionado para a tela home onde contém os livros e campos de pesquisar/atalhos para fácil acesso do usuário 5) O usuário poderá alterar os itens no carrinho, finalizar a compra e visualizar os pedidos realizados |
|Critério de Êxito | - A tela área do administrador deve abrir corretamente, o usuário deverá conseguir alterar, cadastrar, excluir e editar os itens do estoque, que deverão ser atualizados no estoque após o salvamento das informações. |
|  	|  	|

## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
