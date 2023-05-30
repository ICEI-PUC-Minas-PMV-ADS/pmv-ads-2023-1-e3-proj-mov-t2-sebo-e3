import React, { useCallback } from "react";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./src/routes/app.routes";
import theme from "./src/ui/style/theme";
import { useFonts } from "expo-font";

import * as SplashScreen from "expo-splash-screen";
import { View, Text } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Mulish: require("./assets/fonts/Mulish-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      {onLayoutRootView && (
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <AppRoutes />
          </NavigationContainer>
        </ThemeProvider>
      )}
    </>
  );
}
