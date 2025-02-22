// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Importando o arquivo CSS

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      left: 0,
      width: 0,
    };
  }

  handleMouseEnter = (e) => {
    const rect = e.target.getBoundingClientRect();
    this.setState({
      left: rect.left + window.scrollX,
      width: rect.width,
    });
  };

  render() {
    return (
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/" className="navbar-link" onMouseEnter={this.handleMouseEnter}>Gustavo Franco</Link>
          </li>
          <li className="navbar-item">
            <Link to="/certificados" className="navbar-link" onMouseEnter={this.handleMouseEnter}>Certificados</Link>
          </li>
          <li className="navbar-item">
            <Link to="/projetos" className="navbar-link" onMouseEnter={this.handleMouseEnter}>Projetos</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contatos" className="navbar-link" onMouseEnter={this.handleMouseEnter}>Contatos</Link>
          </li>
        </ul>
        <div className="stripe" style={{ left: this.state.left, width: this.state.width }} />
      </nav>
    );
  }
}

export default Navbar;
