import React, { useCallback, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./src/routes/app.routes";
import theme from "./src/ui/style/theme";
import * as Font from "expo-font";
import BookContext, { BookProvider } from "./src/context/bookContext";
import { UserProvider } from "./src/context/userContext";

let customFonts = {
  Mulish: require("./src/assets/fonts/Mulish-Regular.ttf"),
};

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }

    return (
      <ThemeProvider theme={theme}>
        <BookProvider>
          <UserProvider>
            <NavigationContainer>
              <AppRoutes />
            </NavigationContainer>
          </UserProvider>
        </BookProvider>
      </ThemeProvider>
    );
  }
}
