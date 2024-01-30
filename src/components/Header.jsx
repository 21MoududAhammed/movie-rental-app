import logo from "../assets/logo.svg";
import ring from "../assets/ring.svg";
import sun from "../assets/icons/sun.svg";
import moon from "../assets/icons/moon.svg";
import shoppingCart from "../assets/shopping-cart.svg";
import Cart from "./Cart";
import { useContext, useState } from "react";
import { CartContext, ThemeContext } from "../contexts";

export default function Header() {
  const [isShow, setIsShow] = useState(false);
  const { cartData } = useContext(CartContext);
  const { theme, setTheme } = useContext(ThemeContext);

  function handleTheme() {
    setTheme(!theme);
  }
  //  to close the cart window
  function handleCancelCart() {
    setIsShow(!isShow);
  }

  return (
    <header>
      {isShow && <Cart onCancelCart={handleCancelCart} />}

      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={logo} width="139" height="26" alt="logo" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => handleTheme()}
            >
              <img src={theme ? sun : moon} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img
                onClick={() => setIsShow(!isShow)}
                src={shoppingCart}
                width="24"
                height="24"
                alt=""
              />
              {cartData.length > 0 && (
                <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                  {cartData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
