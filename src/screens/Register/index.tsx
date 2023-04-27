import React, { useState } from "react";
import ButtonPrimary from "../../components/Forms/ButtonPrimary";
import Input from "../../components/Forms/Input";
import Label from "../../components/Forms/Label";
import Spacer from "../../components/Spacer";
import { ViewContainer } from "../../ui/style/style";
import { postUsers } from "../../services/api";
import { Form, SubTitle } from "./style";
import { IUser } from "../../ui/interfaces";

function Register({ navigation }) {
  const [user, setUser] = useState<IUser>({
    id: 0,
    name: "",
    email: "",
    password: "",
  });

  async function createUser() {
    const response = await postUsers(user);
  }

  return (
    <ViewContainer>
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
        <Input placeholder="E-mail" onChangeText={(ev) =>
            setUser((old) => {
              return { ...old, email: ev };
            })
          }/>
        <Spacer margin="xx" />

        <Label title="Senha" />
        <Input placeholder="Senha" onChangeText={(ev) =>
            setUser((old) => {
              return { ...old, password: ev };
            })
          }/>
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

        <ButtonPrimary title="Cadastrar" onPress={createUser} />
      </Form>
    </ViewContainer>
  );
}

export default Register;
