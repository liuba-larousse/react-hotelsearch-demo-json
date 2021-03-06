import React, { useState, useEffect } from "react";

import "./styles.css";
import Home from "./components/Home/Index";
import Header from "./components/Header/Index";
import Footer from "./components/Footer/Index";
import SearchPage from "./components/SearchPage/Index";
import HotelPage from "./components/HotelPage/Index";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f44336",

      contrastText: "#fff"
    },
    secondary: {
      main: "#ffc400",

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
              <HotelPage />
            </Route>
            <Route path="/search">
              <SearchPage />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}
