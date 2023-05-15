import React, { useState } from "react";
import ButtonPrimary from "../../components/Forms/ButtonPrimary";
import Input from "../../components/Forms/Input";
import Label from "../../components/Forms/Label";
import Spacer from "../../components/Spacer";
import { ViewContainer } from "../../ui/style/style";
import { getUsers, postUsers } from "../../services/api";
import { Form, Header, SubTitle } from "./style";
import { IAddress, IUser } from "../../ui/interfaces";
import { checkEmail, checkName, checkPass } from "../../utils/validators";
import ButtonNavBar from "../../components/Forms/ButtonNavBar";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar, Dimensions, View, Text, TextInput } from "react-native";
import theme from "../../ui/style/theme";
  

function Address({ navigation }) {
  const [confirmPass, setConfirmPass] = useState<string>();
  const [address, setAddress] = useState<IAddress>({
    id: 0,
    logradouro: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
    cep: ""
  });

 

  async function createAddress() {
    if (address.logradouro && address.cidade && address.estado) {
      const response = await createAddress();

      if (response === "success post") {
        return navigation.navigate("Address");
      }

      alert(
        "Estamos com uma instabilidade, por favor, tente novamente mais tarde!"
      );
    }
    alert("Por favor, preencher todos os dados para efetuar cadastro.");
  }

  async function submitForm() {

    createAddress();

   /* const response = await getUsers();
    if (response.length > 0) {
      for (let i = 0; i < response.length; i++) {
        if (user.email === response[i].email) {
          alert("email já cadastrado!");
          return false;
        }
      }
    }
*/
      //if (checkName(user.name)) {
       // if (checkEmail(user.email)) {
       //   if (checkPass(user.password, confirmPass)) {
       //     createUser();
        //  }
        //}
      // }
    }

    //function navPages() {
    //  navigation.navigate("Endereco")
      //style={{flexDirection: 'row'}}
    //}


    
  
      function navPages() {
        navigation.navigate("Endereço")
      }
    

    const { width } = Dimensions.get('window');
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
    <ViewContainer >
      <Spacer margin={"sx"} />
      <SubTitle>Endereço {"\n"} </SubTitle>
      <Form>
        <Label title="Logradouro" />
        <Input
          placeholder="Rua/Avenida"
          onChangeText={(ev) =>
            setAdress((old) => {
              return { ...old, name: ev };
            })
          }
        />
        <Spacer margin="xx" />

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
  <View style={{ flex: 1 }}>
    <Text>Número</Text>
    <Input
          placeholder="Informe o número da residência"
          onChangeText={(ev) =>
            setAdress((old) => {
              return { ...old, email: ev };
            })
          } 
        />
  </View>
  <View style={{ flex: 1 }}>
    <Text>Complemento</Text>
    <Input
          placeholder="Informe o  complemento"
          onChangeText={(ev) =>
            createAdress((old) => {
              return { ...old, password: ev };
            })
          } 
        />
  </View>
</View>
      
        <Spacer margin="xx" />

        <Label title="Bairro" />
        <Input placeholder="Informe o bairro" onChangeText={setConfirmPass} />
        <Spacer margin="xx" />
        
        <Label title="Cidade" />
        <Input placeholder="Informe a cidade" onChangeText={setConfirmPass} />
        <Spacer margin="xx" />
        
      
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
  <View style={{ flex: 1 }}>
    <Text>Estado</Text>
    <Input placeholder="Informe o estado" onChangeText={setConfirmPass}  />
  </View>
  <View style={{ flex: 1 }}>
    <Text>CEP</Text>
    <Input placeholder="Informe o CEP" onChangeText={setConfirmPass} />
  </View>
</View>
        <Spacer margin="xx" />       
       
        

        <ButtonPrimary title="Continuar" onPress={submitForm} />
      </Form>
      <Spacer margin={"xx"} />
    </ViewContainer>
      <ButtonNavBar navigate={navPages}/>
      </SafeAreaView>
  );
}

export default Address;
