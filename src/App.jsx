import Footer from "./components/Footer";
import Header from "./components/Header";
import MoviesList from "./components/MoviesList";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MoviesList/>
        </div>
      </main>
      <Footer/>
    </>
  );
}
