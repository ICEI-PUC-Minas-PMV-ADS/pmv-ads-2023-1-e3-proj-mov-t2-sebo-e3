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
        Digite aqui o e-mail cadastrado, caso não possua ativar o cadastro:
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
