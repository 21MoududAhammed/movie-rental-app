import { useReducer, useState } from "react";
import { CartContext, ThemeContext } from "./contexts";
import Page from "./Page";
import cartReducer from "./reducers/reducer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [cartData, dispatch] = useReducer(cartReducer, [])
  const [theme , setTheme] = useState(true);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <CartContext.Provider value={{ cartData, dispatch }}>
        <Page />
        <ToastContainer/>
      </CartContext.Provider>
    </ThemeContext.Provider>
  );
}
