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
      <ButtonNavBar navigation={navigation} />
    </SafeAreaView>
  );
}

export default InformationPeople;
