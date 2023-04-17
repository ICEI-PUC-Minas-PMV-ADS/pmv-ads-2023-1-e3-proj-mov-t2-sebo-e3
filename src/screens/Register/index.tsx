import React from "react";
import ButtonPrimary from "../../components/Forms/ButtonPrimary";
import Input from "../../components/Forms/Input";
import Label from "../../components/Forms/Label";
import Spacer from "../../components/Spacer";
import { ViewContainer } from "../../ui/style/style";

import {
  Form,
  SubTitle
} from "./style";

function Register({ navigation }) {
  
  function teste() {
    console.log("registrado");
  }

  return (
    <ViewContainer>

      <Form>
        <Label title="Nome" />
        <Input placeholder="Nome" />
        <Spacer margin="xx" />

        <Label title="E-mail" />
        <Input placeholder="E-mail" />
        <Spacer margin="xx" />

        <Label title="Senha" />
        <Input placeholder="Senha" />
        <Spacer margin="xx" />

        <Label title="Confirme a senha" />
        <Input placeholder="Confirme a senha" />
        <Spacer margin="xx" />

        <SubTitle>
        Sua senha deve conter: {"\n"} {"\n"} 
        - Crie uma senha com no mínimo 8 caracteres {"\n"}
        - Adicione letra minúsculas {"\n"}
        - Adicione pelo menos uma letra maiúscula
      </SubTitle>
      <Spacer margin="xx" />


        <ButtonPrimary title="Cadastrar" onPress={teste} />
      </Form>

    </ViewContainer>
  );
}

export default Register;