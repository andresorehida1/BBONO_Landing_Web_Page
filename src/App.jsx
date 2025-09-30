import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Menu from "./pages/Menu.jsx"
import Home from "./pages/Home.jsx"
import Contatti from "./pages/Contatti.jsx"; 

export default function App() {
  return (
    <div>
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contatti" element={<Contatti />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}