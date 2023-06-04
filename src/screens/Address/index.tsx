import React, { useState } from "react";
import ButtonPrimary from "../../components/Forms/ButtonPrimary";
import Input from "../../components/Forms/Input";
import Label from "../../components/Forms/Label";
import Spacer from "../../components/Spacer";
import { ViewContainer } from "../../ui/style/style";
import { Form, Header, SubTitle } from "./style";
import { IAddress, IUser } from "../../ui/interfaces";
import { checkEmail, checkName, checkPass } from "../../utils/validators";
import ButtonNavBar from "../../components/Forms/ButtonNavBar";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar, Dimensions, View, Text, TextInput } from "react-native";
import theme from "../../ui/style/theme";
import { useUserContext } from "../../context/userContext";
import { patchUsers } from "../../services/api";

function Address({ navigation }) {
  const { user, setAddress } = useUserContext();
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [cep, setCEP] = useState("");

  async function saveData() {
    if (
      logradouro.length > 3 &&
      numero &&
      bairro.length > 3 &&
      cidade.length > 3 &&
      estado.length > 1 &&
      cep.length === 8
    ) {
      const add: IAddress = {
        logradouro: logradouro,
        numero: numero,
        complemento: complemento,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
        cep: cep,
      };
      try {
        
        const response = await patchUsers(0, {
          address: {
            logradouro: logradouro,
            numero: numero,
            complemento: complemento,
            bairro: bairro,
            cidade: cidade,
            estado: estado,
            cep: cep,
          },
        });
  
        if (response === "success patch") {
          setAddress({
            logradouro: logradouro,
            numero: numero,
            complemento: complemento,
            bairro: bairro,
            cidade: cidade,
            estado: estado,
            cep: cep,
          });
          return navigation.navigate("Finalizar Compra");
        }
      } catch (error) {
        throw error;
      }
    }

    return alert("Nada!");
  }

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <ViewContainer>
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

          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
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
          <Input
            placeholder="Informe o bairro"
            onChangeText={setBairro}
            value={bairro}
          />
          <Spacer margin="xx" />

          <Label title="Cidade" />
          <Input
            placeholder="Informe a cidade"
            onChangeText={setCidade}
            value={cidade}
          />

          <Spacer margin="xx" />

          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <View style={{ flex: 1 }}>
              <Text>Estado</Text>
              <Input
                placeholder="Informe o estado"
                onChangeText={setEstado}
                value={estado}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text>CEP</Text>
              <Input
                placeholder="Informe o CEP"
                onChangeText={setCEP}
                value={cep}
              />
            </View>
          </View>
          <Spacer margin="xx" />

          <ButtonPrimary title="Continuar" onPress={saveData} />
        </Form>
        <Spacer margin={"xx"} />
      </ViewContainer>
      <ButtonNavBar navigation={navigation} />
    </SafeAreaView>
  );
}

export default Address;
