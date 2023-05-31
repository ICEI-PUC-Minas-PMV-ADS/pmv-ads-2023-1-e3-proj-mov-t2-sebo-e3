import React from "react";
import { Image, View, SafeAreaView, StatusBar } from "react-native";
import ButtonPrimary from "../../components/Forms/ButtonPrimary";
import ButtonSecundary from "../../components/Forms/ButtonSecundary";
import Spacer from "../../components/Spacer";
import { ViewContainer } from "../../ui/style/style";
import { OrContainer, OrLine, SubTitle, Title } from "./style"
import ButtonNavBar from "../../components/Forms/ButtonNavBar";
import ButtonNavBarEdit from "../../components/Forms/ButtonNavBarEdit";
import Label from "../../components/Forms/Label";
import Input from "../../components/Forms/Input";


function EditProduct2({ navigation }) {
  
  function navPages() {
    navigation.navigate("Perfil")
  }  

    return (
      <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <ViewContainer>
        
      <View style={{width: "100%", alignItems: "center"}}>
        
        <Image
        source={require('../../assets/Capa.png')}
        />
        
      </View>

        <Label title="Título do Livro" />
        <Spacer margin={"xs"} />
        <Input defaultValue="Trono de Vidro - Vol 1" />

        <Spacer margin={"xs"} />

        <Label title="Valor" />
        <Spacer margin={"xs"} />
        <Input defaultValue="R$ 15,80" />

        <Spacer margin={"xs"} />

        <Label title="Autor(a)" />
        <Spacer margin={"xs"} />
        <Input defaultValue="Sarah J. Maas" />

        <Spacer margin={"xs"} />

        <Label title="Editora" />
        <Spacer margin={"xs"} />
        <Input defaultValue="Galera" />

        <Spacer margin={"xs"} />

        <Label title="Qtd. de páginas" />
        <Spacer margin={"xs"} />
        <Input defaultValue="392" />

        <Spacer margin={"xs"} />

        <Label title="Estado de conservação" />
        <Spacer margin={"xs"} />
        <Input defaultValue="Bom" />

        <Spacer margin={"mx"} />  
        

        <View style={{flexDirection: 'column'}}>
        
        <ButtonPrimary
          title="Salvar"
          onPress={() => console.log("IMPLEMENTAR UPDATE")}
        />
        
        <Spacer margin={"lx"} />

        <ButtonSecundary
          title="Cancelar"
          onPress={() => console.log("IMPLEMENTAR CANCELAMENTO")}            
        />

        <Spacer margin={"mx"} />
        
      </View>

      </ViewContainer>
          {/* <ButtonNavBar navigate={navPages} /> */}
          <ButtonNavBarEdit navigate={navPages}/>
      </SafeAreaView>
    );
  }
  
  export default EditProduct2;
