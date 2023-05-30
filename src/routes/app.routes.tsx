import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Address,
  Cart,
  ConcludePurchase,
  EditProduct,
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

const Stack = createNativeStackNavigator();

function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Inicial"
        component={Initial}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastre-se" component={Register} />
      <Stack.Screen name="Livro" component={ProductPage} />
      <Stack.Screen name="Estoque" component={Estoque} />
      <Stack.Screen name="Detalhe de Livro" component={EditProduct} options={{
            headerLeft: () => (
              <ButtonReturnLeft onClick={() => console.log('falta implementar volta')}></ButtonReturnLeft>
            ),
          }} />
      {/* <Stack.Screen name="Editar Livro" component={EditProduct2} options={{
        headerLeft: () => (
        <ButtonReturnLeft onClick={() => console.log('falta implementar volta')}></ButtonReturnLeft>
        ),
      }} /> */}
      <Stack.Screen name="Finalizar Compra" component={ConcludePurchase} />
      <Stack.Screen name="Carrinho" component={Cart} />
      <>
      <Stack.Screen name="Redefinir Senha" component={RedefinePassword} />
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
      </>
    </Stack.Navigator>
  );
}

export default AppRoutes;
