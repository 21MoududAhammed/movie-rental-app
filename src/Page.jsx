import { useContext } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MoviesList from "./components/MoviesList";
import Sidebar from "./components/Sidebar";
import { ThemeContext } from "./contexts";

export default function Page() {
    const {theme, setTheme} = useContext(ThemeContext);
  return (
    <div className={`h-full w-full ${theme && 'dark'}`}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MoviesList />
        </div>
      </main>
      <Footer />
    </div>
  );
}
