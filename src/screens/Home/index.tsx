import {
  ScrollView,
  View,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  FlatList,
} from "react-native";
import { LogoImage } from "./style";
import React from "react";
import Spacer from "../../components/Spacer";
import { ViewContainer } from "../../ui/style/style";
import Label from "../../components/Forms/Label";
import theme from "../../ui/style/theme";
import ButtonNavBar from "../../components/Forms/ButtonNavBar";

const DATA = [
  {
    id: "0",
    title: "É assim que aca.",
    autor: "Collen Hoover",
    price: "12,50",
  },
  {
    id: "1",
    title: "É assim que aca.",
    autor: "Collen Hoover",
    price: "14,50",
  },
  {
    id: "2",
    title: "É assim que aca.",
    autor: "Collen Hoover",
    price: "16,50",
  },
  {
    id: "3",
    title: "É assim que aca.",
    autor: "Collen Hoover",
    price: "18,50",
  },
];

function Home() {
  const Item = ({ title, autor, price }) => (
    <View style={{ width: 115, height: 185, alignItems: "center" }}>
      <Image
        style={{ width: 87, height: 100, margin: "auto" }}
        source={require("../../assets/Capa.png")}
      />
      <View style={{ alignItems: "flex-start", gap: 8 }}>
        <Text
          style={{
            fontSize: theme.fonts.label,
            fontFamily: "Mulish",
            color: "#404040",
          }}
        >
          {title}
        </Text>
        <Text style={{ fontSize: 10, fontWeight: "400", color: "#404040" }}>
          {autor}
        </Text>
        <Text
          style={{
            fontSize: theme.fonts.obs,
            fontFamily: "Mulish",
            color: "#404040",
          }}
        >
          {" "}
          R$
          <Text
            style={{
              fontSize: theme.fonts.text,
            }}
          >
            {price}
          </Text>
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1, paddingTop: StatusBar.currentHeight }}>
      <ViewContainer>
        <ScrollView>
          <LogoImage source={require("../../assets/sebo-logo-home.png")} />
          <View
            style={{
              width: 282,
              height: 148,
              borderRadius: 8,
              backgroundColor: "#D9D9D9",
            }}
          ></View>

          <Spacer margin={"mx"} />

          <View style={{ margin: "auto" }}>
            <Text style={{ marginBottom: 16 }}>Livros mais pedidos</Text>
            <FlatList
              data={DATA}
              renderItem={({ item }) => (
                <Item
                  title={item.title}
                  autor={item.autor}
                  price={item.price}
                />
              )}
              keyExtractor={(item) => item.id}
              horizontal
            />
          </View>

          <View style={{ margin: "auto" }}>
            <Text style={{ marginBottom: 16 }}>Sobre Tecnologia</Text>
            <FlatList
              data={DATA}
              renderItem={({ item }) => (
                <Item
                  title={item.title}
                  autor={item.autor}
                  price={item.price}
                />
              )}
              keyExtractor={(item) => item.id}
              horizontal
            />
          </View>
        </ScrollView>
      </ViewContainer>
      <ButtonNavBar />
    </SafeAreaView>
  );
}

export default Home;
