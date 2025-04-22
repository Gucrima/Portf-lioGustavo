import React, { useState } from 'react';
import './Projetos.css'; // Importando o CSS para estilização

function Projetos() {
  const [filter, setFilter] = useState('Todos'); // Estado para o filtro
  const [selectedProjeto, setSelectedProjeto] = useState(null); // Estado para o modal

  const projetos = [
    {
      id: 1,
      image: './Images/logoMarrom.svg', // Substitua pelo caminho da imagem
      title: 'Petmate',
      description: 'Site para adoção de animais',
      type: 'Equipe',
      repository: 'https://github.com/projeto-petmate/petmate', // Link do repositório
    }
  ];

  const handleCardClick = (projeto) => {
    setSelectedProjeto(projeto);
  };

  const handleCloseModal = () => {
    setSelectedProjeto(null);
  };

  const filteredProjetos =
    filter === 'Todos'
      ? projetos
      : projetos.filter((projeto) => projeto.type === filter);

  return (
    <div className="projetos-container">
      <h1 className="projetos-title">Meus Projetos</h1>

      {/* Filtro */}
      <div className="projetos-filter">
        <button
          className={`filter-button ${filter === 'Todos' ? 'active' : ''}`}
          onClick={() => setFilter('Todos')}
        >
          Todos
        </button>
        <button
          className={`filter-button ${filter === 'Pessoal' ? 'active' : ''}`}
          onClick={() => setFilter('Pessoal')}
        >
          Pessoais
        </button>
        <button
          className={`filter-button ${filter === 'Equipe' ? 'active' : ''}`}
          onClick={() => setFilter('Equipe')}
        >
          Equipe
        </button>
      </div>

      {/* Grid de projetos */}
      <div className="projetos-grid">
        {filteredProjetos.map((projeto) => (
          <div
            key={projeto.id}
            className="projeto-card"
            onClick={() => handleCardClick(projeto)}
          >
            <img
              src={projeto.image}
              alt={projeto.title}
              className="projeto-image"
            />
            <h2 className="projeto-title">{projeto.title}</h2>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProjeto && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button2" onClick={handleCloseModal}>
              &times;
            </span>
            <img
              src={selectedProjeto.image}
              alt={selectedProjeto.title}
              className="modal-image"
            />
            <h2>{selectedProjeto.title}</h2>
            <p>{selectedProjeto.description}</p>
            <a
              href={selectedProjeto.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="repository-button"
            >
              Ver Repositório
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projetos;
