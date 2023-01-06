import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Perfil from "./Perfil";
import "./Reset.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="perfil" element={<Perfil />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
