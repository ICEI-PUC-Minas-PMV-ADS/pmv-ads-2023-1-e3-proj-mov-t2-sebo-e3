import React, { useEffect, useState } from "react";
import { Image, ScrollView, TouchableOpacity, View, Text } from "react-native";
import ButtonPrimary from "../../components/Forms/ButtonPrimary";
import ButtonSecundary from "../../components/Forms/ButtonSecundary";
import Spacer from "../../components/Spacer";
import { ViewContainer } from "../../ui/style/style";
import { OrContainer, OrLine, SubTitle, Tab, Title } from "./style";
import Icon from "@expo/vector-icons/Ionicons";
import ButtonNavBar from "../../components/Forms/ButtonNavBar";
import { SafeAreaView, StatusBar } from "react-native";
import { useBookContext } from "../../context/bookContext";
import { IBooks } from "../../ui/interfaces";

function Cart({ navigation }) {
  const { cart, setCart } = useBookContext();
  const [prcTotal, setPrcTotal] = useState("");

  function ProductTotal() {
    let prc: number = 0;
    for (let i = 0; i < cart.length; i++) {
      prc = prc + Number(cart[i].price.replace(",", ""));
    }
    setPrcTotal(parseFloat((prc / 100).toString()).toFixed(2));
    return;
  }

  function remove(id) {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  }

  useEffect(() => {
    ProductTotal();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <ViewContainer>
        {cart.length > 0 ? (
          cart.map((car: IBooks) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 32,
                marginBottom: 24,
              }}
              key={car.id + Math.random()}
            >
              <Image
                style={{ width: 88, height: 92 }}
                resizeMode="contain"
                source={{ uri: car.image }}
              />

              <View style={{ justifyContent: "space-between" }}>
                <View>
                  <Title style={{ fontWeight: "400" }}>{car.title}</Title>
                  <SubTitle>{car.author}</SubTitle>
                </View>

                <View style={{ flexDirection: "row"}}>
                  <SubTitle>R$ {car.price}</SubTitle>
                  <TouchableOpacity onPress={() => remove(car.id)}>
                    <Icon
                      style={{ paddingHorizontal: 95 }}
                      name="trash"
                      size={25}
                      color="#767676"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))
        ) : (
          <Text style={{ textAlign: "center", marginVertical:32 }}>Carrinho Vazio :( </Text>
        )}

        <Spacer margin="xs" />

        <OrContainer>
          <OrLine></OrLine>
          <OrLine></OrLine>
        </OrContainer>

        <Spacer margin="xs" />

        <Title>Resumo da compra</Title>

        <Spacer margin="xs" />

        <Tab>
          <SubTitle>Produto</SubTitle>
          <SubTitle>R$ {prcTotal}</SubTitle>
        </Tab>

        <Tab>
          <SubTitle>Frete Fixo</SubTitle>
          <SubTitle>R$ 12,00</SubTitle>
        </Tab>

        <Tab>
          <SubTitle>Desconto</SubTitle>
          <SubTitle>R$ 00,00</SubTitle>
        </Tab>

        <Spacer margin="xs" />

        <Tab>
          <SubTitle>Total</SubTitle>
          <SubTitle>
            R$ {parseFloat((+prcTotal + 12).toString()).toFixed(2)}
          </SubTitle>
        </Tab>

        <Spacer margin="xx" />

        <ButtonPrimary
          title="Comprar"
          onPress={() => navigation.navigate("Endereço")}
        />
        <Spacer margin={"mx"} />

        <ButtonSecundary
          title="Continuar comprando"
          onPress={() => navigation.navigate("Home")}
        />
        <Spacer margin={"mx"} />
      </ViewContainer>
      <ButtonNavBar navigation={navigation} />
    </SafeAreaView>
  );
}

export default Cart;
