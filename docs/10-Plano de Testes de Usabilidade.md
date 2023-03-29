# Plano de Testes de Usabilidade

  Os testes de usabilidade permitem avaliar a qualidade da interface com o usuário da aplicação interativa. A ISO/IEC 9126 é uma norma ISO para qualidade de produto de software, e um de seus atributos principais é a usabilidade do produto de software a ser compreendido, aprendido, operado e atraente ao usuário, quando usado sob condições especificadas. Sua principais características são: Inteligibilidade, Apreensibilidade, Operacionalidade, Proteção frente à erros, Estética, Acessibilidade e Conformidade. Para a construção do plano de teste de usabilidade nos pautamos nos conceitos da ISSO/IEC 9126, conforme apresentado abaixo:
  
Detalhamento dos Objetivos:
	O objetivo é avaliar a usabilidade do aplicativo e identificar problemas de uso visando a busca melhoria contínua, para que possamos desenvolver o aplicativo será necessário:
  * Garantir que o usuário consiga realizar buscas de livros de modo intuitivo e funcional
  * Garantir que o usuário consiga adicionar livros ao carrinho e completar compra
  * Garantir que seja possível selecionar diversos métodos de pagamento
  * Garantir que usuário consiga acompanhar os pedidos pelo aplicativo
  * Garantir que o usuário possa visualizar seus dados pessoais e alterá-los, em caso de necessidade
  
Participantes:
	Para participar dos testes será necessário um usuário adulto com hábito de efetuar compras online, um proprietário de sebo que te interesse em registrar os livros na plataforma, um perfil de usuário sem hábito de compras online, além de perfis técnicos como desenvolvedores front-end e back-end. Os cincos perfis de usuário estão representados na tabela abaixo:


|Perfil de Usuário | Profissão | Dispositivo | Permissão|
|------------------|-----------|-------------|----------|
|Usuário 1 | Desenvolvedor Full- Stack | Computador |	Administrador |
|Usuário 2 | Livreiro |	Computador |	Admin. loja online |
|Usuário 3 | Desenvolvedor Front- End |	Celular/ Computador |	Administrador |
|Usuário 4 | Comprador digital |	Celular|	Usuário |
|Usuário 5 | Comprador sem exp. digital |	Celular |	Usuário |


Procedimentos:
Os testes deverão ocorrer de maneira remota. E as tarefas a serem executadas serão apresentadas abaixo:

1.	Abrir o site em um navegador web através de link
2.	Efetuar cadastro de usuário
	* Clicar no campo de cadastro
	* Preencher dados de nome, e-mail e senha
	* Finalizar o cadastro
3.	Fazer login no sistema por meio de interface que recebe login e senha, com possibilidade de recuperação de senha, em caso de esquecimento por parte do usuário.
	* Preencher login e senha
	* Recuperar senha, em caso de esquecimento, com envio de senha por e-mail
	* Em caso de usuário não cadastrado, cadastrar de usuário no sistema
4.	Navegar no sistema principal com uso do buscador para selecionar livros de interesse
	* Testar carrosel de livro mais vendidos
	* Testar campo de busca e verificar se retorna título desejado
	* Após selecionar livro desejado, encaminhar para tela de detalhes do livro
	* Testar cálculo de frete
	* Testar adição de material ao carrinho
5.	Testar procedimento de compras
	* Após itens adicionado ao carrinho, verificar se todos os itens estão constantes e com preços corretos
	* Prosseguir para guia de preenchimento de endereço, verificar se campos estão validando dados corretamente
	* Selecionar método de pagamento, verificar se dados de método estão apresentados corretamente 
	* Prosseguir para campo de dados de pagamento, verificar se campos estão validando dados corretamente
6.	Testar ambiente de telas de estoque
	* Acessar sistema como usuário que possui direito a acessar a tela de estoque
	* Verificar se estoque estão sendo demonstrados corretamente
	* Adicionar material ao estoque e verificar se dados foram atualizados corretamente
	* Abrir material e verificar se dados de descrição aparecem corretamente
	* Testar edição de informações de materiasi e verificar se informação foi propagada
	* Testar remoção de material e verificar se informação foi propagada

Dados a serem coletados:
 * Tempo para efetuar compra de livro (Quantidade de Clicks)
 * Avaliação da conclusão de tarefas (eficácia):
   * Tarefas sem erros;
   * Tarefas com erros;
   * Tarefas com erros críticos
 * Medir a satisfação do uso do aplicativo. (Questionário NPS)

Referência:

ISO/IEC 9126. Wikipedia. Disponível em: https://pt.wikipedia.org/wiki/ISO/IEC_9126 Acesso em: 30 de setembro de 2022.
