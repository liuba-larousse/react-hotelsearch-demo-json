import ReactDOM from "react-dom";

import App from "./App";
import { DataProvider } from "./context/Context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <DataProvider>
    <App />
  </DataProvider>,
  rootElement
);
