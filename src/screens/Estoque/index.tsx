import React from "react";
import { Image, View, SafeAreaView, StatusBar, TextInput} from "react-native";
import ButtonPrimary from "../../components/Forms/ButtonPrimary";
import ButtonSecundary from "../../components/Forms/ButtonSecundary";
import Spacer from "../../components/Spacer";
import { ViewContainer } from "../../ui/style/style";
import { OrContainer, OrLine, SubTitle, Title, SearchBarEdit, SearchBarIcon, SearchBarInput } from "./style"
import ButtonNavBar from "../../components/Forms/ButtonNavBar";
import ButtonNavBarEdit from "../../components/Forms/ButtonNavBarEdit";
import Label from "../../components/Forms/Label";
import Input from "../../components/Forms/Input";



//Icons
import Icon from '@expo/vector-icons/Ionicons';

function Estoque({ navigation }) {
  
  function navPages() {
    navigation.navigate("Perfil")
  }  

    return (
      <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <ViewContainer>
       
        <ButtonPrimary
          title="Adicionar Livro"
          onPress={() => console.log("IMPLEMENTAR CREATE")}
        />

        <View style={SearchBarEdit}>
            <Icon style={SearchBarIcon} name="ios-search" size={20} color="#000"/>
            <TextInput
                style={SearchBarInput}
                placeholder="Buscar Livro"
                onChangeText={(searchString) => {this.setState({searchString})}}
                underlineColorAndroid="transparent"
            />
        </View>
       
      </ViewContainer>
        <ButtonNavBarEdit navigate={navPages}/>
      </SafeAreaView>
    );
  }
  
  export default Estoque;
