# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo:


## Tela Inicial (RF-002,003 / RNF-001,003,006,007,008)

A Tela Inicial do aplicativo "Sebo Virtual" apresenta as boas-vindas para os usuários que detêm de uma conta e gostaria de realizar o seu login ou para aqueles que estão tendo o primeiro contato realizarem o seu cadastro no aplicativo.   

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t2-sebo-e3/assets/103009155/e7dc8538-610c-4b26-a2d5-8db7b2cb1286)

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

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t2-sebo-e3/assets/103009155/2431b0af-88b4-4ff6-b011-573329929203)

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

![image](https://user-images.githubusercontent.com/103009155/236589194-68a0c348-aed2-452f-bece-2f6d0d27ac25.png)

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

![image](https://user-images.githubusercontent.com/103009155/236589233-e1b2566b-349a-4eee-a24d-5f1e48896cdd.png)

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

![image](https://user-images.githubusercontent.com/103009155/236589276-25379661-8dfc-4978-b813-42df93b3acae.png)

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

![image](https://user-images.githubusercontent.com/103009155/236589304-2731029e-cb78-438b-8a94-1a726e0037c5.png)

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


## Home (RF-002,007 / RNF-001,002,003,004,006,007,008)

A Tela de Home do aplicativo "Sebo Virtual" o usuário passa a ver todos os livros acessíveis, podendo ver a descrição e realizar a compra do mesmo.  

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t2-sebo-e3/assets/103009155/2e742a52-1f9f-4892-a80c-f85af9550c0f)

### Requisitos atendidos 

- RF-002 - Autenticação no sistema.
- RF-007 - Pesquisa de livros por título, autor ou categoria
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

        import {
        ScrollView,
        View,
        Image,
        SafeAreaView,
        StatusBar,
        Text,
        FlatList,
        Dimensions,
        Animated,
        } from "react-native";
        import { BookText, Card, LogoImage, Main } from "./style";
        import React from "react";
        import Spacer from "../../components/Spacer";
        import { ViewContainer } from "../../ui/style/style";
        import Label from "../../components/Forms/Label";
        import theme from "../../ui/style/theme";
        import ButtonNavBar from "../../components/Forms/ButtonNavBar";
        import { ExpandingDot } from "react-native-animated-pagination-dots";

        const dimensions = Dimensions.get("window");
        const imageWidth = dimensions.width;

        const DATA = [
        {
        id: "0",
        title: "É assim que aca.",
        autor: "Collen Hoover",
        price: "12,50",
        },
        {
        id: "1",
        title: "É assim que aca.",
        autor: "Collen Hoover",
        price: "14,50",
        },
        {
        id: "2",
        title: "É assim que aca.",
        autor: "Collen Hoover",
        price: "16,50",
        },
        {
        id: "3",
        title: "É assim que aca.",
        autor: "Collen Hoover",
        price: "18,50",
        },
        ];

        const BANNERS = [
        {
        id: "0",
        image: require("../../assets/banner.png"),
        },
        {
        id: "1",
        image: require("../../assets/banner.png"),
        },
        ];

        function Home({ navigation }) {
        const Item = ({ title, autor, price }) => (
        <Card>
        <Image
        style={{ width: 87, height: 100, margin: "auto" }}
        source={require("../../assets/Capa.png")}
        />
        <Main>
        <BookText>{title}</BookText>
        <BookText style={{ fontSize: 10 }}>{autor}</BookText>
        <BookText style={{ fontSize: theme.fonts.obs }}>
        R$
        <BookText style={{ fontSize: theme.fonts.text }}>{price}</BookText>
        </BookText>
        </Main>
        </Card>
        );

        const ItemImages = ({ image }) => (
        <Image resizeMode="stretch" style={{ marginHorizontal: 20}} source={image} />
        );
        const scrollX = React.useRef(new Animated.Value(0)).current;

        return (
        <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
        <ViewContainer>
        <View style={{ alignItems: "center" }}>
        <LogoImage source={require("../../assets/sebo-logo-home.png")} />

        <FlatList
        data={BANNERS}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        {
        useNativeDriver: false,
        }
        )}
        pagingEnabled
        horizontal
        decelerationRate={"normal"}
        scrollEventThrottle={16}
        renderItem={({ item }) => <ItemImages image={item.image} />}
        />
        <ExpandingDot
        data={BANNERS}
        expandingDotWidth={30}
        scrollX={scrollX}
        inActiveDotOpacity={0.6}
        dotStyle={{
        width: 10,
        height: 10,
        backgroundColor: "#347af0",
        borderRadius: 5,
        marginHorizontal: 5,
        }}
        containerStyle={{
        position: "relative",
        bottom: -10,
        }}
        />
        </View>

        <Spacer margin={"mx"} />

        <BookText style={{ marginBottom: 16, color: theme.colors.text_dark }}>
        Livros mais pedidos
        </BookText>
        <FlatList
        data={DATA}
        renderItem={({ item }) => (
        <Item title={item.title} autor={item.autor} price={item.price} />
        )}
        keyExtractor={(item) => item.id}
        horizontal
        />

        <Spacer margin={"mx"} />

        <BookText style={{ marginBottom: 16, color: theme.colors.text_dark }}>
        Sobre Tecnologia
        </BookText>
        <FlatList
        data={DATA}
        renderItem={({ item }) => (
        <Item title={item.title} autor={item.autor} price={item.price} />
        )}
        keyExtractor={(item) => item.id}
        horizontal
        />
        <Spacer margin={"mx"} />
        </ViewContainer>
        <ButtonNavBar navigation={navigation} />
        </SafeAreaView>
        );
        }

        export default Home;
        
        
### Instruções de acesso 

Para acessar a tela de Home, o usuário deve estar logado a conta para direcionar de imediato. 


## Carrinho (RF-004,009,010 / RNF-001,002,003,004,006,007,008)

A Tela de Carrinho do aplicativo "Sebo Virtual" o usuário passa a comprar os livros. Tendo como opção de editar e excluir, após realizado a compra sinaliza um alerta com a frase de pedido confirmado.  

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t2-sebo-e3/assets/103009155/bfbfc37f-3eff-4cec-89ed-49b55a431abd)

### Requisitos atendidos 

- RF-004 - Entrega do produto e confirmação da compra
- RF-009 - O usuário cliente, poderá visualizar as compras realizadas após a finalização do pedido
- RF-010 - O usuário poderá alterar os itens do carrinho de compra até a finalização do pedido
- RF-007 - Pesquisa de livros por título, autor ou categoria
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
        import { Image, View } from "react-native";
        import ButtonPrimary from "../../components/Forms/ButtonPrimary";
        import ButtonSecundary from "../../components/Forms/ButtonSecundary";
        import Spacer from "../../components/Spacer";
        import { ViewContainer } from "../../ui/style/style";
        import { OrContainer, OrLine, SubTitle, Tab, Title } from "./style";
        import Icon from "@expo/vector-icons/Ionicons";
        import ButtonNavBar from "../../components/Forms/ButtonNavBar";
        import { SafeAreaView, StatusBar } from "react-native";

        function Cart({ navigation }) {
        return (
        <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
        <ViewContainer>
        <View style={{ flexDirection: "row" }}>
        <Image
        style={{ width: 120, height: 150 }}
        source={require("../../assets/Capa.png")}
        />

        <View style={{ marginTop: 10 }}>
        <Title>Trono de Vidro - Vol 1</Title>

        <SubTitle>Sarah J. Maas</SubTitle>
        <Spacer margin="xx" />

        <View style={{ flexDirection: "row" }}>
        <Title>R$ 15,80</Title>
        <Icon
        style={{ paddingHorizontal: 95 }}
        name="trash"
        size={25}
        color="#767676"
        />

        <Spacer margin="xx" />
        </View>
        </View>
        </View>

        <Spacer margin="xx" />

        <OrContainer>
        <OrLine></OrLine>
        <OrLine></OrLine>
        </OrContainer>

        <Title> {"\n"} Resumo da compra</Title>

        <Spacer margin="xx" />

        <Tab>
        <SubTitle>Produto</SubTitle>
        <SubTitle>R$ 15,80</SubTitle>
        </Tab>

        <Tab>
        <SubTitle>Frete Fixo</SubTitle>
        <SubTitle>R$ 12,00</SubTitle>
        </Tab>

        <Tab>
        <SubTitle>Desconto</SubTitle>
        <SubTitle>R$ 00,00</SubTitle>
        </Tab>

        <Spacer margin="xx" />

        <Tab>
        <SubTitle>Total</SubTitle>
        <SubTitle>R$ 27,80</SubTitle>
        </Tab>

        <Spacer margin="xx" />

        <ButtonPrimary
        title="Comprar"
        onPress={() => navigation.navigate("Login")}
        />
        <Spacer margin={"mx"} />

        <ButtonSecundary
        title="Continuar comprando"
        onPress={() => navigation.navigate("")}
        />
        <Spacer margin={"mx"} />
        </ViewContainer>
        <ButtonNavBar navigation={navigation} />
        </SafeAreaView>
        );
        }

        export default Cart;
        
        
### Instruções de acesso 

Para acessar a tela de Carrinho, o usuário deve estar logado a conta para direcionar de imediato a Home e após, o mesmo, irá adicionar um livro com intuito de compra e será encaminhado ao carrinho que terá todos os passos para que o pedido seja realizado.


## Endereço (RF-004 / RNF-001,002,003,004,006,007,008)

A Tela de Endereço do aplicativo "Sebo Virtual" o usuário passa as informações sobre a sua residência para que o livro chegue no local onde mora.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t2-sebo-e3/assets/103009155/10946d1e-3d8f-4ffb-a062-3235264fd0f9)

### Requisitos atendidos 

- RF-004 - Entrega do produto e confirmação da compra
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
        import { getUsers, postUsers } from "../../services/api";
        import { Form, Header, SubTitle } from "./style";
        import { IAddress, IUser } from "../../ui/interfaces";
        import { checkEmail, checkName, checkPass } from "../../utils/validators";
        import ButtonNavBar from "../../components/Forms/ButtonNavBar";
        import { SafeAreaView } from "react-native-safe-area-context";
        import { StatusBar, Dimensions, View, Text, TextInput } from "react-native";
        import theme from "../../ui/style/theme";
        import axios from 'axios';
  


        function Address({ navigation }) {

        const [logradouro, setLogradouro] = useState('');
        const [numero, setNumero] = useState('');
        const [complemento, setComplemento] = useState('');
        const [bairro, setBairro] = useState('');
        const [cidade, setCidade] = useState('');
        const [estado, setEstado] = useState('');
        const [cep, setCEP] = useState('');


        const saveData = async () => {
        try {
        const response = await axios.post('http://192.168.1.11:3000/address', { logradouro, numero,complemento, bairro, cidade, estado, cep });
        //const response = await axios.post('http://192.168.0.104:3000/address', { logradouro, numero,complemento, bairro, cidade, estado, cep });
        console.log('Dados salvos:', response.data);
        } catch (error) {
        console.error('Erro ao salvar os dados:', error);
        }
        };

        /*
        const [address, setAddress] = useState<IAddress>({
        id: 0,
        logradouro: "",
        numero: "",
        complemento: "",
        bairro: "",
        cidade: "",
        estado: "",
        cep: ""
        });

 

        async function createAddress() {
        if (address.logradouro && address.cidade && address.estado) {
        const response = await createAddress();

        if (response === "success post") {
        return navigation.navigate("Address");
        }

        alert(
        "Estamos com uma instabilidade, por favor, tente novamente mais tarde!"
        );
        }
        alert("Por favor, preencher todos os dados para efetuar cadastro.");
        }
        */
        async function submitForm() {

        //createAddress();

        /* const response = await getUsers();
        if (response.length > 0) {
        for (let i = 0; i < response.length; i++) {
        if (user.email === response[i].email) {
        alert("email já cadastrado!");
        return false;
        }
        }
        }
        */
        //if (checkName(user.name)) {
        // if (checkEmail(user.email)) {
        //   if (checkPass(user.password, confirmPass)) {
        //     createUser();
        //  }
        //}
        // }
        }

        //function navPages() {
        //  navigation.navigate("Endereco")
        //style={{flexDirection: 'row'}}
        //}


    
  
        function navPages() {
        navigation.navigate("Endereço")
        }
    

        const { width } = Dimensions.get('window');
        return (
        <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
        <ViewContainer >
        <Spacer margin={"sx"} />
        <SubTitle>Endereço {"\n"} </SubTitle>
        <Form>
        <Label title="Logradouro" />
        <Input
        placeholder="Rua/Avenida"
        onChangeText={setLogradouro}
        value={logradouro} 
        />
        <Spacer margin="xx" />

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ flex: 1 }}>
        <Text>Número</Text>
        <Input
        placeholder="Informe o número da residência"
        onChangeText={setNumero}
        value={numero}
        />
        </View>
        <View style={{ flex: 1 }}>
        <Text>Complemento</Text>
        <Input
        placeholder="Informe o  complemento "
        onChangeText={setComplemento}
        value={complemento}
        />
        </View>
        </View>
      
        <Spacer margin="xx" />

        <Label title="Bairro" />
        <Input placeholder="Informe o bairro"           onChangeText={setBairro}
        value={bairro} />
        <Spacer margin="xx" />
        
        <Label title="Cidade" />
        <Input placeholder="Informe a cidade" onChangeText={setCidade} value={cidade}/>
        
        <Spacer margin="xx" />
        
      
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ flex: 1 }}>
        <Text>Estado</Text>
        <Input placeholder="Informe o estado" onChangeText={setEstado} value={estado}  />
        </View>
        <View style={{ flex: 1 }}>
        <Text>CEP</Text>
        <Input placeholder="Informe o CEP" onChangeText={setCEP} value={cep} />
        </View>
        </View>
        <Spacer margin="xx" />       
       
        

        <ButtonPrimary title="Continuar" onPress={saveData} />
        </Form>
        <Spacer margin={"xx"} />
        </ViewContainer>
        <ButtonNavBar navigate={navPages}/>
        </SafeAreaView>
        );
        }

        export default Address;
        
     
### Instruções de acesso 

Para acessar a tela de Endereço, o usuário deve estar logado a conta para direcionar de imediato a Home e após, o mesmo, irá adicionar um livro com intuito de compra e será encaminhado ao carrinho que terá todos os passos. Sendo que um deles contém o preenchimento do endereço, através do Json server funcionando para abastecer o Banco de Dados com as informações dos clientes.


## Estoque (RF-001,002,005,006,007 / RNF-001,002,003,004,006,007,008)

A Tela de Estoque do aplicativo "Sebo Virtual" o administrador poderá controlar o estoque e as vendas de livros, gerando relatórios de vendas, estoques e clientes pela própria tela do Estoque.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t2-sebo-e3/assets/103009155/01e20da3-c58a-4b9e-892b-2afa7b551f5d)

### Requisitos atendidos 

- RF-001 - Cadastro de livros, autores, editoras e clientes
- RF-002 - Autenticação no sistema
- RF-005 - Controle de estoque e vendas de livros
- RF-006 - Geração de relatórios de vendas, estoque e clientes
- RF-007 - Pesquisa de livros por título, autor ou categoria
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
        import {
        Image,
        View,
        SafeAreaView,
        StatusBar,
        TextInput,
        Text,
        Button,
        FlatList,
        TouchableOpacity,
        ScrollView,
        } from "react-native";
        import ButtonPrimary from "../../components/Forms/ButtonPrimary";
        import ButtonSecundary from "../../components/Forms/ButtonSecundary";
        import Spacer from "../../components/Spacer";
        import { ViewContainer } from "../../ui/style/style";
        import {
        OrContainer,
        OrLine,
        SubTitle,
        Title,
        SearchBarEdit,
        SearchBarInput,
        List,
        ListButton,
        } from "./style";
        import ButtonNavBar from "../../components/Forms/ButtonNavBar";
        import ButtonNavBarEdit from "../../components/Forms/ButtonNavBarEdit";
        import Label from "../../components/Forms/Label";
        import Input from "../../components/Forms/Input";

        //Icons
        import Icon from "@expo/vector-icons/Ionicons";

        const data = [
        { title: "livro1", qtd: "4", id: "01" },
        { title: "livro2", qtd: "6", id: "02" },
        { title: "livro2", qtd: "6", id: "03" },
        { title: "livro1", qtd: "4", id: "04" },
        { title: "livro2", qtd: "6", id: "05" },
        { title: "livro2", qtd: "6", id: "06" },
        ];

        function Estoque({ navigation }) {
        function checkIndexIsEven(n) {
        return n % 2 == 0;
        }
        return (
        <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
        <ViewContainer>
        <ButtonPrimary
        title="Adicionar Livro"
        onPress={() => console.log("IMPLEMENTAR CREATE")}
        />

        <Spacer margin={"xs"} />

        <View
        style={{
        flexDirection: "row",
        alignItems: "center",
        position: "relative",
        marginBottom: 16,
        }}
        >
        <Input placeholder="Buscar livro"></Input>
        <Icon
        onPress={() => console.log("IMPLEMENTAR BUSCA")}
        name="ios-search"
        size={25}
        padding={10}
        color="#404040"
        position={"absolute"}
        right={0}
        />
        </View>

        <View
        style={{
        backgroundColor: "#177397",
        padding: 8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        }}
        >
        <Text
        style={{ color: "#FFF", fontWeight: "700", fontFamily: "Mulish" }}
        >
        Título
        </Text>
        </View>
        <View style={{ marginBottom: 16 }}>
        {data.map((item, index) => (
        <List
        style={{
        backgroundColor: checkIndexIsEven(index)
        ? "#FFFFFF"
        : "#D9D9D9",
        }}
        key={index}
        >
        <Text style={{ fontFamily: "Mulish" }}>{item.title}</Text>
        <ListButton onPress={() => navigation.navigate("Livro")}>
        <Text style={{ fontFamily: "Mulish" }}>Detalhes</Text>
        </ListButton>
        <ListButton>
        <Image source={require("../../assets/pencil-outline.png")} />
        </ListButton>
        </List>
        ))}
        </View>
        </ViewContainer>
        <ButtonNavBarEdit navigate={navigation} />
        </SafeAreaView>
        );
        }

        export default Estoque;
        
     
### Instruções de acesso 

Para acessar a tela de Estoque, o administrador precisará logar e após feito poderá alterar os dados dos livros.
