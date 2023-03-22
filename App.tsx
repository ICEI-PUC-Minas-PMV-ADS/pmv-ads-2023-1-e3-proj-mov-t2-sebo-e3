import React from "react";
import { View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from '@react-navigation/native'
import AppRoutes from "./src/routes/app.routes";
import theme from "./src/ui/style/theme";


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
