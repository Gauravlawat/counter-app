import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Counter from "./components/Up";

const App= () => {
  
  return (<Provider store={store}>
    <Counter />
  </Provider>
  );
}
export default App;