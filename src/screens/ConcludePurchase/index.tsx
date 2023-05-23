import React from "react";
import { Image, View, Alert, SafeAreaView, StatusBar } from "react-native";
import ButtonPrimary from "../../components/Forms/ButtonPrimary";
import Spacer from "../../components/Spacer";
import { ViewContainer } from "../../ui/style/style";
import { SubTitle, Title, OrContainer, OrLine, CodigoBarra } from "./style"
import ButtonNavBar from "../../components/Forms/ButtonNavBar";

function ConcludePurchase({ navigation }) {

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
            console.log('Yes Pressed')
        }
    
        },
        {
            text: 'Meus Pedidos',
            onPress: () => {
            navigation.navigate("Meus Pedidos") 
            }
        }
    ]
        )
    } 

    function navPages() {
        navigation.navigate("Perfil")
      }    
  
    return (
        <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
        <ViewContainer>


            <Title>Confirme as informações</Title>

        <Spacer margin="ms" />
        <Spacer margin="ms" />


        <SubTitle>
         Produto
        </SubTitle>

        <Spacer margin="ms" />

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
        <Title>R$ 15,80 {'          '} </Title>

        <SubTitle>
         1 Unidade
        </SubTitle>        
        
      </View>
      </View>
      </View>
      <Spacer margin="ms" />
      <Spacer margin="ms" />

        <OrContainer>
          <OrLine></OrLine>
          <OrLine></OrLine>
        </OrContainer>

        <Spacer margin="ms" />
        <Spacer margin="ms" />

        <Title> Resumo da compra</Title>

        <Spacer margin="ms" />
        <Spacer margin="ms" />

        <SubTitle>
         Produto {'                                                                      '} R$ 15,80
        </SubTitle>

        <SubTitle>
        {"\n"}Frete Fixo {'                                                                  '}  R$ 12,00
        </SubTitle>

        <SubTitle>
        {"\n"}Desconto {'                                                                 '} - R$ 00,00
        </SubTitle>

        <Spacer margin="ms" />
        <Spacer margin="ms" />

        <Title>
            Total  {'                            '}   R$ 27,80
        </Title>
        <Spacer margin="ms" />
        <Spacer margin="ms" />

        <OrContainer>
          <OrLine></OrLine>
          <OrLine></OrLine>
        </OrContainer>        

        <Spacer margin="ms" />
        <Spacer margin="ms" />

        <Title>
            Endereço
        </Title>

        <Spacer margin="ms" />
        <Spacer margin="ms" />

        <SubTitle>Rua Fulano de Tal 123A, Bairro Fulaninho
        {"\n"}Cidade, UF - 00000-000
        </SubTitle>

        <Spacer margin="ms" />

        <SubTitle style={{flexDirection: 'row'}}>
        {"\n"}Prazo de entrega {'                                                 '} 5 dias úteis    
        </SubTitle>

        <Spacer margin="ms" />
        <Spacer margin="ms" />

        <OrContainer>
          <OrLine></OrLine>
          <OrLine></OrLine>
        </OrContainer>

        <Spacer margin="ms" />
        <Spacer margin="ms" />

        <Title>
            Código de barras
        </Title>

        <Spacer margin="ms" />
        <Spacer margin="ms" />
        <Spacer margin="ms" />

        <View style={{width: "100%", alignItems: "center"}}>
        
            <Image
            source={require('../../assets/codigodebarras.png')}
            />
        
        </View>

        <CodigoBarra>
        00190.00009 00502.010184 000-15.324188 6 335 100000 15000
        </CodigoBarra>

        <Spacer margin="xx" />
        <Spacer margin={"mx"} />

        <ButtonPrimary
          title="Concluir pedido"
          onPress={twoOptionAlert}
        />        
        <Spacer margin={"mx"} />
    </ViewContainer>
    <ButtonNavBar navigate={navPages} />
    </SafeAreaView>
    );
  }
  
  export default ConcludePurchase;