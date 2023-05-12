import React from "react";
import { Image, View } from "react-native";
import ButtonPrimary from "../../components/Forms/ButtonPrimary";
import ButtonSecundary from "../../components/Forms/ButtonSecundary";
import Spacer from "../../components/Spacer";
import { ViewContainer } from "../../ui/style/style";
import { OrContainer, OrLine, SubTitle, Title } from "./style"
import Icon from '@expo/vector-icons/Ionicons'
import ButtonNavBar from "../../components/Forms/ButtonNavBar";
import { SafeAreaView, StatusBar} from "react-native";


function Cart({ navigation }) {

    function navPages() {
        navigation.navigate("Perfil")
      }
  
    return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <ViewContainer>
      <View style={{flexDirection: 'row'}}>
        
        <Image style={{width: 120, height: 150}} 
        source={require('../../assets/Capa.png')}
        />
         
       <View style={{marginTop: 10}}>
        <Title>Trono de Vidro - Vol 1</Title>

        <SubTitle>
         Sarah J. Maas
        </SubTitle>
        <Spacer margin="xx" />

        <View style={{flexDirection: 'row'}}>
        <Title>R$ 15,80</Title>
        <Icon style={{paddingHorizontal: 95}} name="trash" size={25} color="#767676" />

        <Spacer margin="xx" />
        
      </View>
      </View>
      </View>

      <Spacer margin="xx" />

      <OrContainer>
          <OrLine></OrLine>
          <OrLine></OrLine>
        </OrContainer>

        <Title> {"\n"} Resumo da compra</Title>

        <Spacer margin="xx" />

        <SubTitle>
         Produto {'                                                        '} R$ 15,80
        </SubTitle>

        <SubTitle>
        {"\n"}Frete Fixo {'                                                   '}  R$ 12,00
        </SubTitle>

        <SubTitle>
        {"\n"}Desconto {'                                                   '}   R$ 00,00
        </SubTitle>

        <Spacer margin="xx" />

        <Title>
            Total  {'                            '}   R$ 27,80
        </Title>

        <Spacer margin="xx" />



        <ButtonPrimary
          title="Comprar"
          onPress={() => navigation.navigate("Login")}
        />
        <Spacer margin={"mx"} />

        <ButtonSecundary
          title="Continuar comprando"
          onPress={() => navigation.navigate("")}
        />
        <Spacer margin={"mx"} />
      </ViewContainer>
            <ButtonNavBar navigate={navPages} />
       </SafeAreaView>
     );
    }
  
  export default Cart;