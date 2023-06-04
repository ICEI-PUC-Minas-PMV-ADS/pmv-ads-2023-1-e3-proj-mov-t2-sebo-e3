import React, { useEffect, useState } from "react";
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
import { IBooks } from "../../ui/interfaces";
import { useBookContext } from "../../context/bookContext";
import { ScrollView } from "react-native";
import { useUserContext } from "../../context/userContext";

function ConcludePurchase({ navigation }) {
  const { cart, setSale, setCart } = useBookContext();
  const { address } = useUserContext();
  const [prcTotal, setPrcTotal] = useState("");

  const twoOptionAlert = () => {
    setSale(cart);
    setCart([]);
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
            navigation.navigate("Pedidos");
          },
        },
      ]
    );
  };

  function ProductTotal() {
    let prc: number = 0;
    for (let i = 0; i < cart.length; i++) {
      prc = prc + Number(cart[i].price.replace(",", ""));
    }
    setPrcTotal(parseFloat((prc / 100).toString()).toFixed(2));
    return;
  }

  useEffect(() => {
    ProductTotal();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <ViewContainer>
        <Title>Confirme as informações</Title>

        <Spacer margin="xs" />

        <SubTitle style={{ fontSize: 16 }}>Produto(os)</SubTitle>

        <Spacer margin="lx" />
        {cart.map((car: IBooks) => (
          <>
            <View
              style={{
                flexDirection: "row",
                gap: 16,
              }}
              key={car.id + Math.random()}
            >
              <Image
                style={{ width: 90, height: 110 }}
                resizeMode="contain"
                source={{ uri: car.image }}
              />

              <View style={{ justifyContent: "space-between" }}>
                <View>
                  <Title style={{ fontWeight: "400" }}>{car.title}</Title>
                  <SubTitle>{car.author}</SubTitle>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <SubTitle>R$ {car.price}</SubTitle>
                </View>
              </View>
            </View>

            <Spacer margin={"ms"} />

            <OrContainer>
              <OrLine></OrLine>
              <OrLine></OrLine>
            </OrContainer>

            <Spacer margin={"mx"} />
          </>
        ))}

        <SubTitle style={{ fontSize: 16 }}> Resumo da compra</SubTitle>

        <Spacer margin="xs" />

        <View style={{ gap: 8, paddingHorizontal: 16 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <SubTitle>Produto</SubTitle>
            <SubTitle>R$ {prcTotal}</SubTitle>
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
          <Title style={{ fontSize: 18, fontWeight: "700" }}>
            R$ {parseFloat((+prcTotal + 12).toString()).toFixed(2)}
          </Title>
        </View>

        <Spacer margin="xx" />

        <SubTitle style={{ fontSize: 16 }}>Endereço</SubTitle>

        <Spacer margin="ms" />
        <Spacer margin="ms" />

        <SubTitle>
          {address.logradouro} {address.numero}, {address.bairro},{" "}
          {address.estado} - {address.cep}. Complemento: {address.complemento}
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
