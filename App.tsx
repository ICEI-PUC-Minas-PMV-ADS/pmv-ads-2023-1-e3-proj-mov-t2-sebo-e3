import React from "react";
import { View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./src/routes/app.routes";
import theme from "./src/ui/style/theme";
import { useFonts } from "expo-font";
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontsLoadded] = useFonts({
    'Mulish': require("./assets/fonts/Mulish-Regular.ttf"),
  });

  if(!fontsLoadded){
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
