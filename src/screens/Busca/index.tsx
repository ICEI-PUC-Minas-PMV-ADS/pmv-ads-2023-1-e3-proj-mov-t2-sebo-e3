import React from "react";
import { Image, View, SafeAreaView, StatusBar } from "react-native";

// Style
import Spacer from "../../components/Spacer";
import { ViewContainer } from "../../ui/style/style";
import {iconSearch} from "./style";
import ButtonNavBar from "../../components/Forms/ButtonNavBar";
import Input from "../../components/Forms/Input";
import Icon from "@expo/vector-icons/Ionicons";


function Busca({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      
      <ViewContainer>

        {/*Barra de pesquisa*/}
       <Input
       placeholder="Buscar livro" >
       </Input>
        <Icon
        style={{position: "absolute", right: 30, top: 15}}
        name="search"
        size={25}
        color="#767676" 
        />

      </ViewContainer>

      {/* Menu */}
      <ButtonNavBar navigation={navigation} />
    </SafeAreaView>
  );
}

export default Busca;