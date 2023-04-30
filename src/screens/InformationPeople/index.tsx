import React from "react";
import ButtonPrimary50 from "../../components/Forms/ButtonPrimary50";
import ButtonSecundary50 from "../../components/Forms/ButtonSecundary50";
import Input from "../../components/Forms/Input";
import Label from "../../components/Forms/Label";
import Spacer from "../../components/Spacer";
import { LogoContainer, ViewContainer } from "../../ui/style/style";
import theme from "../../ui/style/theme";
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ButtonNavBar from "../../components/Forms/ButtonNavBar";


import {
  Header,
  Form,
  SubTitle,
} from "./style";


function InformationPeople({ navigation }) {
  return (
    <ViewContainer>

      <Header>
      <Icon name="person" size={80} color="#FFFFFF" />
      </Header>

      <Form>
      <SubTitle> Conta {"\n"} </SubTitle>
        <Label title="Nome do Usuário" />
        <Input placeholder="Arthur Valentin" /> 

        <Label title="Email" />
        <Input placeholder="arthur.valentin@gmail.com" />

        <Label title="Senha Atual" />
        <Input placeholder="*************" />
        <Spacer margin="xx" />

        <SubTitle> Pessoal {"\n"} </SubTitle>
        <Label title="Nome Completo" />
        <Input placeholder="Arthur Valentin Ferreira" />

        <Label title="CPF" />
        <Input placeholder="123.456.789-10" />

        <Label title="Data de Nascimento" />
        <Input placeholder="20/03/2000" />
        <Spacer margin="xx" />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingBottom: 44}}>
        <ButtonSecundary50 title="Cancelar" onPress={() => navigation.navigate('')} style={{ marginRight: 5 }} /> 
        <ButtonPrimary50 title="Salvar" onPress={() => navigation.navigate('')} style={{ marginLeft: 5 }} />
        </View>

        <ButtonNavBar style={{ flexDirection: 'row', justifyContent: 'space-around', paddingBottom: 44}}></ButtonNavBar>

      </Form>

    </ViewContainer>
  );
}

export default InformationPeople;