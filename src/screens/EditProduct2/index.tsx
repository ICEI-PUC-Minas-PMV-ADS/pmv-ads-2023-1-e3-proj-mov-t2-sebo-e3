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
import { postBooks } from "../../services/api";

function EditProduct2({ navigation }) {
  const [titulo, setTitulo] = useState("");
  const [preco, setPreco] = useState("");
  const [autor, setAutor] = useState("");
  const [editora, setEditora] = useState("");
  const [paginas, setPaginas] = useState("");
  const [conservacao, setConservacao] = useState("");

  const saveData = async () => {
    const response = await postBooks({
      userId: 0,
      title: "",
      price: "",
      author: "",
      editor: "",
      pages: "",
      conservation: "",
      category: "",
      image: "",
      id: 0,
    });

    if (response) {
      alert("Livro cadastrado com sucesso!");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <ViewContainer>
        <View style={{ width: "100%", alignItems: "center" }}>
          <Image source={require("../../assets/Capa.png")} />
        </View>

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
      <ButtonNavBarEdit navigate={navigation} />
    </SafeAreaView>
  );
}

export default EditProduct2;
