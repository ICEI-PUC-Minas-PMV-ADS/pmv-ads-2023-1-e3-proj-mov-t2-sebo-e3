import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Address,
  Cart,
  ConcludePurchase,
  EditProduct,
  EditProduct2,
  Estoque,
  Home,
  InformationPeople,
  Initial,
  Login,
  ProductPage,
  Profile,
  RedefinePassword,
  Register,
} from "../screens";
import ButtonReturnLeft from "../components/Forms/ButtonReturnLeft";
import { Text } from "react-native";

const Stack = createNativeStackNavigator();

function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="Detalhe de Livro">
      <Stack.Screen
        name="Inicial"
        component={Initial}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerTitle: () => (
            <Text
              style={{
                fontFamily: "Mulish",
                textAlign: "center",
                margin: "auto",
                width: "70%",
              }}
            >
              Login
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="Cadastre-se"
        component={Register}
        options={{
          headerTitle: () => (
            <Text
              style={{
                fontFamily: "Mulish",
                textAlign: "center",
                margin: "auto",
                width: "70%",
              }}
            >
              Cadastre-se
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="Livro"
        component={ProductPage}
        options={{
          headerTitle: () => (
            <Text
              style={{
                fontFamily: "Mulish",
                textAlign: "center",
                margin: "auto",
                width: "70%",
              }}
            >
              Livro
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="Estoque"
        component={Estoque}
        options={{
          headerTitle: () => (
            <Text
              style={{
                fontFamily: "Mulish",
                textAlign: "center",
                margin: "auto",
                width: "70%",
              }}
            >
              Estoque
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="Detalhe de Livro"
        component={EditProduct}
        options={{
          headerLeft: () => (
            <ButtonReturnLeft
              onClick={() => console.log("falta implementar volta")}
            />
          ),
          headerTitle: () => (
            <Text
              style={{
                fontFamily: "Mulish",
                textAlign: "center",
                margin: "auto",
                width: "80%",
              }}
            >
              Detalhes do Livro
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="Editar Livro"
        component={EditProduct2}
        options={{
          headerLeft: () => (
            <ButtonReturnLeft
              onClick={() => console.log("falta implementar volta")}
            />
          ),
          headerTitle: () => (
            <Text
              style={{
                fontFamily: "Mulish",
                textAlign: "center",
                margin: "auto",
                width: "70%",
              }}
            >
              Editar Livro
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="Finalizar Compra"
        component={ConcludePurchase}
        options={{
          headerTitle: () => (
            <Text
              style={{
                fontFamily: "Mulish",
                textAlign: "center",
                margin: "auto",
                width: "70%",
              }}
            >
              Finalizar Compra
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="Carrinho"
        component={Cart}
        options={{
          headerTitle: () => (
            <Text
              style={{
                fontFamily: "Mulish",
                textAlign: "center",
                margin: "auto",
                width: "70%",
              }}
            >
              Carrinho
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="Redefinir Senha"
        component={RedefinePassword}
        options={{
          headerTitle: () => (
            <Text
              style={{
                fontFamily: "Mulish",
                textAlign: "center",
                margin: "auto",
                width: "70%",
              }}
            >
              Redefinir Senha
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="Informacoes Pessoais"
        component={InformationPeople}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Perfil"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Endereço"
        component={Address}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default AppRoutes;
