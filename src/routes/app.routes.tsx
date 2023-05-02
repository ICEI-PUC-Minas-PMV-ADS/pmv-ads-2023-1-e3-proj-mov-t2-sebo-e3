import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import Initial from '../screens/Initial';
import Login from '../screens/Login';
import Register from '../screens/Register';
<<<<<<< Updated upstream
=======
import RedefinePassword from '../screens/RedefinePassword';
import InformationPeople from '../screens/InformationPeople';
import Profile from '../screens/Profile';
>>>>>>> Stashed changes

function AppRoutes(){
    return (
        <Stack.Navigator initialRouteName='Inicial'>
            <Stack.Screen 
                name="Inicial"
                component={Initial}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="Login"
                component={Login}
            />
            <Stack.Screen 
                name="Cadastre-se"
                component={Register}
            />
<<<<<<< Updated upstream
=======
            <Stack.Screen 
                name="Redefinir Senha"
                component={RedefinePassword}
            />
            <Stack.Screen 
                name="Informações Pessoais"
                component={InformationPeople}
            />
            <Stack.Screen 
                name="Perfil"
                component={Profile}
            />
>>>>>>> Stashed changes
        </Stack.Navigator>
    )
}

export default AppRoutes;