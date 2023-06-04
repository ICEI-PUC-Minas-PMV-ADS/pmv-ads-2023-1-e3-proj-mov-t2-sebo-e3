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
  Pedidos,
  Busca,
} from "../screens";
import ButtonReturnLeft from "../components/Forms/ButtonReturnLeft";
import ButtonNavBar from "../components/Forms/ButtonNavBar";
import { Page } from "../ui/style/style";
import EditProduct22 from "../screens/EditProduct2";

const Stack = createNativeStackNavigator();


function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="Inicial">
      <Stack.Screen
        name="Busca"
        component={Busca}
        options={{
          headerTitleAlign: "center",
          headerTitle(props) {
           return <Page>Buscar</Page>
          }
        }}
      />
      <Stack.Screen
        name="Pedidos"
        component={Pedidos}
        options={{
          headerTitleAlign: "center",
          headerTitle(props) {
           return <Page>Meus Pedidos</Page>
          }
        }}
      />
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
          headerTitleAlign: "center",
          headerTitle(props) {
           return <Page>Login</Page>
          }
        }}
      />
      <Stack.Screen
        name="Cadastre-se"
        component={Register}
        options={{
          headerTitleAlign: "center",
          headerTitle(props) {
           return <Page>Cadastre-se</Page>
          }
        }}
      />
      <Stack.Screen
        name="Livro"
        component={ProductPage}
        options={{
          headerTitleAlign: "center",
          headerTitle(props) {
           return <Page>Livro</Page>
          }
        }}
      />
      <Stack.Screen
        name="Estoque"
        component={Estoque}
        options={{
          headerTitleAlign: "center",
          headerTitle(props) {
           return <Page>Estoque</Page>
          }
        }}
      />
      <Stack.Screen
        name="Detalhe de Livro"
        component={EditProduct}
        options={{
          headerTitleAlign: "center",
          headerTitle(props) {
           return <Page>Detalhe de Livro</Page>
          }
        }}
      />
      <Stack.Screen
        name="Editar Livro"
        component={EditProduct}
        options={{
          headerTitleAlign: "center",
          headerTitle(props) {
           return <Page>Editar Livro</Page>
          }
        }}
      />
      <Stack.Screen
        name="Finalizar Compra"
        component={ConcludePurchase}
        options={{
          headerTitleAlign: "center",
          headerTitle(props) {
           return <Page>Finalizar Compra</Page>
          }
        }}
      />
      <Stack.Screen
        name="Carrinho"
        component={Cart}
        options={{
          headerTitleAlign: "center",
          headerTitle(props) {
           return <Page>Carrinho</Page>
          }
        }}
      />
      <Stack.Screen
        name="Redefinir Senha"
        component={RedefinePassword}
        options={{
          headerTitleAlign: "center",
          headerTitle(props) {
           return <Page>Redefinir Senha</Page>
          }
        }}
      />
      <Stack.Screen
        name="Informacoes Pessoais"
        component={InformationPeople}
        options={{
          headerTitleAlign: "center",
          headerTitle(props) {
           return <Page>Informacoes Pessoais</Page>
          }
        }}
      />
      <Stack.Screen
        name="Perfil"
        component={Profile}
        options={{
          headerShown: true,
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
        name="EditProduto2"
        component={EditProduct2}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleAlign: "center",
          headerTitle(props) {
           return <Page>Home</Page>
          }
        }}
      />
      <Stack.Screen name="sidebar" component={ButtonNavBar} />
    </Stack.Navigator>
  );
}

export default AppRoutes;
