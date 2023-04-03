# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo:

## Tela Inicial (RF-002,003 / RNF-001,003,006,007,008)

A Tela Inicial do aplicativo "Sebo Virtual" apresenta as boas-vindas para os usuários que detêm de uma conta e gostaria de realizar o seu login ou para aqueles que estão tendo o primeiro contato realizarem o seu cadastro no aplicativo.   

![image](https://user-images.githubusercontent.com/103009155/229544172-647ed1dd-b669-45b0-a658-9036e3682f21.png)

### Requisitos atendidos 

- RF-002 - Autenticação no sistema.
- RF-003 - Cadastro de clientes com nome, CPF, endereço, e-mail, senha.
- RNF-001 - O sistema deve ser responsivo para rodar em um dispositivos móvel.
- RNF-003 - O sistema deve ser intuitivo e de fácil utilização para os funcionários do sebo.
- RNF-006 - O sistema deve ser confiável, sem apresentar falhas ou erros frequentes.
- RNF-007 - A aplicação deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge).
- RNF-008 - A aplicação deve ser publicada em um ambiente acessível publicamente na Internet.

### Artefatos da funcionalidade 

- index.tsx
- style.ts

### Estrutura de Dados 

        import React from "react";
        import { Linking, Text } from "react-native";
        import ButtonPrimary from "../../components/Forms/ButtonPrimary";
        import ButtonSecundary from "../../components/Forms/ButtonSecundary";
        import { Label } from "../../components/Forms/Label/style";
        import Spacer from "../../components/Spacer";
        import { LogoContainer, Title, ViewContainer } from "../../ui/style/style";
        import { Header, SubTitle } from "./style";

        function Initial({ navigation }) {
        return (
        <ViewContainer>
        <Header>
        <LogoContainer wdt={133} hgt={131} radius={84}></LogoContainer>
        </Header>

        <Title>Boas-vindas ao Sebo!</Title>
        <Spacer margin={"xx"} />

        <SubTitle>
        Lorem ipsum dolor sit amet consectetur. Congue consequat
        </SubTitle>
        <Spacer margin={"xxx"} />

        <ButtonPrimary title="Fazer Login" onPress={() => navigation.navigate('Login')} />
        <Spacer margin={"mx"} />

        <ButtonSecundary title="Cadastre-se"  onPress={() => navigation.navigate('Cadastre-se')} />
        <Spacer margin={"xx"} />

        <SubTitle>Entrar como convidado</SubTitle>
        <Spacer margin={"xx"} />
        </ViewContainer>
        );
        }

        export default Initial;
     
        
### Instruções de acesso 

Para efetuar a tela inicial, basta o usuário iniciar o aplicativo "Sebo Virtual".


## Login (RF-002 / RNF-001,002,003,006,007,008)

A Tela de Login do aplicativo "Sebo Virtual" o usuário poderá efetuar o acesso com o e-mail e a senha informados quando for feito o cadastro. 

![image](https://user-images.githubusercontent.com/103009155/229545050-c06bb1bb-1840-4c6d-b4d2-70fd557fb1bd.png)

### Requisitos atendidos 

- RF-002 - Autenticação no sistema.
- RNF-001 - O sistema deve ser responsivo para rodar em um dispositivos móvel.
- RNF-002 - O sistema deve garantir a segurança dos dados dos clientes e transações financeiras
- RNF-003 - O sistema deve ser intuitivo e de fácil utilização para os funcionários do sebo.
- RNF-006 - O sistema deve ser confiável, sem apresentar falhas ou erros frequentes.
- RNF-007 - A aplicação deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge).
- RNF-008 - A aplicação deve ser publicada em um ambiente acessível publicamente na Internet.

### Artefatos da funcionalidade 

- index.tsx
- style.ts

### Estrutura de Dados 

        import React from "react";
        import ButtonPrimary from "../../components/Forms/ButtonPrimary";
        import Input from "../../components/Forms/Input";
        import Label from "../../components/Forms/Label";
        import Spacer from "../../components/Spacer";
        import { LogoContainer, ViewContainer } from "../../ui/style/style";
        import theme from "../../ui/style/theme";

        import {
        Header,
        Form,
        ForgotPassword,
        OrContainer,
        OrLine,
        OrTitle,
        ConectContainer,
        Conect,
        EnterLogin,
        } from "./style";

        function Login({ navigation }) {
  
        function teste() {
        console.log("teste");
        }

        return (
        <ViewContainer>
        <Header>
        <LogoContainer
        wdt={83}
        hgt={83}
        radius={theme.radius.xx}
        ></LogoContainer>
        </Header>

        <Form>
        <Label title="E-mail" />
        <Input placeholder="Login" />
        <Spacer margin="xx" />

        <Label title="Senha" />
        <Input placeholder="Senha" />

        <ForgotPassword>Esqueci minha senha</ForgotPassword>
        <Spacer margin="xx" />

        <ButtonPrimary title="Entrar" onPress={teste} />
        </Form>
        <Spacer margin="xx" />

        <OrContainer>
        <OrLine></OrLine>
        <OrTitle> ou </OrTitle>
        <OrLine></OrLine>
        </OrContainer>
        <Spacer margin="xx" />

        <EnterLogin>Entre com:</EnterLogin>
        <Spacer margin="mx" />

        <ConectContainer>
        <Conect></Conect>
        <Conect></Conect>
        <Conect></Conect>
        </ConectContainer>
        </ViewContainer>
        );
        }

        export default Login;
     
        
### Instruções de acesso 

Para efetuar o login o usuário deverá clicar no botão fazer login na tela inicial, preencher os campos login e senha e apertar o botão entrar, caso não saiba a senha poderá apertar o campo esqueci minha senha, para ser redirecionado para a página de alteração da senha cadastrada.
