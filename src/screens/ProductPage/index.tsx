import React from "react";
import { Image, View } from "react-native";
import ButtonPrimary from "../../components/Forms/ButtonPrimary";
import ButtonSecundary from "../../components/Forms/ButtonSecundary";
import Spacer from "../../components/Spacer";
import { ViewContainer } from "../../ui/style/style";
import { OrContainer, OrLine, SubTitle, Title } from "./style"


function ProductPage({ navigation }) {
  
    return (
      <ViewContainer>
        
      <View style={{width: "100%", alignItems: "center"}}>
        
        <Image
        source={require('../../assets/Capa.png')}
        />
        
      </View>

        <Title>Trono de Vidro - Vol 1</Title>

        <SubTitle>
         Sarah J. Maas
        </SubTitle>
        <Spacer margin="xx" />
        <Title>R$ 15,80</Title>
        <Spacer margin="xx" />

        <Title>Detalhes do produto</Title>

        <OrContainer>
          <OrLine></OrLine>
          <OrLine></OrLine>
        </OrContainer>

        <SubTitle>
         {"\n"}Autor(a): Sarah J. Maas {"\n"}Editora: Galera
         {"\n"}Quantidade de páginas: 392 {"\n"}Estado de conservação: Bom
        </SubTitle>
        <Spacer margin="xx" />

        <ButtonPrimary
          title="Adicionar ao carrinho"
          onPress={() => navigation.navigate("Login")}
        />
        <Spacer margin={"mx"} />

        <ButtonSecundary
          title="Comprar agora"
          onPress={() => navigation.navigate("Cadastre-se")}
        />
        <Spacer margin={"mx"} />
      </ViewContainer>
    );
  }
  
  export default ProductPage;
