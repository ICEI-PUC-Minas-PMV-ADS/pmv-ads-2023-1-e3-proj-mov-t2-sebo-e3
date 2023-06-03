import React from "react";
import {
  Image,
  View,
  SafeAreaView,
  StatusBar,
  TextInput,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import ButtonPrimary from "../../components/Forms/ButtonPrimary";
import ButtonSecundary from "../../components/Forms/ButtonSecundary";
import Spacer from "../../components/Spacer";
import { ViewContainer } from "../../ui/style/style";
import {
  OrContainer,
  OrLine,
  SubTitle,
  Title,
  SearchBarEdit,
  SearchBarInput,
  List,
  ListButton,
} from "./style";
import ButtonNavBar from "../../components/Forms/ButtonNavBar";
import ButtonNavBarEdit from "../../components/Forms/ButtonNavBarEdit";
import Label from "../../components/Forms/Label";
import Input from "../../components/Forms/Input";

//Icons
import Icon from "@expo/vector-icons/Ionicons";

const data = [
  { title: "livro1", qtd: "4", id: "01" },
  { title: "livro2", qtd: "6", id: "02" },
  { title: "livro2", qtd: "6", id: "03" },
  { title: "livro1", qtd: "4", id: "04" },
  { title: "livro2", qtd: "6", id: "05" },
  { title: "livro2", qtd: "6", id: "06" },
];

function Estoque({ navigation }) {
  function checkIndexIsEven(n) {
    return n % 2 == 0;
  }
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <ViewContainer>
        <ButtonPrimary
          title="Adicionar Livro"
          onPress={() => console.log("IMPLEMENTAR CREATE")}
        />

        <Spacer margin={"xs"} />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            position: "relative",
            marginBottom: 16,
          }}
        >
          <Input placeholder="Buscar livro"></Input>
          <Icon
            onPress={() => console.log("IMPLEMENTAR BUSCA")}
            name="ios-search"
            size={25}
            padding={10}
            color="#404040"
            position={"absolute"}
            right={0}
          />
        </View>

        <View
          style={{
            backgroundColor: "#177397",
            padding: 8,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}
        >
          <Text
            style={{ color: "#FFF", fontWeight: "700", fontFamily: "Mulish" }}
          >
            Título
          </Text>
        </View>
        <View style={{ marginBottom: 16 }}>
          {data.map((item, index) => (
            <List
              style={{
                backgroundColor: checkIndexIsEven(index)
                  ? "#FFFFFF"
                  : "#D9D9D9",
              }}
              key={index}
            >
              <Text style={{ fontFamily: "Mulish" }}>{item.title}</Text>
              <ListButton onPress={() => navigation.navigate("Livro")}>
                <Text style={{ fontFamily: "Mulish" }}>Detalhes</Text>
              </ListButton>
              <ListButton>
                <Image source={require("../../assets/pencil-outline.png")} />
              </ListButton>
            </List>
          ))}
        </View>
      </ViewContainer>
      <ButtonNavBarEdit navigate={navigation} />
    </SafeAreaView>
  );
}

export default Estoque;
