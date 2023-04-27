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

function Login({ navigation }) {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const loginUser = async () => {
    const users = await getUsers();

    for(let i =0; i < users.length; i++) {
      if (
        users[i].email === login.email &&
        users[i].password === login.password
      ) {
        console.log("Login efetuado!");
      }
    }
  };

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

        <ForgotPassword onPress={() => navigation.navigate("Redefinir senha")}> Esqueci minha senha </ForgotPassword>

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
    </ViewContainer>
  );
}

export default Login;
