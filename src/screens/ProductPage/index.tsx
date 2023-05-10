import React from "react";
import { Image, View } from "react-native";
import ButtonPrimary from "../../components/Forms/ButtonPrimary";
import ButtonSecundary from "../../components/Forms/ButtonSecundary";
import Spacer from "../../components/Spacer";
import { Title, ViewContainer } from "../../ui/style/style";
import { OrContainer, OrLine, SubTitle } from "./style"
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";


function ProductPage({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>

      <ViewContainer>
        
      <View style={{width: "100%"}}>
        
        <Image
        source={require('../../assets/Capa.png')}
        />
      </View>

        <Title>Trono de Vidro - Vol 1</Title>

        <SubTitle>
         Sarah J. Maas
        </SubTitle>
        <Title>R$ 15,80</Title>
        <Spacer margin="xx" />

        <Title>Detalhes do produto</Title>

      <OrContainer>
        <OrLine></OrLine>
        <OrLine></OrLine>
      </OrContainer>
  
        <SubTitle>
         {"\n"}Autor: Sarah J. Maas {"\n"}Editora: Galera
         {"\n"} Quantidade de páginas: 392 Páginas {"\n"}Estado de conservação: Bom
        </SubTitle>
        <Spacer margin="xx" />
        
        <ButtonPrimary title="Adicionar ao carrinho" onPress={() => navigation.navigate('Login')} />
        <Spacer margin={"mx"} />
  
        <ButtonSecundary title="Comprar agora"  onPress={() => navigation.navigate('Cadastre-se')} />
        <Spacer margin={"mx"} />
      </ViewContainer>
      </SafeAreaView>
    );
  }
  
  export default ProductPage;
