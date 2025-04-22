import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css'; // Importando o arquivo CSS

function Navbar() {
  const navigate = useNavigate();
  const [stripeStyle, setStripeStyle] = useState({ left: 0, width: 0 });
  const [activeLink, setActiveLink] = useState('/'); // Estado para rastrear o link ativo
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para abrir/fechar o menu

  const handleMouseEnter = (link, event) => {
    const rect = event.target.getBoundingClientRect();
    setStripeStyle({
      left: rect.left + window.scrollX,
      width: rect.width,
    });
    navigate(link); // Redireciona para a página correspondente
  };

  const handleClick = (link) => {
    setActiveLink(link); // Define o link ativo
    setIsMenuOpen(false); // Fecha o menu ao clicar em um link
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alterna o estado do menu
  };

  return (
    <nav className="navbar">
      <div className="menu-toggle-container">
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <span className="mobile-title">Portfólio Gustavo</span>
      </div>
      <ul className={`navbar-list ${isMenuOpen ? 'open' : ''}`}>
        <li className="navbar-item">
          <Link
            to="/"
            className={`navbar-link ${activeLink === '/' ? 'active' : ''}`}
            onMouseEnter={(e) => handleMouseEnter('/', e)}
            onClick={() => handleClick('/')}
          >
            Gustavo Franco
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="/certificados"
            className={`navbar-link ${activeLink === '/certificados' ? 'active' : ''}`}
            onMouseEnter={(e) => handleMouseEnter('/certificados', e)}
            onClick={() => handleClick('/certificados')}
          >
            Certificados
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="/projetos"
            className={`navbar-link ${activeLink === '/projetos' ? 'active' : ''}`}
            onMouseEnter={(e) => handleMouseEnter('/projetos', e)}
            onClick={() => handleClick('/projetos')}
          >
            Projetos
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="/contatos"
            className={`navbar-link ${activeLink === '/contatos' ? 'active' : ''}`}
            onMouseEnter={(e) => handleMouseEnter('/contatos', e)}
            onClick={() => handleClick('/contatos')}
          >
            Contatos
          </Link>
        </li>
      </ul>
      <div className="stripe" style={stripeStyle}></div>
    </nav>
  );
}

export default Navbar;
