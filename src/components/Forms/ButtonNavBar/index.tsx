import React from "react";

//Components
import { View, Text } from "react-native";
import Label from "../Label";
import { NavBar } from "./style";

//Icons
import Icon from '@expo/vector-icons/Ionicons';

function ButtonNavBar() {
  return (
    <NavBar>
      <View style={{alignItems:"center"}}>
        <Icon name="home" size={30} color="#767676" />
        <Label title="Home" />
      </View>
      <View  style={{alignItems:"center"}}>
        <Icon name="search" size={30} color="#767676" />
        <Label title="Buscar" />
      </View>
      <View  style={{alignItems:"center"}}>
        <Icon name="person" size={30} color="#767676" />
        <Label title="Perfil" />
      </View>
      <View  style={{alignItems:"center"}}>
        <Icon name="cart" size={30} color="#767676" />
        <Label title="Carrinho" />
      </View>
    </NavBar>
  );
}

export default ButtonNavBar;
