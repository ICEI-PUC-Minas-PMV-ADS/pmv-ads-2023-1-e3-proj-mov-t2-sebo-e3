import React from "react";

//Style
import { LogoContainer, ViewContainer } from "../../ui/style/style";
import { Header, Form, SubTitle } from "./style";
import theme from "../../ui/style/theme";

//Components
import ButtonPrimary50 from "../../components/Forms/ButtonPrimary50";
import ButtonSecundary from "../../components/Forms/ButtonSecundary";
import Input from "../../components/Forms/Input";
import Label from "../../components/Forms/Label";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  StatusBar,
} from "react-native";
import ButtonNavBar from "../../components/Forms/ButtonNavBar";
import ButtonIcon from "../../components/Forms/ButtonIcon";
import Spacer from "../../components/Spacer";
import { SafeAreaView } from "react-native-safe-area-context";

//Icons
import Icon from "@expo/vector-icons/Ionicons";
import { useUserContext } from "../../context/userContext";
import { deleteUsers } from "../../services/api";

function Profile({ navigation }) {
  const {user} = useUserContext()
  
  async function removeUser() {
    const response = await deleteUsers(user.id);

    if(response === "success delete"){
      alert("Usuário deletado com sucesso!");
      return navigation.reset({
        index: 0,
        routes: [{ name: "Inicial" }],
      })
    }

    alert("Ocorreu um erro ao tentar deletar seu usuário.")
  }

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <ViewContainer>
        <Spacer margin="xx" />

        <Header>
          <Text>{"\n"}</Text>
          <Icon name="person" size={100} color="#7a4183" />
          <Text>{user.name}</Text>
        </Header>

        <Spacer margin="xx" />
        <ButtonIcon
          title="Meus Pedidos"
          onPress={() => navigation.navigate("Pedidos")}
        />

        <Form>
          <Text>{"\n\n"}</Text>
          <SubTitle>Conta {"\n"} </SubTitle>

          <TouchableOpacity
            onPress={() => navigation.navigate("Informacoes Pessoais")}
          >
            <Text>Informações Pessoais</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={removeUser}
          >
            <Text>Deletar conta</Text>
          </TouchableOpacity>

          <Spacer margin="xx" />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              paddingBottom: 44,
            }}
          >
            <ButtonSecundary
              title="Sair"
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{ name: "Inicial" }],
                })
              }
              style={{ marginRight: 5 }}
            />
          </View>
        </Form>
      </ViewContainer>
      <ButtonNavBar navigation={navigation} />
    </SafeAreaView>
  );
}

export default Profile;
