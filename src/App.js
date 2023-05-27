import Header from "./components/Layout/Header";
import { Fragment } from "react";
import React from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
const App = () => {
  return (
    <Fragment>
         <Cart/> 
      <Header />
      <main style={{ backgroundColor: "#383838" }}>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
