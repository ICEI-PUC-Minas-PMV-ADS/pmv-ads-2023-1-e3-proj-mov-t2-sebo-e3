import React from "react";

//Components
import { View, Text, TouchableOpacity } from "react-native";
import Label from "../Label";
import { NavBar } from "./style";

//Icons
import Icon from '@expo/vector-icons/Ionicons';

function ButtonNavBar({navigate}) {
  return (
    <NavBar>
      <TouchableOpacity style={{alignItems:"center"}}>
        <Icon name="home" size={30} color="#767676" />
        <Label title="Home" />
      </TouchableOpacity>
      <TouchableOpacity  style={{alignItems:"center"}}>
        <Icon name="search" size={30} color="#767676" />
        <Label title="Buscar" />
      </TouchableOpacity>
      <TouchableOpacity  style={{alignItems:"center"}} onPress={navigate}>
        <Icon name="person" size={30} color="#767676" />
        <Label title="Perfil" />
      </TouchableOpacity>
      <TouchableOpacity  style={{alignItems:"center"}}>
        <Icon name="cart" size={30} color="#767676" />
        <Label title="Carrinho" />
      </TouchableOpacity>
    </NavBar>
  );
}

export default ButtonNavBar;