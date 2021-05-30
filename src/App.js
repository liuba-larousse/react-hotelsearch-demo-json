import React, {
  useState,
  useEffect
} from "react";

import "./styles.css";
import Home from "./components/Home/Index";
import Header from "./components/Header/Index";
import Footer from "./components/Footer/Index";
import SearchPage from "./components/SearchPage/Index";
import HotelPage from "./components/HotelPage/Index";
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { DataProvider } from "./context/Context";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#f44336",
      dark: " #aa2e25",
      contrastText: "#fff"
    },
    secondary: {
      light: "#b28900",
      main: "#ffc400",
      dark: " #ffcf33",
      contrastText: "#000000"
    }
  }
});

export default function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/hotel/:hotelId">
              <DataProvider>
                <HotelPage />
              </DataProvider>
            </Route>
            <Route path="/search">
              <DataProvider>
                <SearchPage />
              </DataProvider>
            </Route>
            <Route path="/">
              <DataProvider>
                <Home />
              </DataProvider>
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}
