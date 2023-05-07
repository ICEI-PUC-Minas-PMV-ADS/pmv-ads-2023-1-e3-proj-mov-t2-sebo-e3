import React, { useState } from "react";
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
import { getUsers } from "../../services/api";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

function Login({ navigation }) {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const loginUser = async () => {
    const users = await getUsers();

    for (let i = 0; i < users.length; i++) {
      if (
        users[i].email === login.email &&
        users[i].password === login.password
      ) {
        navigation.navigate("Perfil")
      }
    }
  };

  return (
    <SafeAreaView style={{flex: 1 , paddingTop: StatusBar.currentHeight}}>
      <ViewContainer>
        <Spacer margin={"ms"} />

        <Header>
          <LogoContainer
            source={require('../../assets/sebo-logo-app.png')}
          />
        </Header>

        <Spacer margin="xx" />
        <Form>
          <Label title="E-mail" />
          <Input
            placeholder="E-mail"
            onChangeText={(ev) =>
              setLogin((old) => {
                return { ...old, email: ev };
              })
            }
          />
          <Spacer margin="xx" />

          <Label title="Senha" />
          <Input
            placeholder="Senha"
            onChangeText={(ev) =>
              setLogin((old) => {
                return { ...old, password: ev };
              })
            }
          />

          <ForgotPassword
            onPress={() => navigation.navigate("Redefinir Senha")}
          >
            Esqueci minha senha
          </ForgotPassword>

          <Spacer margin="xx" />
          <ButtonPrimary title="Entrar" onPress={loginUser} />
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

        <Spacer margin={"xx"} />
      </ViewContainer>
    </SafeAreaView>
  );
}

export default Login;
