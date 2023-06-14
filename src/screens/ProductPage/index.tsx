import React from "react";
import { Image, View, SafeAreaView, StatusBar, Text } from "react-native";
import ButtonPrimary from "../../components/Forms/ButtonPrimary";
import ButtonSecundary from "../../components/Forms/ButtonSecundary";
import Spacer from "../../components/Spacer";
import { ViewContainer } from "../../ui/style/style";
import { OrContainer, OrLine, SubTitle, Title } from "./style";
import ButtonNavBar from "../../components/Forms/ButtonNavBar";
import { useBookContext } from "../../context/bookContext";

function ProductPage({ navigation }) {
  const { book, setCart, cart } = useBookContext();

  const addCart = () => {
    setCart((prev) => [...prev, book]);
    navigation.navigate("Carrinho");
  };

  const buyItem = () => {
    setCart((prev) => [...prev, book]);
    navigation.navigate("Endereço");
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <ViewContainer>
        <View style={{ width: "100%", alignItems: "center" }}>
          <Image
            style={{ width: 180, height: 228 }}
            resizeMode="contain"
            source={{ uri: book.image }}
          />
        </View>
        <Spacer margin="xx" />

        <Title style={{ fontSize: 18 }}>{book.title}</Title>

        <View
          style={{
            flexDirection: "row",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <SubTitle>{book.author}</SubTitle>

          <Text style={{ fontSize: 16 }}>
            R$<Title> {book.price}</Title>
          </Text>
        </View>

        <Spacer margin="xx" />

        <Title style={{ fontSize: 18 }}>Detalhes do produto</Title>

        <Spacer margin="ms" />

        <OrContainer>
          <OrLine></OrLine>
          <OrLine></OrLine>
        </OrContainer>

        <Spacer margin="xs" />

        <SubTitle>Autor(a): {book.author}</SubTitle>
        <SubTitle>Editora: {book.editor}</SubTitle>
        <SubTitle>Quantidade de páginas: {book.pages}</SubTitle>
        <SubTitle>Estado de conservação: {book.conservation}</SubTitle>
        <Spacer margin="xx" />

        <ButtonPrimary title="Adicionar ao carrinho" onPress={addCart} />
        <Spacer margin={"mx"} />

        <ButtonSecundary
          title="Comprar agora"
          onPress={buyItem}
        />
        <Spacer margin={"mx"} />
      </ViewContainer>
      <ButtonNavBar navigation={navigation} />
    </SafeAreaView>
  );
}

export default ProductPage;
