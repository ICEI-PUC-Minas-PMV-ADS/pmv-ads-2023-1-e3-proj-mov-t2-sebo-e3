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
import axios from 'axios';
  


function Address({ navigation }) {

  const [logradouro, setLogradouro] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [cep, setCEP] = useState('');


  const saveData = async () => {
    try {
      const response = await axios.post('http://192.168.1.11:3000/address', { logradouro, numero,complemento, bairro, cidade, estado, cep });
      //const response = await axios.post('http://192.168.0.104:3000/address', { logradouro, numero,complemento, bairro, cidade, estado, cep });
      console.log('Dados salvos:', response.data);
    } catch (error) {
      console.error('Erro ao salvar os dados:', error);
    }
  };

 /*
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
*/
  async function submitForm() {

    //createAddress();

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
          onChangeText={setLogradouro}
          value={logradouro} 
        />
        <Spacer margin="xx" />

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
  <View style={{ flex: 1 }}>
    <Text>Número</Text>
    <Input
          placeholder="Informe o número da residência"
          onChangeText={setNumero}
          value={numero}
        />
  </View>
  <View style={{ flex: 1 }}>
    <Text>Complemento</Text>
    <Input
          placeholder="Informe o  complemento "
          onChangeText={setComplemento}
          value={complemento}
        />
  </View>
</View>
      
        <Spacer margin="xx" />

        <Label title="Bairro" />
        <Input placeholder="Informe o bairro"           onChangeText={setBairro}
          value={bairro} />
        <Spacer margin="xx" />
        
        <Label title="Cidade" />
        <Input placeholder="Informe a cidade" onChangeText={setCidade} value={cidade}/>
        
        <Spacer margin="xx" />
        
      
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
  <View style={{ flex: 1 }}>
    <Text>Estado</Text>
    <Input placeholder="Informe o estado" onChangeText={setEstado} value={estado}  />
  </View>
  <View style={{ flex: 1 }}>
    <Text>CEP</Text>
    <Input placeholder="Informe o CEP" onChangeText={setCEP} value={cep} />
  </View>
</View>
        <Spacer margin="xx" />       
       
        

        <ButtonPrimary title="Continuar" onPress={saveData} />
      </Form>
      <Spacer margin={"xx"} />
    </ViewContainer>
      <ButtonNavBar navigate={navPages}/>
      </SafeAreaView>
  );
}

export default Address;
