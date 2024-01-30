import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MoviesList from "./components/MoviesList";
import Sidebar from "./components/Sidebar";
import { CartContext } from "./contexts";

export default function App() {
  const [cartData, setCartData] = useState([]);

  return (
    <>
      <CartContext.Provider value={{ cartData, setCartData }}>
        <Header />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <Sidebar />
            <MoviesList />
          </div>
        </main>
        <Footer />
      </CartContext.Provider>
    </>
  );
}
