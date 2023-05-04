import React from "react";

//Style
import { LogoContainer, ViewContainer } from "../../ui/style/style";
import theme from "../../ui/style/theme";

//Components
import ButtonPrimary50 from "../../components/Forms/ButtonPrimary50";
import ButtonSecundary from "../../components/Forms/ButtonSecundary";
import Input from "../../components/Forms/Input";
import Label from "../../components/Forms/Label";
import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import ButtonNavBar from "../../components/Forms/ButtonNavBar";
import ButtonIcon from "../../components/Forms/ButtonIcon";
import Spacer from "../../components/Spacer";

//Icons
import Icon from '@expo/vector-icons/Ionicons';



import {
  Header,
  Form,
  SubTitle,
  link,
} from "./style";


function Profile({ navigation }) {

  return (
    <ViewContainer>

        <Header> 
            <Text>{'\n'}</Text>
            <Icon name="person" size={100} color="#005f83" />
            <Text>{'Usuário'}</Text>
        </Header>
        
     
        <Text>{'\n\n\n'}</Text>
      <ButtonIcon title="Meus Pedidos" onPress={() => navigation.navigate('')} />
      
     

      <Form>
      <Text>{'\n\n'}</Text>
      <SubTitle>Conta {"\n"} </SubTitle>

        <TouchableOpacity onPress={() => navigation.navigate('Informações Pessoais')}>
        <Text>Informações Pessoais</Text>
      </TouchableOpacity>
  

      
        <TouchableOpacity onPress={() => navigation.navigate('TelaDeDestino')}>
        <Text>Deletar conta</Text>
      </TouchableOpacity>
       
        <Spacer margin="xx" />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingBottom: 44}}>
        <ButtonSecundary title="Sair" onPress={() => navigation.navigate('Inicial')} style={{ marginRight: 5 }} /> 
        </View>

      </Form>

    </ViewContainer>
  );
}

export default Profile;