import React from "react";

//Components
import { View, Text, TouchableOpacity } from "react-native";
import Label from "../Label";
import { NavBar } from "./style";

//Icons
import Icon from '@expo/vector-icons/Ionicons';

function ButtonNavBarEdit({navigate}) {
  return (
    <NavBar>
      <TouchableOpacity style={{alignItems:"center"}}>
        <Icon name="home" size={30} color="#767676" />
        <Label title="Loja" />
      </TouchableOpacity>
      <TouchableOpacity  style={{alignItems:"center"}}>
        <Icon name="archive-outline" size={30} color="#767676" />
        <Label title="Estoque" />
      </TouchableOpacity>
      <TouchableOpacity  style={{alignItems:"center"}}>
        <Icon name="cart" size={30} color="#767676" />
        <Label title="Carrinho" />
      </TouchableOpacity>
    </NavBar>
  );
}

export default ButtonNavBarEdit;
