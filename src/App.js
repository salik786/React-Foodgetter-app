import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Main from "./components/Maincomponent";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";

const store = ConfigureStore();

function App() {
  return <Main />;
}

export default App;
