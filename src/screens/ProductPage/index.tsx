import React from "react";
import { Image, View, SafeAreaView, StatusBar, Text } from "react-native";
import ButtonPrimary from "../../components/Forms/ButtonPrimary";
import ButtonSecundary from "../../components/Forms/ButtonSecundary";
import Spacer from "../../components/Spacer";
import { ViewContainer } from "../../ui/style/style";
import { OrContainer, OrLine, SubTitle, Title } from "./style";
import ButtonNavBar from "../../components/Forms/ButtonNavBar";

function ProductPage({ navigation }) {
  function navPages() {
    navigation.navigate("Perfil");
  }

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <ViewContainer>
        <View style={{ width: "100%", alignItems: "center" }}>
          <Image source={require("../../assets/Capa.png")} />
        </View>

        <Title style={{fontSize: 18}} >Trono de Vidro - Vol 1</Title>

        <Spacer margin="ms" />
        <Spacer margin="ms" />

        <View style={{ flexDirection: "row", alignItems: "baseline", justifyContent: "space-between" }}>
          <SubTitle>Sarah J. Maas</SubTitle>
          
          <Text style={{fontSize:16}}>R$<Title> 15,80</Title></Text>
        </View>

        <Spacer margin="xx" />

        <Title style={{fontSize: 18}}>Detalhes do produto</Title>
        
        <Spacer margin="ms" />
        
        <OrContainer>
          <OrLine></OrLine>
          <OrLine></OrLine>
        </OrContainer>

        <Spacer margin="xs" />

        <SubTitle>Autor(a): Sarah J. Maas</SubTitle>
        <SubTitle>Editora: Galera</SubTitle>
        <SubTitle>Quantidade de páginas: 392</SubTitle>
        <SubTitle>Estado de conservação: Bom</SubTitle>
        <Spacer margin="xx" />

        <ButtonPrimary
          title="Adicionar ao carrinho"
          onPress={() => navigation.navigate("Login")}
        />
        <Spacer margin={"mx"} />

        <ButtonSecundary
          title="Comprar agora"
          onPress={() => navigation.navigate("Cadastre-se")}
        />
        <Spacer margin={"mx"} />
      </ViewContainer>
      <ButtonNavBar navigate={navPages} />
    </SafeAreaView>
  );
}

export default ProductPage;
