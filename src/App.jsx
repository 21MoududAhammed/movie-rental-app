import { useReducer, useState } from "react";
import { CartContext, ThemeContext } from "./contexts";
import Page from "./Page";
import cartReducer from "./reducers/reducer";

export default function App() {
  // const [cartData, setCartData] = useState([]);
  const [cartData, dispatch] = useReducer(cartReducer, [])
  const [theme , setTheme] = useState(true);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <CartContext.Provider value={{ cartData, dispatch }}>
        <Page />
      </CartContext.Provider>
    </ThemeContext.Provider>
  );
}
