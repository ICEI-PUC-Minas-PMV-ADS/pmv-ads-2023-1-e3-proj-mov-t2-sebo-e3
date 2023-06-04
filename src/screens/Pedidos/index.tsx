import React from "react";
import { Image, View, SafeAreaView, StatusBar } from "react-native";

// Style
import Spacer from "../../components/Spacer";
import { ViewContainer } from "../../ui/style/style";
import {Text, Title, OrContainer, OrLine } from "./style";
import ButtonNavBar from "../../components/Forms/ButtonNavBar";


function Pedidos({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      
      <ViewContainer>
        {/* Pedido 1 */}
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ width: 120, height: 150 }}
            source={require("../../assets/Capa.png")}
          />

          <View style={{ marginTop: 10 }}>
            <Title>Trono de Vidro - Vol 1</Title>

            <Text style={{ marginTop: 10 }}>R$ 15,80</Text>
            <Spacer margin="xx" />
            
            <Text>Status: Pedido entregue</Text>
          </View>
        </View>

        <OrContainer>
          <OrLine></OrLine>
          <OrLine></OrLine>
        </OrContainer>

        <Spacer margin={"mx"} />


        {/* Pedido 2 */}
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ width: 120, height: 150 }}
            source={require("../../assets/Capa.png")}
          />

          <View style={{ marginTop: 10 }}>
            <Title>Trono de Vidro - Vol 2</Title>

            <Text style={{ marginTop: 10 }}>R$ 15,80</Text>
            <Spacer margin="xx" />
            
            <Text>Status: Pedido entregue</Text>
          </View>
        </View>

        <OrContainer>
          <OrLine></OrLine>
          <OrLine></OrLine>
        </OrContainer>

        <Spacer margin={"mx"} />

      </ViewContainer>

      {/* Menu */}
      <ButtonNavBar navigation={navigation} />
    </SafeAreaView>
  );
}

export default Pedidos;
