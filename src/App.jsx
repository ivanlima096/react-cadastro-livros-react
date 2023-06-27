import { Route, Routes } from "react-router-dom";
import InclusaoLivros from "./components/InclusaoLivros";
import MenuSuperior from "./components/MenuSuperior";
import ManutencaoLivros from "./components/ManutencaoLivros";
import ResumoLivros from "./components/ResumoLivros";

export default function App() {
  return (
    <>
      <MenuSuperior />
      <Routes>
        <Route path="incluir" element={<InclusaoLivros />} />
        <Route path="manut" element={<ManutencaoLivros />} />
        <Route path="resumo" element={<ResumoLivros />} />
      </Routes>
    </>
  )
}