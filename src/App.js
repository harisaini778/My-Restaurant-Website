import Header from "./components/Layout/Header";
import { Fragment,useState } from "react";
import React from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

const App = () => {
  
  const [cartIsShown, setCartIsShown] = useState(false);
  
  const showCartHandeler = () => {
    setCartIsShown(true);
  }

  const hideCartHandeler = () => {
    setCartIsShown(false);
  }
  
  return (
    <Fragment>
      { cartIsShown && <Cart onClose={hideCartHandeler} />}
      <Header onShowCart={showCartHandeler} />
      <main style={{ backgroundColor: "#383838" }}>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
