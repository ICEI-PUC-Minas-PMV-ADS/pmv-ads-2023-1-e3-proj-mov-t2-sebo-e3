# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional. 

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

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
|RF-006| Controle de pagamentos | ALTA | 


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

![UseCaseDiagramV2.pngUseCase DiagramV2](img/UseCaseDiagramV2.png)

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

![Exemplo de matriz de rastreabilidade](img/02-matriz-rastreabilidade.png)

> **Links Úteis**:
> - [Artigo Engenharia de Software 13 - Rastreabilidade](https://www.devmedia.com.br/artigo-engenharia-de-software-13-rastreabilidade/12822/)
> - [Verificação da rastreabilidade de requisitos usando a integração do IBM Rational RequisitePro e do IBM ClearQuest Test Manager](https://developer.ibm.com/br/tutorials/requirementstraceabilityverificationusingrrpandcctm/)
> - [IBM Engineering Lifecycle Optimization – Publishing](https://www.ibm.com/br-pt/products/engineering-lifecycle-optimization/publishing/)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Já o manifesto ágil é baseado nos seguintes valores indivíduos e interações mais que processos e ferramentas, software em funcionamento mais que documentação abrangente, colaboração com o cliente mais que negociação de contratos e responder a mudanças mais que seguir um plano. O nosso projeto de desenvolvimento de software tem o objetivo de atender aos requisitos tradicionais de projetos, não obstante dos valores do manifesto ágil e sua metodologias, para esse projeto propomos uma visão híbrida do uso dos casos.

## Gerenciamento de Tempo

Para realização do acompanhamento do gerenciamento de tempo, utilizaremos a visão de Roadmap do Github. Essa visão apresenta o projeto como em um gráfico de Gantt considerando as datas de início e fim planejadas do projeto. Através dessa visão é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

<img width="1365" alt="image" src="https://user-images.githubusercontent.com/103540696/222495978-9d55127f-015e-4a66-9fdf-8b580e1da9cb.png">

Figura 2 – Gráfico acompanhamento tempo (Gantt).

## Gerenciamento de Equipe

Para a organização dos trabalhos a equipe utilizou a metodologia do Ágil Kanban com o uso de quadro de tarefas da funcionalidade “Projects” existente na plataforma do Github. Foi efetuado no Github a criação de issues (tarefas / problemas), estes itens são atribuídos a pessoas, ao projeto e a qual milestone (neste caso entrega) pertencem. Com isso, é possível a elaboração da visualização do acompanhamento por meio de lista de problemas, board Kanban de tarefas e o acompanhamento de status por meio de taxa de finalização das milestones.

<img width="802" alt="image" src="https://user-images.githubusercontent.com/103540696/222498206-6f282371-29ab-48cc-aba3-0349e915553d.png">

Figura 2 – Acompanhamento e definição de issues

<img width="1087" alt="image" src="https://user-images.githubusercontent.com/103540696/222496345-695187de-a8b1-4be2-8d24-527038b7ea21.png">

Figura 3 – Board tipo Kanban

<img width="802" alt="image" src="https://user-images.githubusercontent.com/103540696/222498315-41208f46-098e-44c4-a30e-a4ade7c3a69b.png">

Figura 4 – Definição de milestones

Como metodologia de trabalho foi optado pelo uso de métodos ágeis, sendo selecionado o Scrum para a organização do time. Devido à disponibilidade da equipe, foi definido o uso de reuniões semanais (weeklies), ao invés de diárias (dailies). 
A elaboração do backlog se dará como atividade a ser realizada após cada entrega por sprint. Ou seja, após a finalização da primeira sprint, a equipe irá se reunir para tratar quais são as novas prioridades e quem será responsável por sua execução.

Para acompanhamento do desenvolvimento do projeto e gerenciamento da equipe iremos utilizar as visões de gráficos do github, como os dashboard de capacidade. Essa visão tem como objetivo apresentar a capacidade da esteira de projetos e possíveis alocações nas sprints.

<img width="802" alt="image" src="https://user-images.githubusercontent.com/103540696/222497883-911ff39d-403f-4b19-9bd9-770905127ea7.png">
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
