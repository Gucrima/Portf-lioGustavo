import React, { useState } from 'react';
import './SobreMim.css'; // Importando o arquivo CSS

function SobreMim() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = [
    './Images/foto3.png', // Substitua pelos caminhos das suas fotos
    './Images/foto2.png',
    './Images/foto1.png',
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  return (
    <div>
      <div className="conteiner-sobre-mim">
        <div className="carrocel-fotos-minhas">
          <button className="prev-button" onClick={handlePrev}>
            &#8249;
          </button>
          <div className="carrocel-fotos-container">
            {photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Foto ${index + 1}`}
                className={`carrocel-foto ${index === currentIndex ? 'active' : ''}`}
                style={{
                  transform: `translateX(${(index - currentIndex) * 100}%)`,
                }}
              />
            ))}
          </div>
          <button className="next-button" onClick={handleNext}>
            &#8250;
          </button>
        </div>
        <div className="texto-sobre-mim">
          <h1>Sobre mim</h1>
          <p>
            Olá! Me chamo <strong>Gustavo</strong> e sou um entusiasta da tecnologia em formação, atualmente cursando <strong>Desenvolvimento de Sistemas</strong> no <strong>Senai SC</strong>. Sou apaixonado por inovação, resolução de problemas e pelo impacto que a tecnologia pode causar no mundo real.
          </p>
          <p>
            Durante minha jornada acadêmica, venho me aprofundando em linguagens de programação, metodologias ágeis e boas práticas em análise e desenvolvimento de sistemas. Tenho especial interesse em <strong>desenvolvimento web</strong>, <strong>programação backend</strong> e <strong>gestão de bancos de dados</strong>.
          </p>
          <p>Tenho conhecimentos nas seguintes tecnologias e ferramentas:</p>
          <ul>
            <li><strong>Linguagens e frameworks:</strong> JavaScript, HTML, CSS, React.js, C#.NET</li>
            <li><strong>Banco de dados:</strong> PostgreSQL</li>
            <li><strong>Metodologias e organização:</strong> Scrum, Trello</li>
          </ul>
          <p>
            Além do universo da tecnologia, tenho outras paixões que fazem parte do meu dia a dia: sou fã de <strong>carros</strong>, adoro jogar <strong>video games</strong>, tirar <strong>fotos de paisagens</strong> e manter uma rotina ativa na <strong>academia</strong>. Acredito que esses interesses me ajudam a manter a mente criativa, focada e equilibrada.
          </p>
          <p>
            Atualmente, busco oportunidades para aplicar meus conhecimentos, aprender com profissionais experientes e colaborar em projetos desafiadores e inovadores. Sou uma pessoa <strong>comprometida</strong>, <strong>curiosa</strong>, de aprendizado rápido e sempre pronta para novos desafios.
          </p>
          <p>
            Estou aberto a <strong>vagas de estágio</strong>, posições <strong>júnior</strong> e conexões com pessoas da área.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SobreMim;
