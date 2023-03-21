# Especificações do Projeto

Após a apresentação do embasamento e dos objetivos desse projeto, será esclarecido o modo pelo qual tais objetivos serão concretizados.

Primeiramente, serão descritas as personas, que consistem em representações das histórias, características e motivações do público-alvo do projeto, ou seja, uma espécie de simulação do público ao qual o projeto se destina. As informações das personas são baseadas em dados reais acerca de clientes em potencial para a solução a ser desenvolvida.

Com base nas histórias desses usuários, os integrantes do grupo ─ por meio de discussões e análises ─ desenvolveram o backlog do produto: um artefato de metodologia ágil onde são listados os requisitos que devem ser executados durante o desenvolvimento do projeto.

## Personas

Persona 1 → Arthur Valentim

Idade: 23 anos

Ocupação: Estudante e estagiário de psicologia 

Faixa salarial: 1,5 salários mínimos

![image](https://user-images.githubusercontent.com/103009155/222922747-bbb6bc5f-affd-4be1-81f6-b27c3934aa14.png)

- **Interesses e estilo de vida**: Durante a semana, se dedica à sua graduação e ao seu estágio em psicologia. No tempo livre, gosta de ler livros de suspense, ficção científica e livros relacionados a psicologia humana.
- **Motivações**: Se esforça muito nos estudos pois sonha em ajudar pessoas através da psicoterapia, e também em dar uma vida melhor para sua família.
- **Pontos de dor ou Frustrações**: Os livros acadêmicos são muito caros, por isso ele não consegue comprá-los na maioria das vezes, e teme que isso o prejudique nos estudos.
- **Necessidades**: Precisa encontrar lojas que vendam livros acadêmicos a um preço mais acessível ou livros usados de ex alunos.
---    
   
Persona 2 → Júlia Teixeira  

Idade: 15 anos

Ocupação: Estudante do ensino médio

Faixa salarial: 0 salários mínimos 

![image](https://user-images.githubusercontent.com/103009155/222922791-bfa7937f-8a7e-4fb4-ab88-496f3d8757e4.png)

- **Interesses e estilo de vida**: Durante a semana, divide seu tempo entre os estudos e em ajudar sua mãe nas tarefas de casa. No seu tempo livre gosta de ler livros de romance e fantasia, ver filmes e cuidar de seus animais de estimação.
- **Motivações**: Sonha em ser médica veterinária, por isso faz o máximo para se dedicar nos estudos.
- **Pontos de dor ou Frustrações**: Se sente frustrada por não conseguir ler todos os livros que gostaria, pois seus pais nem sempre tem condições financeiras para comprar livros, que geralmente são caros.
- **Necessidades**: Gostaria de encontrar livrarias com livros a preços acessíveis, para que consiga ler os livros de sua lista de desejos.
---    
   
Persona 3 → Alice Ferreira

Idade: 18 anos

Ocupação: Jovem aprendiz em uma Editora de livros

Faixa salarial: Meio salário mínimo  

![image](https://user-images.githubusercontent.com/103009155/222922848-9c699699-753b-4923-88b6-8829ea1af774.png)
   
- **Interesses e estilo de vida**: Atualmente trabalha em meio período como Jovem Aprendiz em uma editora de livros. No seu tempo livre, gosta de ler todos os tipos de livros e participa de um clube de leitura.
- **Motivações**: Se esforça e dedica muito no seu trabalho, pois tem como meta ser efetivada na editora em que trabalha.
- **Pontos de dor ou Frustrações**: Como está sempre comprando livros, Alice sempre tem uma pilha de livros para doar, mas nunca sabe para quem e como fazer essa doação.
- **Necessidades**: Alice precisa encontrar um meio de doar ou vender seus livros que não são mais usados, além de querer comprar livros com preços mais baratos.
--- 

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Estudante universitário  | Comprar livros acadêmicos a um preço mais acessível    | Conseguir estudar seus conteúdos      |
|Leitora de baixa renda  | Encontrar livros a preços acessíveis      | Que eu consiga comprar e ler livros com mais frequência    |
|Leitor  | Comprar livros usados e em bom estado   | Poder ler sem precisar gastar muito        |
|Dono do sebo  | Vender livros usados e em bom estado a preços acessíveis   |  Outras pessoas possam ter acesso a livros      |
|Administrador       | Alterar, adicionar ou excluir livros           | Ter o controle de quantos e quais livros estão disponíveis no estoque  |


## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Como apresentado na introdução do projeto com o advento da tecnologia temos a possiblidade de realizar compras online. Antes tínhamos que nos deslocar as lojas locais, sebos, para adquirir livros de interesse. O projeto em questão sebos on-line, tem como característicasolucionar problemas recorrentes do dia a dia destes leitores, a qual pessoas desapegam de livros em desuso das estantes ou afins e passam adquirir com um preço bem acessível outros exemplares publicados no aplicativo, caso tenham interesse. Com o desenvolvimento de uma aplicação móvel, o usuário é capaz de divulgar os livros disponíveis para doações ou compras/vendas, para que os demais possam adquiri-los e vice-versa, através de um simples acesso a esta ferramenta.

### Descrição Geral da Proposta

Para desenvolvimento da nossa proposta utilizaremos a notação BPMN. Segundo M. Chinosi, A. Trombetta (2012), o processo de negócio (BP) é um conjunto de um ou mais procedimentos ligados ou atividades executadas seguindo uma ordem predefinida que coletivamente realizam uma meta, normalmente dentro do contexto de uma estrutura organizacional que define funções ou relacionamentos funcionais. Um processo pode estar inteiramente contido em uma única unidade organizacional, bem como pode abranger várias organizações diferentes. Nosso projeto tem como objetivo criar uma aplicação móvel que permita que leitores comprem ou doem livros (novos ou usados) sem que precisem comparecer pessoalmente ao sebo,e para isso desenvolvemos um processo AS-IS e um processo TO-BE.

### Processo 1 – PROCESSO AS-IS

Esse processo tem como característica apresentar o modelo atual de compra de livros, onde o cliente precisa ir até a loja física para adquirir seu exemplar. 

<img width="1158" alt="image" src="https://user-images.githubusercontent.com/103540696/226735972-8cab392c-171e-41f3-b9bd-abdeb7b2b395.png">


### Processo 2 – PROCESSO TO-BE

Esse processo tem como característica apresentar o modelo futuro de compra e venda de livros no sebo digital, onde o cliente pode realizar sua compra ou venda de maneira online através do aplicativo desenvolvido.

<img width="1101" alt="image" src="https://user-images.githubusercontent.com/103540696/226738585-547e9940-eb2c-4339-a893-757f5fe3b186.png">

Para essa etapa foi possível desenvolver também o processo relacionado as atividades de desenvolvimento do projeto, para que possamos ter mais assertividade para atingir nossos objetivos.

### Processo 3 – PROCESSO DESENVOLVIMENTO

<img width="1240" alt="image" src="https://user-images.githubusercontent.com/103540696/226737070-ffdc53e2-5dee-4363-a582-964be2051fc8.png">


M. Chinosi, A. Trombetta. BPMN: An introduction to the standard. Computer Standards & Interfaces 34 (2012) 124–134

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

A tabela a seguir apresenta os requisitos funcionais do projeto, identificando suas respectivas prioridades de entrega.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Cadastro de livros, autores, editoras e clientes | ALTA | 
|RF-002| Autenticação no sistema | ALTA |
|RF-001| Cadastro de clientes com nome, CPF, endereço, e-mail, senha | ALTA | 
|RF-002| Entrega do produto e confirmação da compra | ALTA | 
|RF-003| Controle de estoque e vendas de livros | MÉDIA | 
|RF-004| Geração de relatórios de vendas, estoque e clientes | MÉDIA | 
|RF-005| Pesquisa de livros por título, autor ou categoria | ALTA | 
|RF-006| O administrador do sistema poderá visualizar, alterar, excluir  e cadastrar os itens do estoque| ALTA | 
|RF-007| O usuário cliente, poderá visualizar as compras realizadas após a finalização do pedido | MÉDIA | 
|RF-008| O usuário poderá alterar os itens do carrinho de compra até a finalização do pedido | BAIXA | 

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| O sistema deve garantir a segurança dos dados dos clientes e transações financeiras |  ALTA | 
|RNF-003| O sistema deve ser intuitivo e de fácil utilização para os funcionários do sebo |  BAIXA | 
|RNF-004| O sistema deve ser capaz de suportar um grande volume de dados e transações simultâneas |  BAIXA | 
|RNF-005| O sistema deve estar disponível 24 horas por dia, 7 dias por semana, para que o sebo possa realizar vendas a qualquer momento |  BAIXA | 
|RNF-006| O sistema deve ser confiável, sem apresentar falhas ou erros frequentes |  BAIXA | 
|RNF-007| A aplicação deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge). |  BAIXA | 
|RNF-008| A aplicação deve ser publicada em um ambiente acessível publicamente na Internet |  BAIXA | 

## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir.

|ID|	Descrição|
|-------|----------------------------------------------------------------------------------------------|
|RE-01|	O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 05/06/2023.| 
|RE-02|	O aplicativo deve se restringir a utilização do FrameWork React Native no seu desenvolvimento. |
|RE-03|	A equipe não pode subcontratar o desenvolvimento do trabalho.|

## Diagrama de Casos de Uso

![UseCase DiagramV3](img/UseCaseDiagramV3.png
)

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

- Em "X" estão os requisitos funcionais e não funcionais que se adequam as queixas que os usuários aprensentam.
- O colorido mostra a relação vertical para trás ou frente e horizontal.

![image](https://user-images.githubusercontent.com/103009155/222922669-4533c728-4436-45a9-ae22-c859673e2290.png)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Já o manifesto ágil é baseado nos seguintes valores indivíduos e interações mais que processos e ferramentas, software em funcionamento mais que documentação abrangente, colaboração com o cliente mais que negociação de contratos e responder a mudanças mais que seguir um plano. O nosso projeto de desenvolvimento de software tem o objetivo de atender aos requisitos tradicionais de projetos, não obstante dos valores do manifesto ágil e sua metodologias, para esse projeto propomos uma visão híbrida do uso dos casos.

## Gerenciamento de Tempo

Para realização do acompanhamento do gerenciamento de tempo, utilizaremos a visão de Roadmap do Github. Essa visão apresenta o projeto como em um gráfico de Gantt considerando as datas de início e fim planejadas do projeto. Através dessa visão é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

<img width="1365" alt="image" src="https://user-images.githubusercontent.com/103540696/222495978-9d55127f-015e-4a66-9fdf-8b580e1da9cb.png">

Figura 2 – Gráfico acompanhamento tempo (Gantt).

## Gerenciamento de Equipe

Para a organização dos trabalhos a equipe utilizou a metodologia do Ágil Kanban com o uso de quadro de tarefas da funcionalidade “Projects” existente na plataforma do Github. Foi efetuado no Github a criação de issues (tarefas / problemas), estes itens são atribuídos a pessoas, ao projeto e a qual milestone (neste caso entrega) pertencem. Com isso, é possível a elaboração da visualização do acompanhamento por meio de lista de problemas, board Kanban de tarefas e o acompanhamento de status por meio de taxa de finalização das milestones.

<img width="1238" alt="image" src="https://user-images.githubusercontent.com/103540696/222498641-d3f841d6-b9bd-4581-980c-622ec6996b8b.png">

Figura 2 – Acompanhamento e definição de issues

<img width="1087" alt="image" src="https://user-images.githubusercontent.com/103540696/222496345-695187de-a8b1-4be2-8d24-527038b7ea21.png">

Figura 3 – Board tipo Kanban

<img width="1243" alt="image" src="https://user-images.githubusercontent.com/103540696/222498531-1bd9fe4b-e8df-438f-8242-be5f8abdddcc.png">

Figura 4 – Definição de milestones

Como metodologia de trabalho foi optado pelo uso de métodos ágeis, sendo selecionado o Scrum para a organização do time. Devido à disponibilidade da equipe, foi definido o uso de reuniões semanais (weeklies), ao invés de diárias (dailies). 
A elaboração do backlog se dará como atividade a ser realizada após cada entrega por sprint. Ou seja, após a finalização da primeira sprint, a equipe irá se reunir para tratar quais são as novas prioridades e quem será responsável por sua execução.

Para acompanhamento do desenvolvimento do projeto e gerenciamento da equipe iremos utilizar as visões de gráficos do github, como os dashboard de capacidade. Essa visão tem como objetivo apresentar a capacidade da esteira de projetos e possíveis alocações nas sprints.

<img width="979" alt="image" src="https://user-images.githubusercontent.com/103540696/222498778-4436e920-499b-4863-b283-1dd2dbb35b78.png">
<img width="802" alt="image" src="https://user-images.githubusercontent.com/103540696/222498036-76b74b9b-9b6b-4280-9a9a-b255f99d214c.png">
<img width="995" alt="image" src="https://user-images.githubusercontent.com/103540696/222497553-a2a150dd-e10d-4817-96d1-3ce5997368e9.png">

Figura 5 - Dashboard para acompanhamento das atividades nas sprints

## Equipe de Projeto

Para a equipe de projetos definiu-se os papéis de Scrum Master, Product Owner (PO) e Desenvolvedores.
Consideramos que a equipe possui 1 Scrum Master, 1 PO e 4 Desenvolvedores.


## Gestão de Orçamento

O objetivo do gerenciamento de custos é realizar um estimativa dos possíveis custos a serem dispendidos no desenvolvimento da solução de acordo com os requisitos mapeados. Como se trata de um desenvolvimento iterativo, 

Para o gerenciamento de custos esta sendo considerado a estimativa de horas de projeto a serem alocadas por pessoa, com relação ao custo de homem-hora, além de considerar custos fixos com equipamentos para o desenvolvimento das atividades.

Para a estimativa de custos foi considerado o prazo de 100 dias úteis para a execução do projeto. Com uma equipe de 6 pessoas, composta por um Scrum Master, um PO e 4 desenvolvedores. O Scrum master atua em 4 projetos concomitantes. O PO atua em dois projetos, atuando em metade do período de desenvolvimento. Os desenvolvedores trabalham em tempo integral.

Tabela de salários:

<img width="380" alt="image" src="https://user-images.githubusercontent.com/103540696/222000301-6cbc6906-60a3-4e93-b6aa-2d79b33c2e52.png">
Tabela 1 – Salários-hora considerados

Estimativa de Custos:

<img width="523" alt="image" src="https://user-images.githubusercontent.com/103540696/222000423-9c7cd0ff-3b1f-4f31-b81f-a5af12318bb7.png">
Tabela 2 – Custos totais estimados
