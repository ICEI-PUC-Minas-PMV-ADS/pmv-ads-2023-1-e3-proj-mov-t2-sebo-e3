import React, { useState } from "react";
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
import { useUserContext } from "../../context/userContext";
import { patchUsers } from "../../services/api";

function InformationPeople({ navigation }) {
  const { user } = useUserContext();
  const [nome, setNome] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [senha, setSenha] = useState(user.password);
  const [nomeCompleto, setNomeCompleto] = useState(user.fullName);
  const [cpf, setCpf] = useState(user.cpf);
  const [dataNascimento, setDataNascimento] = useState(user.dateOfBirth);

  const saveData = async () => {
    const response = await patchUsers(user.id, {
      name: nome,
      email: email,
      password: senha,
      fullName: nomeCompleto,
      cpf: cpf,
      dateOfBirth: dataNascimento,
    });

    if (response === "success patch") {
      alert("Usuário alterado com sucesso! É necessário refazer o login para confirmar alterações.");
      return navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    }

    alert("Ocorreu um erro ao tentar alterar seu usuário.");
  };

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
          <Input placeholder={user.name} value={nome} onChangeText={setNome} />
          <Spacer margin={"xs"} />

          <Label title="Email" />
          <Spacer margin={"xs"} />
          <Input
            placeholder={user.email}
            value={email}
            onChangeText={setEmail}
          />
          <Spacer margin={"xs"} />

          <Label title="Senha Atual" />
          <Spacer margin={"xs"} />
          <Input
            placeholder={user.password}
            value={senha}
            onChangeText={setSenha}
          />
          <Spacer margin={"xx"} />

          <SubTitle> Pessoal {"\n"} </SubTitle>
          <Label title="Nome Completo" />
          <Spacer margin={"xs"} />
          <Input
            placeholder={user.fullName}
            value={nomeCompleto}
            onChangeText={setNomeCompleto}
          />
          <Spacer margin={"xs"} />

          <Label title="CPF" />
          <Spacer margin={"xs"} />
          <Input placeholder={user.cpf} value={cpf} onChangeText={setCpf} />
          <Spacer margin={"xs"} />

          <Label title="Data de Nascimento" />
          <Spacer margin={"xs"} />
          <Input
            placeholder={user.dateOfBirth}
            value={dataNascimento}
            onChangeText={setDataNascimento}
          />
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
              onPress={() => navigation.navigate("Home")}
            />
            <ButtonPrimary50 title="Salvar" onPress={saveData} />
          </View>
        </Form>
      </ViewContainer>
      <ButtonNavBar navigation={navigation} />
    </SafeAreaView>
  );
}

export default InformationPeople;
