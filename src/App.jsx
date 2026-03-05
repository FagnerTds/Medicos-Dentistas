import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./globalStyle.scss";
import Home from "./pages/home/Home";
import Voluntario from "./pages/voluntario/Voluntario";
import Header from "./components/header/Header";

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="voluntario" element={<Voluntario />} />
      </Routes>
    </BrowserRouter>
  );
}
