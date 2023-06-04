import React from "react";
import { Image, View, SafeAreaView, StatusBar, FlatList } from "react-native";

// Style
import Spacer from "../../components/Spacer";
import { ViewContainer } from "../../ui/style/style";
import { Text, Title, OrContainer, OrLine } from "./style";
import ButtonNavBar from "../../components/Forms/ButtonNavBar";
import { useBookContext } from "../../context/bookContext";
import { IBooks } from "../../ui/interfaces";
import { SubTitle } from "../Cart/style";

function Pedidos({ navigation }) {
  const { sale } = useBookContext();
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <ViewContainer>
        {sale.length > 0 ? (
          sale.map((car: IBooks) => (
            <>
              <View
                style={{
                  flexDirection: "row",
                  gap: 8,
                }}
                key={car.id}
              >
                <Image
                  style={{ width: 100, height: 110 }}
                  resizeMode="contain"
                  source={
                    car.image
                      ? { uri: car.image }
                      : require("../../assets/banner.png")
                  }
                />

                <View style={{ justifyContent: "space-between" }}>
                  <View>
                    <Title style={{ fontWeight: "400" }}>{car.title}</Title>
                    <SubTitle style={{ fontWeight: "400" }}>
                      R$ {car.price}
                    </SubTitle>
                  </View>

                  <View style={{ flexDirection: "row" }}>
                    <SubTitle style={{ fontWeight: "400" }}>
                      Pedido em andamento
                    </SubTitle>
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
          ))
        ) : (
          <Text style={{ textAlign: "center", marginVertical: 32 }}>
            Carrinho Vazio :(
          </Text>
        )}
      </ViewContainer>

      {/* Menu */}
      <ButtonNavBar navigation={navigation} />
    </SafeAreaView>
  );
}

export default Pedidos;
