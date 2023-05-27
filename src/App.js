import Header from "./components/Layout/Header";
import { useState } from "react";
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
    <CartProvider>
      { cartIsShown && <Cart onClose={hideCartHandeler} />}
      <Header onShowCart={showCartHandeler} />
      <main style={{ backgroundColor: "#383838" }}>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
