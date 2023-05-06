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


## Redefinir Senha (RF-002 / RNF-001,002,003,004,006,007,008)

A Tela de Redefinir Senha do aplicativo "Sebo Virtual" o usuário poderá alterar a senha cadastrada na aplicação.

![image](https://user-images.githubusercontent.com/103009155/236588875-15e9c885-c3c2-4b79-9c9e-3990bdfa44bc.png)

### Requisitos atendidos 

- RF-002 - Autenticação no sistema.
- RNF-001 - O sistema deve ser responsivo para rodar em um dispositivos móvel.
- RNF-002 - O sistema deve garantir a segurança dos dados dos clientes e transações financeiras
- RNF-003 - O sistema deve ser intuitivo e de fácil utilização para os funcionários do sebo.
- RNF-004 - O sistema deve ser capaz de suportar um grande volume de dados e transações simultâneas
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
        import { ViewContainer } from "../../ui/style/style";

        import { Form, SubTitle } from "./style";

        function RedefinePassword({ navigation }) {
        function teste() {
        console.log("redefinido");
        }

        return (
        <ViewContainer>
        <SubTitle>
        Digite aqui o e-mail já cadastrado, caso não possua é necessário realizar o cadastro:
        {"\n"}
        </SubTitle>

        <Form>
        <Label title="E-mail" />
        <Input placeholder="E-mail" />
        <Spacer margin="xx" />

        <SubTitle>Digite a nova senha abaixo: {"\n"}</SubTitle>

        <Label title="Senha" />
        <Input placeholder="Senha" />
        <Spacer margin="xx" />

        <Label title="Confirme a senha" />
        <Input placeholder="Confirme a senha" />
        <Spacer margin="xx" />

        <SubTitle>
        Sua senha deve conter: {"\n"} {"\n"}- Crie uma senha com no mínimo 8
        caracteres {"\n"}- Adicione letra minúsculas {"\n"}- Adicione pelo
        menos uma letra maiúscula
        </SubTitle>
        <Spacer margin="xx" />

        <ButtonPrimary title="Redefinir senha" onPress={teste} />
        </Form>
        <Spacer margin="xx" />

        </ViewContainer>
        );
        }

        export default RedefinePassword;
     
        
### Instruções de acesso 

Caso o usuário esqueça a senha, ele poderá clicar no botão esqueci minha senha na tela de login, ele será encaminhado para a tela Redefinir Senha em que deverá digitar o e-mail cadastrado, nova senha, confirmar a senha para que possa atualizar o sistema com a senha atribuída. 


## Cadastre-se (RF-002,003 / RNF-001,002,003,004,006,007,008)

A Tela de Cadastro do aplicativo "Sebo Virtual" o usuário deve preencher obrigatório: nome, e-mail, senha e confirmar senha. Para atribuir a função de Create, Edit, Details e Delete. Para quaisquer tipos de alterações das informações dos dados no Json Server. 

![image](https://user-images.githubusercontent.com/103009155/236588956-f37a96d3-7c49-42c7-987b-7e4e84a86617.png)

### Requisitos atendidos 

- RF-002 - Autenticação no sistema.
- RF-003 - Cadastro de clientes com nome, CPF, endereço, e-mail, senha
- RNF-001 - O sistema deve ser responsivo para rodar em um dispositivos móvel.
- RNF-002 - O sistema deve garantir a segurança dos dados dos clientes e transações financeiras
- RNF-003 - O sistema deve ser intuitivo e de fácil utilização para os funcionários do sebo.
- RNF-004 - O sistema deve ser capaz de suportar um grande volume de dados e transações simultâneas
- RNF-006 - O sistema deve ser confiável, sem apresentar falhas ou erros frequentes.
- RNF-007 - A aplicação deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge).
- RNF-008 - A aplicação deve ser publicada em um ambiente acessível publicamente na Internet.

### Artefatos da funcionalidade 

- index.tsx
- style.ts

### Estrutura de Dados 

        import React, { useState } from "react";
        import ButtonPrimary from "../../components/Forms/ButtonPrimary";
        import Input from "../../components/Forms/Input";
        import Label from "../../components/Forms/Label";
        import Spacer from "../../components/Spacer";
        import { ViewContainer } from "../../ui/style/style";
        import { postUsers } from "../../services/api";
        import { Form, SubTitle } from "./style";
        import { IUser } from "../../ui/interfaces";
        import { checkPass } from "../../utils/validators";

        function Register({ navigation }) {
        const [pass, setPass] = useState<string>();
        const [confirmPass, setConfirmPass] = useState<string>();
        const [user, setUser] = useState<IUser>({
        id: 0,
        name: "",
        email: "",
        password: "",
        });

       async function createUser() {
       if (user.email && user.name && user.password) {
       const response = await postUsers(user);

       if (response === "success post") {
        return navigation.navigate("Login");
       }

       alert(
       "Estamos com uma instabilidade, por favor, tente novamente mais tarde!"
       );
       } else {
       alert("Por favor, preencher todos os dados para efetuar cadastro.");
       }
       }

       function submitForm() {
       if (checkPass(pass, confirmPass)) {
       setUser((old) => {
       return { ...old, password: pass };
       });
       createUser();
       }
       }

        return (
        <ViewContainer>
        <Spacer margin={"sx"} />

        <Form>
        <Label title="Nome" />
        <Input
        placeholder="Nome"
        onChangeText={(ev) =>
        setUser((old) => {
        return { ...old, name: ev };
        })
        }
        />
        <Spacer margin="xx" />

        <Label title="E-mail" />
        <Input
        placeholder="E-mail"
        onChangeText={(ev) =>
        setUser((old) => {
        return { ...old, email: ev };
        })
        }
        />
        <Spacer margin="xx" />

        <Label title="Senha" />
        <Input placeholder="Senha" onChangeText={setPass} />
        <Spacer margin="xx" />

        <Label title="Confirme a senha" />
        <Input placeholder="Confirme a senha" onChangeText={setConfirmPass} />
        <Spacer margin="xx" />

        <SubTitle>
        Sua senha deve conter: {"\n"} {"\n"}- Crie uma senha com no mínimo 8
        caracteres {"\n"}- Adicione letra minúsculas {"\n"}- Adicione pelo
        menos uma letra maiúscula {"\n"}- Adicione pelo menos um caractere
        especial
        </SubTitle>
        <Spacer margin="xx" />

        <ButtonPrimary title="Cadastrar" onPress={submitForm} />
        </Form>
        <Spacer margin={"xx"} />
        </ViewContainer>
        );
        }

        export default Register;
     
        
### Instruções de acesso 

Para efetuar o cadastro, o usuário deverá clicar no botão Cadastre-se na tela inicial.


## Perfil (RF-002 / RNF-001,002,003,006,007,008)

A Tela de Perfil do aplicativo "Sebo Virtual" o usuário possui acesso aos meus pedidos, informações pessoais e deletar a conta.  

![image](https://user-images.githubusercontent.com/103009155/236589008-1058cd2a-2cbb-49da-b9fb-5d32eb03838b.png)

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

        //Style
        import { LogoContainer, ViewContainer } from "../../ui/style/style";
        import { Header, Form, SubTitle } from "./style";
        import theme from "../../ui/style/theme";

        //Components
        import ButtonPrimary50 from "../../components/Forms/ButtonPrimary50";
        import ButtonSecundary from "../../components/Forms/ButtonSecundary";
        import Input from "../../components/Forms/Input";
        import Label from "../../components/Forms/Label";
        import {
        View,
        Text,
        TouchableOpacity,
        TouchableOpacityProps,
        StatusBar,
        } from "react-native";
        import ButtonNavBar from "../../components/Forms/ButtonNavBar";
        import ButtonIcon from "../../components/Forms/ButtonIcon";
        import Spacer from "../../components/Spacer";
        import { SafeAreaView } from "react-native-safe-area-context";

        //Icons
        import Icon from "@expo/vector-icons/Ionicons";


        function Profile({ navigation }) {
        return (
        <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
        <ViewContainer>
        <Spacer margin="ms" />

        <Header>
        <Text>{"\n"}</Text>
        <Icon name="person" size={100} color="#005f83" />
        <Text>{"Usuário"}</Text>
        </Header>

        <Text>{"\n\n\n"}</Text>
        <ButtonIcon
        title="Meus Pedidos"
        onPress={() => navigation.navigate("")}
        />

        <Form>
        <Text>{"\n\n"}</Text>
        <SubTitle>Conta {"\n"} </SubTitle>

        <TouchableOpacity
        onPress={() => navigation.navigate("Informacoes Pessoais")}
        >
        <Text>Informações Pessoais</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => navigation.navigate("TelaDeDestino")}
        >
        <Text>Deletar conta</Text>
        </TouchableOpacity>

        <Spacer margin="xx" />

        <View
        style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingBottom: 44,
        }}
        >
        <ButtonSecundary
        title="Sair"
        onPress={() => navigation.navigate("Inicial")}
        style={{ marginRight: 5 }}
        />
        </View>
        </Form>
        </ViewContainer>
        <ButtonNavBar />
        </SafeAreaView>
        );
        }

        export default Profile;
     
        
### Instruções de acesso 

Para efetuar a tela Perfil, o usuário deverá estar logado e clicar no ícone Perfil do menu inferior da tela Home.


## Informações pessoais (RF-002,003 / RNF-001,002,003,004,006,007,008)

A Tela de Informações pessoais do aplicativo "Sebo Virtual" o usuário poderá editar ou visualizar os dados já efetuados no cadastro: nome do usuário, e-mail, senha atual, nome completo, CPF e Data de Nascimento. Para atribuir a função de Create, Edit, Details e Delete. Para quaisquer tipos de alterações das informações dos dados no Json Server. 

![image](https://user-images.githubusercontent.com/103009155/236589030-66539902-07ae-453a-a4bb-87fb53405ac5.png)

### Requisitos atendidos 

- RF-002 - Autenticação no sistema.
- RF-003 - Cadastro de clientes com nome, CPF, endereço, e-mail, senha
- RNF-001 - O sistema deve ser responsivo para rodar em um dispositivos móvel.
- RNF-002 - O sistema deve garantir a segurança dos dados dos clientes e transações financeiras
- RNF-003 - O sistema deve ser intuitivo e de fácil utilização para os funcionários do sebo.
- RNF-004 - O sistema deve ser capaz de suportar um grande volume de dados e transações simultâneas
- RNF-006 - O sistema deve ser confiável, sem apresentar falhas ou erros frequentes.
- RNF-007 - A aplicação deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge).
- RNF-008 - A aplicação deve ser publicada em um ambiente acessível publicamente na Internet.

### Artefatos da funcionalidade 

- index.tsx
- style.ts

### Estrutura de Dados 

        import React from "react";
        import ButtonPrimary50 from "../../components/Forms/ButtonPrimary50";
        import ButtonSecundary50 from "../../components/Forms/ButtonSecundary50";
        import Input from "../../components/Forms/Input";
        import Label from "../../components/Forms/Label";
        import Spacer from "../../components/Spacer";
        import { LogoContainer, ViewContainer } from "../../ui/style/style";
        import theme from "../../ui/style/theme";
        import { SafeAreaView, StatusBar, View } from "react-native";
        import Icon from "@expo/vector-icons/Ionicons";
        import ButtonNavBar from "../../components/Forms/ButtonNavBar";

        import { Header, Form, SubTitle } from "./style";

        function InformationPeople({ navigation }) {
        return (
        <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
        <ViewContainer>
        <Header>
        <Icon name="person" size={80} color="#767676" />
        </Header>

        <Form>
        <SubTitle> Conta {"\n"} </SubTitle>
        <Label title="Nome do Usuário" />
        <Spacer margin={"xs"} />
        <Input placeholder="Arthur Valentin" />
        <Spacer margin={"xs"} />

        <Label title="Email" />
        <Spacer margin={"xs"} />
        <Input placeholder="arthur.valentin@gmail.com" />
        <Spacer margin={"xs"} />

        <Label title="Senha Atual" />
        <Spacer margin={"xs"} />
        <Input placeholder="*************" />
        <Spacer margin={"xx"} />

        <SubTitle> Pessoal {"\n"} </SubTitle>
        <Label title="Nome Completo" />
        <Spacer margin={"xs"} />
        <Input placeholder="Arthur Valentin Ferreira" />
        <Spacer margin={"xs"} />

        <Label title="CPF" />
        <Spacer margin={"xs"} />
        <Input placeholder="123.456.789-10" />
        <Spacer margin={"xs"} />

        <Label title="Data de Nascimento" />
        <Spacer margin={"xs"} />
        <Input placeholder="20/03/2000" />
        <Spacer margin={"xx"} />

         <View
         style={{
         flexDirection: "row",
         justifyContent: "space-between",
         paddingBottom: 44,
         paddingHorizontal: 6,
         }}
         >
         <ButtonSecundary50
         title="Cancelar"
         onPress={() => navigation.navigate("Login")}
         />
         <ButtonPrimary50
         title="Salvar"
         onPress={() => navigation.navigate("")}
         />
         </View>
         </Form>
         </ViewContainer>
         <ButtonNavBar />
         </SafeAreaView>
         );
         }

         export default InformationPeople;
        
        
### Instruções de acesso 

Para acessar a tela de informações pessoais, o usuário deve estar logado a conta para direcionar de imediato na tela Home, que contém o ícone de perfil no menu inferior. Clicando será direcionado a tela Perfil que possui o botão Informações pessoais. 
