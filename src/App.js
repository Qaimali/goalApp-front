import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import store from "./store/index";
import "semantic-ui-css/semantic.min.css";
import { Provider } from "react-redux";
import Goals from "./Pages/Goals";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Goals />
      </div>
    </Provider>
  );
}

export default App;
