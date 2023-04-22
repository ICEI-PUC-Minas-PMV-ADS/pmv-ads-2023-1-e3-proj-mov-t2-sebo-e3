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
        <Input placeholder="E-mail" />
        <Spacer margin="xx" />

        <Label title="Senha" />
        <Input placeholder="Senha" />

        <ForgotPassword> Esqueci minha senha </ForgotPassword>
        <ForgotPassword title="Esqueci minha senha"  onPress={() => navigation.navigate('Redefinir senha')} />
        
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