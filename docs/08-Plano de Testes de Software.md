# Plano de Testes de Software

| **Caso de Teste** 	| **CT-01 – Login** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-002 – Autenticação no sistema |
| Objetivo do Teste 	| Verificar se o login está funcionando corretamente. |
| Passos 	| 1) Acessar o aplicativo “Sebo Digital” 2) Visualizar a página de Login, clicando em Fazer Login na página inicial 3) Inserir o e-mail e senha cadastrados 4) Ser redirecionado para a tela home onde contém os livros e campos de pesquisar/atalhos para fácil acesso do usuário. |
|Critério de Êxito | - A tela de login deve abrir corretamente - O login e senha cadastrados devem direcionar o usuário para a tela de home do Sebo Digital - Login e senha incorretos devem exibir uma mensagem de login ou senha incorretos. |
|  	|  	|

![image](https://user-images.githubusercontent.com/103009155/229194342-dce48986-b6bc-41bc-aa8b-e8b91d59a059.png)

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
| **Caso de Teste** 	| **CT-04 – Área do usuário** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-007 –  O usuário cliente, poderá visualizar as compras realizadas após a finalização do pedido. RF-008 - O usuário poderá alterar os itens do carrinho de compra até a finalização do pedido |
| Objetivo do Teste 	| Verificar se a área do usuário está apresentando as informações de compras realizadas corretamente. |
| Passos 	| 1) Acessar o aplicativo “Sebo Digital” 2) Visualizar a página de Login, clicando em Fazer Login na página inicial 3) Inserir o e-mail e senha cadastrados 4) Ser redirecionado para a tela home onde contém os livros e campos de pesquisar/atalhos para fácil acesso do usuário 5) O usuário poderá alterar os itens no carrinho, finalizar a compra e visualizar os pedidos realizados. |
|Critério de Êxito | - A tela área do usuário deve abrir corretamente – após efetuar o login na aplicação, o usuário poderá pesquisar os livros que deseja comprar, adicionar ao carrinho, finalizar a compra e visualizar as compras realizadas perfeitamente. |
|  	|  	|
| **Caso de Teste** 	| **CT-05 – Área do administrador** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-006 - O administrador do sistema poderá visualizar, alterar, excluir e cadastrar os itens do estoque. RF-001 - Cadastro de livros, autores, editoras e clientes. RF-003 - Controle de estoque e vendas de livros |
| Objetivo do Teste 	| Verificar se o administrador consegue fazer a gestão de estoque. |
| Passos 	| 1) Acessar o aplicativo “Sebo Digital” 2) Visualizar a página de Login, clicando em Fazer Login na página inicial 3) Inserir o e-mail e senha cadastrados 4) Ser redirecionado para a tela home do administrador em que ele poderá cadastrar, alterar, excluir ou editar os itens do estoque. |
|Critério de Êxito | - A tela área do administrador deve abrir corretamente, o usuário deverá conseguir alterar, cadastrar, excluir e editar os itens do estoque, que deverão ser atualizados no estoque após salvar as informações. |
|  	|  	|
| **Caso de Teste** 	| **CT-06 – Usuário busca por livros** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-005 - Pesquisa de livros por título, autor ou categoria |
| Objetivo do Teste 	| Verificar se existe o livro do qual o usuário está procurando. |
| Passos 	| 1) Acessar o aplicativo “Sebo Digital” 2) Visualizar a página de Login, clicando em Fazer Login na página inicial 3) Inserir o e-mail e senha cadastrados 4) Ser redirecionado para a tela home onde contém os livros e campos de pesquisar/atalhos para fácil acesso do usuário 5) Tela de Busca e de Produto, usuário vai em Pesquisar para encontrar os livros disponíveis e detalhar sobre o mesmo |
|Critério de Êxito | - O campo de pesquisar deve encontrar o que o usuário solicitar ao digitar no aplicativo e ao mesmo tempo conseguir clicar no livro para ver as informações. |
|  	|  	|
| **Caso de Teste** 	| **CT-07 – Finalização da compra** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-002 - Entrega do produto e confirmação da compra |
| Objetivo do Teste 	| Verificar se usuário ao preencher os dados possa confirmar as informações do detalhamento da compra realizada para ter o status de andamento do pedido |
| Passos 	| 1) Acessar o aplicativo “Sebo Digital” 2) Visualizar a página de Login, clicando em Fazer Login na página inicial 3) Inserir o e-mail e senha cadastrados 4) Ser redirecionado para a tela home onde contém os livros e campos de pesquisar/atalhos para fácil acesso do usuário 5) O usuário poderá alterar os itens no carrinho, finalizar a compra e visualizar os pedidos realizados. 6) O usuário decide inserir os livros no carrinho, preenche os dados corretamente e após será direcionado para a página do status de andamento do pedido |
|Critério de Êxito | - A tela área do usuário deve abrir corretamente e ser preenchida – Para que possa vir a tela de Meus Pedidos e indicar qual status está o pedido: “Em aberto” ou “Concluído”. |
|  	|  	|
