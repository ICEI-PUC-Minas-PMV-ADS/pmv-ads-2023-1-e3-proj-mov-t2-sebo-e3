import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
import Initial from "../screens/Initial";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Profile from "../screens/Profile";
import RedefinePassword from "../screens/RedefinePassword";
import InformationPeople from "../screens/InformationPeople";
import ButtonNavBar from "../components/Forms/ButtonNavBar";
import ProductPage from "../screens/ProductPage";
import ConcludePurchase from "../screens/ConcludePurchase";

function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="Finalizar Compra">
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
      <Stack.Screen name="Finalizar Compra" component={ConcludePurchase} />
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
      </>
    </Stack.Navigator>
  );
}

export default AppRoutes;
