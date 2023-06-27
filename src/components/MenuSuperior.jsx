import { Link } from "react-router-dom";

export default function MenuSuperior() {
  return (
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark sticky-top">
      <div className="container">
        <Link to="/resumo" className="navbar-brand">Controle Pessoal de Livros</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="incluir" className="nav-link">Inclusão</Link>
          </li>
          <li className="nav-item">
            <Link to="/manut" className="nav-link">Manutenção</Link>
          </li>
          <li className="nav-item">
            <Link to="/resumo" className="nav-link">Resumo</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}