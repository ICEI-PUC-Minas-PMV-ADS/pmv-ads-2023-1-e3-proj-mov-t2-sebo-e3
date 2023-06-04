import React, { useEffect, useState } from "react";
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
import { getBooks } from "../../services/api";
import { IBooks } from "../../ui/interfaces";
import { useUserContext } from "../../context/userContext";
import { useBookContext } from "../../context/bookContext";

function Estoque({ navigation }) {
  const { user } = useUserContext();
  const { setBook, setType } = useBookContext();
  const [ data, setData ] = useState([]);

  const books = async () => {
    const response = await getBooks();
    if(response.length > 0) {
      const value = response.filter((book: IBooks) => book.userId === user.id)
      setData(value);
      return;
    }

    return []
  }

  const handleBook = (type: boolean, book: IBooks) => {
    setBook(book);
    setType(true);
    if(type){
      return navigation.navigate("Editar Livro");
    }

    return navigation.navigate("EditProduto2");
  }

  const handleAddBook = () => {
    setType(false);

    return navigation.navigate("EditProduto2");
  }

  function checkIndexIsEven(n) {
    return n % 2 == 0;
  }

  useEffect(() => {
    books()
  }, [])

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <ViewContainer>
        <ButtonPrimary
          title="Adicionar Livro"
          onPress={handleAddBook}
        />

        <Spacer margin={"xs"} />

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
        <View style={{ marginBottom: 16, 
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8}}>
          {
          data.length ?
          data.map((item, index) => (
            <List
              style={{
                backgroundColor: checkIndexIsEven(index)
                  ? "#FFFFFF"
                  : "#D9D9D9",
              }}
              key={index}
            >
              <Text style={{ width:"40%", fontFamily: "Mulish" }}>{item.title}</Text>
              <ListButton onPress={() => handleBook(true, item)}>
                <Text style={{ fontFamily: "Mulish" }}>Detalhes</Text>
              </ListButton>
              <ListButton onPress={() => handleBook(false, item)}>
                <Image source={require("../../assets/pencil-outline.png")} />
              </ListButton>
            </List>
          )) : <Text>Estoque Vazio</Text>}
        </View>
      </ViewContainer>
      <ButtonNavBarEdit navigation={navigation} />
    </SafeAreaView>
  );
}

export default Estoque;
