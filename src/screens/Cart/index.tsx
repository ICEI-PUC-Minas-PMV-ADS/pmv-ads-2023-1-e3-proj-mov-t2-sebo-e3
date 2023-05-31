import React from "react";
import { Image, View } from "react-native";
import ButtonPrimary from "../../components/Forms/ButtonPrimary";
import ButtonSecundary from "../../components/Forms/ButtonSecundary";
import Spacer from "../../components/Spacer";
import { ViewContainer } from "../../ui/style/style";
import { OrContainer, OrLine, SubTitle, Tab, Title } from "./style";
import Icon from "@expo/vector-icons/Ionicons";
import ButtonNavBar from "../../components/Forms/ButtonNavBar";
import { SafeAreaView, StatusBar } from "react-native";

function Cart({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <ViewContainer>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ width: 120, height: 150 }}
            source={require("../../assets/Capa.png")}
          />

          <View style={{ marginTop: 10 }}>
            <Title>Trono de Vidro - Vol 1</Title>

            <SubTitle>Sarah J. Maas</SubTitle>
            <Spacer margin="xx" />

            <View style={{ flexDirection: "row" }}>
              <Title>R$ 15,80</Title>
              <Icon
                style={{ paddingHorizontal: 95 }}
                name="trash"
                size={25}
                color="#767676"
              />

              <Spacer margin="xx" />
            </View>
          </View>
        </View>

        <Spacer margin="xx" />

        <OrContainer>
          <OrLine></OrLine>
          <OrLine></OrLine>
        </OrContainer>

        <Title> {"\n"} Resumo da compra</Title>

        <Spacer margin="xx" />

        <Tab>
          <SubTitle>Produto</SubTitle>
          <SubTitle>R$ 15,80</SubTitle>
        </Tab>

        <Tab>
          <SubTitle>Frete Fixo</SubTitle>
          <SubTitle>R$ 12,00</SubTitle>
        </Tab>

        <Tab>
          <SubTitle>Desconto</SubTitle>
          <SubTitle>R$ 00,00</SubTitle>
        </Tab>

        <Spacer margin="xx" />

        <Tab>
          <SubTitle>Total</SubTitle>
          <SubTitle>R$ 27,80</SubTitle>
        </Tab>

        <Spacer margin="xx" />

        <ButtonPrimary
          title="Comprar"
          onPress={() => navigation.navigate("Login")}
        />
        <Spacer margin={"mx"} />

        <ButtonSecundary
          title="Continuar comprando"
          onPress={() => navigation.navigate("")}
        />
        <Spacer margin={"mx"} />
      </ViewContainer>
      <ButtonNavBar navigation={navigation} />
    </SafeAreaView>
  );
}

export default Cart;
