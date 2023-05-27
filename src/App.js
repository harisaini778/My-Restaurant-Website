import Header from "./components/Layout/Header";
import { Fragment } from "react";
import React from "react";
import Meals from "./components/Meals/Meals";

const App = () => {
  return (
    <Fragment>
      <Header />
      <main style={{backgroundColor: "#383838"}}>
     <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
