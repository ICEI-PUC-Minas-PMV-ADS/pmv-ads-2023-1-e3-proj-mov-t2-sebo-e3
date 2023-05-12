import React from "react";
import { Image, View, Alert } from "react-native";
import ButtonPrimary from "../../components/Forms/ButtonPrimary";
import Spacer from "../../components/Spacer";
import { ViewContainer } from "../../ui/style/style";
import { SubTitle, Title } from "./style"


const twoOptionAlert = () => {
    Alert.alert(
    // Title
    'Pedido realizado!',
    // Body
    'Acompanhe os status do seu pedido na página de Meus Pedidos',
[
  {
    text:'Fechar',
    onPress: () => {
        console.log('Yes Pressed');
    }

    },
    {
        text: 'Meus Pedidos',
        onPress: () => {
            console.log('No Pressed')
        }
    }
]
    )
} 


function ConcludePurchase({ navigation }) {
  
    return (
        <ViewContainer>
          <Spacer margin="ms" />

            <Title>Confirme as informações</Title>

        <Spacer margin="ms" />
        <Spacer margin="ms" />


        <SubTitle>
         Produto
        </SubTitle>

        <View style={{width: 295, height: 66}}>
        
            <Image
            source={require('../../assets/minicapa.png')}
            />
        
        </View>

        <SubTitle>
        {"\n"}Trono de Vidro - Vol 1
        {"\n"}Sarah J. Maas
        {"\n"}R$ 15,80
        {"\n"}1 Unidade
        </SubTitle>

        <Spacer margin="xx" />

        <Title>
            Resumo da Compra
        </Title>

        <SubTitle>
        {"\n"}Produto: R$ 15,80
        {"\n"}{"\n"}Frete: R$12,00  

        {"\n"}{"\n"}Total: R$ 27,80
        </SubTitle>

        <Spacer margin="xx" />

        <Title>
            Endereço
        </Title>

        <Spacer margin="ms" />
        <Spacer margin="ms" />

        <SubTitle>Rua Fulano de Tal 123A, Bairro Fulaninho
        {"\n"}Cidade, UF - 00000-000
        </SubTitle>

        <Spacer margin="ms" />

        <SubTitle>
        {"\n"}Prazo de entrega: 5 dias úteis    
        </SubTitle>

        <Spacer margin="xx" />

        <Title>
            Código de barras
        </Title>

        <Spacer margin="ms" />
        <Spacer margin="ms" />

        <View style={{width: "100%", alignItems: "center"}}>
        
            <Image
            source={require('../../assets/codigodebarras.png')}
            />
        
        </View>

        <Spacer margin="ms" />
        <Spacer margin="ms" />

        <SubTitle>
        00190.00009 00502.010184 000-15.324188 6 335 100000 15000
        </SubTitle>

        <Spacer margin="xx" />

        <ButtonPrimary
          title="Concluir pedido"
          onPress={twoOptionAlert}
        />        
        <Spacer margin={"mx"} />
    </ViewContainer>
    );
  }
  
  export default ConcludePurchase;