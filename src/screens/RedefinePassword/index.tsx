import React, { useState } from "react";
import ButtonPrimary from "../../components/Forms/ButtonPrimary";
import Input from "../../components/Forms/Input";
import Label from "../../components/Forms/Label";
import Spacer from "../../components/Spacer";
import { ViewContainer } from "../../ui/style/style";

import { Form, SubTitle } from "./style";
import { checkEmail, checkPass } from "../../utils/validators";
import { getUsers, patchUsers } from "../../services/api";
import { ActivityIndicator } from "react-native";
import theme from "../../ui/style/theme";

function RedefinePassword({ navigation }) {
  const [validEmail, setValidEmail] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [id, setId] = useState<number>();

  async function verifyEmail() {
    setLoading(true);
    if (checkEmail(email)) {
      const users = await getUsers();
      if (users.length > 0) {
         for(let i=0; i < users.length; i++){
          if (users[i].email === email) {
            setId(users[i].id);
            setValidEmail(true);
            setLoading(false);
            return;
          }
        };
      }
    }
    setLoading(false);
    setValidEmail(false);
  }

  async function handlePassword() {
    if(checkPass(pass, confirmPass)){
      const response = await patchUsers(id, {password: pass})

      if(response === "success patch"){
        alert("Senha alterada com sucesso!");
        return navigation.navigate("Login");
      } 
      
      alert("Server error! Tente novamente mais tarde.")
    }
  }

  return (
    <ViewContainer>
      <SubTitle>
        Digite aqui o e-mail já cadastrado, caso não possua é necessário
        realizar o cadastro:
        {"\n"}
      </SubTitle>

      <Form>
        <Label title="E-mail" />
        <Input
          placeholder="E-mail"
          onChangeText={(ev) => setEmail(ev)}
          value={email}
        />
        <Spacer margin="ms" />
        {loading ? (
          <ActivityIndicator size="large" color={theme.colors.primary} />
        ) : (
          <ButtonPrimary title="Verificar E-mail" onPress={verifyEmail} />
        )}
        <Spacer margin="xx" />
      </Form>

      {validEmail && (
        <>
          <SubTitle>Digite a nova senha abaixo: {"\n"}</SubTitle>

          <Form>
            <Label title="Senha" />
            <Input placeholder="Senha" onChangeText={setPass} />
            <Spacer margin="xx" />

            <Label title="Confirme a senha" />
            <Input placeholder="Confirme a senha" onChangeText={setConfirmPass}/>
            <Spacer margin="xx" />

            <SubTitle>
              Sua senha deve conter: {"\n"} {"\n"}- Crie uma senha com no mínimo
              8 caracteres {"\n"}- Adicione letra minúsculas {"\n"}- Adicione
              pelo menos uma letra maiúscula
            </SubTitle>
            <Spacer margin="xx" />

            <ButtonPrimary title="Redefinir senha" onPress={handlePassword} />
          </Form>
          <Spacer margin="xx" />
        </>
      )}
    </ViewContainer>
  );
}

export default RedefinePassword;
