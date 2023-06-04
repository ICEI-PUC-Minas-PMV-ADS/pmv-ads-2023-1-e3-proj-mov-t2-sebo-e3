import React, { useState } from "react";
//import { Image, View, SafeAreaView, StatusBar, TextInput } from "react-native";
import ButtonPrimary from "../../components/Forms/ButtonPrimary";
import ButtonSecundary from "../../components/Forms/ButtonSecundary";
import Spacer from "../../components/Spacer";
import { ViewContainer } from "../../ui/style/style";
import { OrContainer, OrLine, SubTitle, Title } from "./style";
import ButtonNavBar from "../../components/Forms/ButtonNavBar";
import ButtonNavBarEdit from "../../components/Forms/ButtonNavBarEdit";
import Label from "../../components/Forms/Label";
import Input from "../../components/Forms/Input";
import axios from "axios";
import {
  Image,
  StatusBar,
  Dimensions,
  View,
  Text,
  TextInput,
  SafeAreaView,
} from "react-native";
import { putBooks } from "../../services/api";
import { useUserContext } from "../../context/userContext";
import { useBookContext } from "../../context/bookContext";

function EditProduct2({ navigation }) {
  const { user } = useUserContext();
  const { book } = useBookContext();
  const [titulo, setTitulo] = useState(book.title);
  const [preco, setPreco] = useState(book.price);
  const [autor, setAutor] = useState(book.author);
  const [editora, setEditora] = useState(book.editor);
  const [paginas, setPaginas] = useState(book.pages);
  const [conservacao, setConservacao] = useState(book.conservation);
  const [imagem, setImagem] = useState(book.image);
  const [categoria, setCategoria] = useState(book.category);

  const saveData = async () => {
    const response = await putBooks(book.id, {
      userId: user.id,
      title: titulo,
      price: preco,
      author: autor,
      editor: editora,
      pages: paginas,
      conservation: conservacao,
      category: categoria,
      image: imagem,
      id: book.id,
    });

    if (response) {
      alert("Livro atualizado com sucesso!");
      return navigation.reset({
        index: 0,
        routes: [{ name: 'Estoque' }],
      });
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <ViewContainer>
        <View style={{ width: "100%", alignItems: "center" }}>
          <Image source={{uri: book.image}} style={{ width: 150, height:200}} />
        </View>
        <Spacer margin={"xs"} />

        <Label title="Título do Livro" />
        <Spacer margin={"xs"} />
        <Input
          defaultValue="Trono de Vidro - Vol 1"
          value={titulo}
          onChangeText={setTitulo}
        />

        <Spacer margin={"xs"} />

        <Label title="Valor" />
        <Spacer margin={"xs"} />
        <Input defaultValue="R$ 15,80" value={preco} onChangeText={setPreco} />

        <Spacer margin={"xs"} />

        <Label title="Autor(a)" />
        <Spacer margin={"xs"} />
        <Input
          defaultValue="Sarah J. Maas"
          value={autor}
          onChangeText={setAutor}
        />

        <Spacer margin={"xs"} />

        <Label title="Editora" />
        <Spacer margin={"xs"} />
        <Input
          defaultValue="Galera"
          value={editora}
          onChangeText={setEditora}
        />

        <Spacer margin={"xs"} />

        <Label title="Qtd. de páginas" />
        <Spacer margin={"xs"} />
        <Input defaultValue="392" value={paginas} onChangeText={setPaginas} />

        <Spacer margin={"xs"} />

        <Label title="Estado de conservação" />
        <Spacer margin={"xs"} />
        <Input
          defaultValue="Bom"
          value={conservacao}
          onChangeText={setConservacao}
        />

        <Spacer margin={"xs"} />

        <Label title="URL de imagem" />
        <Spacer margin={"xs"} />
        <Input
          defaultValue="Bom"
          value={imagem}
          onChangeText={setImagem}
        />

        <Spacer margin={"mx"} />

        <View style={{ flexDirection: "column" }}>
          <ButtonPrimary title="Salvar" onPress={saveData} />

          <Spacer margin={"lx"} />

          <ButtonSecundary
            title="Cancelar"
            onPress={() => console.log("IMPLEMENTAR CANCELAMENTO")}
          />

          <Spacer margin={"mx"} />
        </View>
      </ViewContainer>
      <ButtonNavBarEdit navigation={navigation} />
    </SafeAreaView>
  );
}

export default EditProduct2;
