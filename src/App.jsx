import { useState } from "react";
import { CartContext, ThemeContext } from "./contexts";
import Page from "./Page";

export default function App() {
  const [cartData, setCartData] = useState([]);
  const [theme , setTheme] = useState(true);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <CartContext.Provider value={{ cartData, setCartData }}>
        <Page />
      </CartContext.Provider>
    </ThemeContext.Provider>
  );
}
