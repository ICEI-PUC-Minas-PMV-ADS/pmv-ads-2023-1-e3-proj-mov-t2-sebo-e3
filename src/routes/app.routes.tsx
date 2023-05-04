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

function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="Inicial">
      <Stack.Screen
        name="Inicial"
        component={Initial}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastre-se" component={Register} />
      <>
        <Stack.Screen name="Redefinir Senha" component={RedefinePassword} />
        <Stack.Screen
          name="Informacoes Pessoais"
          component={InformationPeople}
        />
        <Stack.Screen name="Perfil" component={Profile} />
      </>
    </Stack.Navigator>
  );
}

export default AppRoutes;
