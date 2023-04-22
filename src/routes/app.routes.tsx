import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import Initial from '../screens/Initial';
import Login from '../screens/Login';
import Register from '../screens/Register';
import RedefinePassword from '../screens/RedefinePassword';

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
            <Stack.Screen 
                name="Redefinir"
                component={RedefinePassword}
            />
        </Stack.Navigator>
    )
}

export default AppRoutes;