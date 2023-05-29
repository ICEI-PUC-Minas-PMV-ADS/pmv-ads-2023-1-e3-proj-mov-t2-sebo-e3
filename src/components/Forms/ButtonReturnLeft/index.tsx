import React from "react";
import { TouchableOpacityProps, TouchableOpacity } from "react-native";
import theme from "../../../ui/style/theme";
import { Container, Title } from "./style";
import Label from "../Label";

//Icons
import Icon from '@expo/vector-icons/Ionicons';

export interface IBackButton extends TouchableOpacityProps {
  onClick: () => void;
}

function ButtonReturnLeft({ onClick } : IBackButton) {
  return (
    <Container>
        <TouchableOpacity style={{alignItems:"center"}}>
            <Icon name="chevron-back-outline" size={30} color="#767676" />
            
        </TouchableOpacity>
    </Container>
  );
}

export default ButtonReturnLeft;