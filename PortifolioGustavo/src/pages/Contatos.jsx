import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contatos.css'; // Importando o CSS para estilização

function Contatos() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_5zbqcpm', // Substitua pelo seu Service ID do EmailJS
        'template_8gduobm', // Substitua pelo seu Template ID do EmailJS
        form.current,
        'DxQotlybQPBPqHG9E' // Substitua pela sua API Key do EmailJS
      )
      .then(
        (result) => {
          alert('Mensagem enviada com sucesso!');
          console.log(result.text);
        },
        (error) => {
          alert('Erro ao enviar a mensagem. Tente novamente.');
          console.log(error.text);
        }
      );

    e.target.reset(); // Limpa o formulário após o envio
  };

  return (
    <div className="contatos-container">
      <h1 className="contatos-title">Entre em Contato</h1>
      <p className="contatos-description">
        Ficarei feliz em ouvir de você! Entre em contato através do formulário abaixo ou pelas redes sociais.
      </p>

      {/* Formulário de Contato */}
      <form ref={form} onSubmit={sendEmail} className="contato-form">
        <input
          type="text"
          name="user_name"
          placeholder="Seu Nome"
          className="contato-input"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Seu Email"
          className="contato-input"
          required
        />
        <textarea
          name="message"
          placeholder="Sua Mensagem"
          className="contato-textarea"
          rows="5"
          required
        ></textarea>
        <button type="submit" className="contato-button">
          Enviar
        </button>
      </form>

      {/* Redes Sociais */}
      <div className="redes-sociais">
        <a
          href="https://github.com/Gucrima"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/gustavo-franco-83b4022a7/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a
          href="mailto:gusssoares09@gmail.com"
          className="social-link"
        >
          <i className="fas fa-envelope"></i> Email
        </a>
        <a
          href="https://www.instagram.com/gustavo.sfranco/"
          className="social-link"
        >
          <i className="fas fa-envelope"></i> Instagram
        </a>
      </div>
    </div>
  );
}

export default Contatos;
