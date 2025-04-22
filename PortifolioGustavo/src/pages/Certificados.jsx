import React, { useState } from 'react';
import './Certificados.css'; // Importando o CSS para estilização

function Certificados() {
  const [selectedCertificado, setSelectedCertificado] = useState(null);
  const [filter, setFilter] = useState('Todos'); // Estado para o filtro

  const certificados = [
    {
      id: 1,
      image: './Images/certificado1.png', // Substitua pelo caminho da imagem
      title: 'Certificado de participação',
      description: 'Certificado de participação da DWX+25 💻',
      type: 'Participação',
    },
    {
      id: 2,
      image: './Images/certificado2.png',
      title: 'Certificado de Qualificação',
      description: 'Certificado de qualificação em lógica de programação',
      type: 'Qualificação',
    },
    {
      id: 3,
      image: './Images/certificado3.png',
      title: 'Certificado de Qualificação',
      description: 'Certificado de qualificação em assistente de programador e modelador de sistemas',
      type: 'Qualificação',
    },
  ];

  const handleCardClick = (certificado) => {
    setSelectedCertificado(certificado);
  };

  const handleCloseModal = () => {
    setSelectedCertificado(null);
  };

  const filteredCertificados =
    filter === 'Todos'
      ? certificados
      : certificados.filter((certificado) => certificado.type === filter);

  return (
    <div className="certificados-container">
      <h1 className="certificados-title">Meus Certificados</h1>

      {/* Filtro */}
      <div className="certificados-filter">
        <button
          className={`filter-button ${filter === 'Todos' ? 'active' : ''}`}
          onClick={() => setFilter('Todos')}
        >
          Todos
        </button>
        <button
          className={`filter-button ${filter === 'Qualificação' ? 'active' : ''}`}
          onClick={() => setFilter('Qualificação')}
        >
          Qualificação
        </button>
        <button
          className={`filter-button ${filter === 'Participação' ? 'active' : ''}`}
          onClick={() => setFilter('Participação')}
        >
          Participação
        </button>
      </div>

      {/* Grid de certificados */}
      <div className="certificados-grid">
        {filteredCertificados.map((certificado) => (
          <div
            key={certificado.id}
            className="certificado-card"
            onClick={() => handleCardClick(certificado)}
          >
            <img
              src={certificado.image}
              alt={certificado.title}
              className="certificado-image"
            />
            <h2 className="certificado-title">{certificado.title}</h2>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCertificado && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleCloseModal}>
              &times;
            </span>
            <img
              src={selectedCertificado.image}
              alt={selectedCertificado.title}
              className="modal-image"
            />
            <h2>{selectedCertificado.title}</h2>
            <p>{selectedCertificado.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Certificados;
