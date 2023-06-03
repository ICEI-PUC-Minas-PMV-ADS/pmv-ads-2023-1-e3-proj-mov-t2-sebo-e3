import React from "react";
import {
  Image,
  View,
  Alert,
  SafeAreaView,
  StatusBar,
  Text,
} from "react-native";
import ButtonPrimary from "../../components/Forms/ButtonPrimary";
import Spacer from "../../components/Spacer";
import { ViewContainer } from "../../ui/style/style";
import { SubTitle, Title, OrContainer, OrLine } from "./style";
import ButtonNavBar from "../../components/Forms/ButtonNavBar";

function ConcludePurchase({ navigation }) {
  const twoOptionAlert = () => {
    Alert.alert(
      // Title
      "Pedido realizado!",
      // Body
      "Acompanhe os status do seu pedido na página de Meus Pedidos",
      [
        {
          text: "Fechar",
          onPress: () => {
            console.log("Yes Pressed");
          },
        },
        {
          text: "Meus Pedidos",
          onPress: () => {
            navigation.navigate("Meus Pedidos");
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <ViewContainer>
        <Title>Confirme as informações</Title>

        <Spacer margin="xs" />

        <SubTitle style={{ fontSize: 16 }}>Produto</SubTitle>

        <Spacer margin="lx" />

        <View style={{ flexDirection: "row", gap: 16 }}>
          <Image
            style={{ width: 120, height: 120 }}
            source={require("../../assets/Capa.png")}
          />

          <View style={{ justifyContent: "space-between" }}>
            <View>
              <Title style={{ fontSize: 18 }}>Trono de Vidro - Vol 1</Title>

              <SubTitle style={{ fontSize: 12 }}>Sarah J. Maas</SubTitle>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <SubTitle style={{ fontSize: 14 }}>R$ 15,80</SubTitle>

              <SubTitle>1 Unidade</SubTitle>
            </View>
          </View>
        </View>

        <Spacer margin="lx" />

        <SubTitle style={{ fontSize: 16 }}> Resumo da compra</SubTitle>

        <Spacer margin="xs" />

        <View style={{ gap: 8, paddingHorizontal: 16 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <SubTitle>Produto</SubTitle>
            <SubTitle>R$ 15,80</SubTitle>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <SubTitle>Frete Fixo</SubTitle>
            <SubTitle>R$ 12,00</SubTitle>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <SubTitle>Desconto</SubTitle>
            <SubTitle>- R$ 00,00</SubTitle>
          </View>
        </View>

        <Spacer margin="mx" />

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Title style={{ fontSize: 18, fontWeight: "700" }}>Total</Title>
          <Title style={{ fontSize: 18, fontWeight: "700" }}>R$ 27,80</Title>
        </View>

        <Spacer margin="xx" />

        <SubTitle style={{ fontSize: 16 }}>Endereço</SubTitle>

        <Spacer margin="ms" />
        <Spacer margin="ms" />

        <SubTitle>
          Rua Fulano de Tal 123A, Bairro Fulaninho Cidade, UF - 00000-000
        </SubTitle>

        <Spacer margin="xs" />

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <SubTitle>Prazo de entrega</SubTitle>
          <SubTitle>5 dias úteis</SubTitle>
        </View>

        <Spacer margin="xx" />

        <Title style={{ fontSize: 18 }}>Código de barras</Title>

        <Spacer margin="lx" />

        <Image
          style={{ width: "100%" }}
          source={require("../../assets/codigodebarras.png")}
        />

        <Spacer margin="lx" />

        <SubTitle>
          00190.00009 00502.010184 000-15.324188 6 335 100000 15000
        </SubTitle>

        <Spacer margin="xx" />

        <ButtonPrimary title="Concluir pedido" onPress={twoOptionAlert} />
        <Spacer margin={"mx"} />
      </ViewContainer>
      <ButtonNavBar navigation={navigation} />
    </SafeAreaView>
  );
}

export default ConcludePurchase;
