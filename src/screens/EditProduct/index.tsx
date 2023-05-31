import React from "react";
import { Image, View, SafeAreaView, StatusBar } from "react-native";
import ButtonPrimary from "../../components/Forms/ButtonPrimary";
import ButtonSecundary from "../../components/Forms/ButtonSecundary";
import Spacer from "../../components/Spacer";
import { ViewContainer } from "../../ui/style/style";
import { OrContainer, OrLine, SubTitle, Title } from "./style";
import ButtonNavBar from "../../components/Forms/ButtonNavBar";
import ButtonNavBarEdit from "../../components/Forms/ButtonNavBarEdit";

function EditProduct({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <ViewContainer>
        <View style={{ width: "100%", alignItems: "center" }}>
          <Image source={require("../../assets/Capa.png")} />
        </View>

        <Title>Trono de Vidro - Vol 1</Title>

        <Spacer margin="ms" />
        <Spacer margin="ms" />

        <View style={{ flexDirection: "row" }}>
          <SubTitle>Valor: </SubTitle>
          <SubTitle>R$15,80</SubTitle>
        </View>

        <Spacer margin="lx" />

        <Title>Detalhes do produto</Title>

        <OrContainer>
          <OrLine></OrLine>
          <OrLine></OrLine>
        </OrContainer>

        <SubTitle>
          {"\n"}Autor(a): Sarah J. Maas {"\n"}Editora: Galera
          {"\n"}Quantidade de páginas: 392 {"\n"}Estado de conservação: Bom
        </SubTitle>
        <Spacer margin="xx" />

        <View style={{ flexDirection: "column" }}>
          <ButtonPrimary
            title="Editar"
            onPress={() => navigation.navigate("Login")}
          />

          <Spacer margin={"lx"} />

          <ButtonSecundary
            title="Excluir"
            onPress={() => console.log("IMPLEMENTAR EXCLUSAO")}
          />
        </View>

        <Spacer margin={"mx"} />
        <Spacer margin={"mx"} />
      </ViewContainer>
      <ButtonNavBarEdit navigate={navigation} />
    </SafeAreaView>
  );
}

export default EditProduct;
