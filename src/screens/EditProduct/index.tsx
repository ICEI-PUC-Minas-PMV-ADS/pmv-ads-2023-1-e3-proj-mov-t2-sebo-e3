import React from "react";
import { Image, View, SafeAreaView, StatusBar } from "react-native";
import ButtonPrimary from "../../components/Forms/ButtonPrimary";
import ButtonSecundary from "../../components/Forms/ButtonSecundary";
import Spacer from "../../components/Spacer";
import { ViewContainer } from "../../ui/style/style";
import { OrContainer, OrLine, SubTitle, Title } from "./style";
import ButtonNavBar from "../../components/Forms/ButtonNavBar";
import ButtonNavBarEdit from "../../components/Forms/ButtonNavBarEdit";
import { useBookContext } from "../../context/bookContext";
import { deleteBooks } from "../../services/api";

function EditProduct({ navigation }) {
  const { book } = useBookContext();

  const removeBook = async() => {
    const response = await deleteBooks(book.id);
    
    if(response === "success delete"){
      alert("Livro deletado com sucesso!");
      return navigation.reset({
        index: 0,
        routes: [{ name: 'Estoque' }],
      });
    }

    alert("Erro ao tentar deletar livro!");

  }

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <ViewContainer>
        <View style={{ width: "100%", alignItems: "center" }}>
          <Image source={{ uri: book.image}} style={{ width: 200, height: 250}} />
        </View>
        <Spacer margin="xs" />

        <Title>{book.title}</Title>

        <Spacer margin="ms" />
        <Spacer margin="ms" />

        <View style={{ flexDirection: "row" }}>
          <SubTitle>Valor: </SubTitle>
          <SubTitle>R$ {book.price}</SubTitle>
        </View>

        <Spacer margin="lx" />

        <Title>Detalhes do produto</Title>

        <OrContainer>
          <OrLine></OrLine>
          <OrLine></OrLine>
        </OrContainer>

        <SubTitle>
          {"\n"}Autor(a): {book.author} {"\n"}Editora: {book.editor}
          {"\n"}Quantidade de páginas: {book.pages} {"\n"}Estado de conservação: {book.conservation}
        </SubTitle>
        <Spacer margin="xx" />

        <View style={{ flexDirection: "column" }}>
          <ButtonPrimary
            title="Editar"
            onPress={() => navigation.navigate("EditProduto2")}
          />

          <Spacer margin={"lx"} />

          <ButtonSecundary
            title="Excluir"
            onPress={removeBook}
          />
        </View>

        <Spacer margin={"mx"} />
        <Spacer margin={"mx"} />
      </ViewContainer>
      <ButtonNavBarEdit navigation={navigation} />
    </SafeAreaView>
  );
}

export default EditProduct;
