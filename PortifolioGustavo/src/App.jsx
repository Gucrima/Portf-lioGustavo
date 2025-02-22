// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SobreMim from './pages/SobreMim';
import Projetos from './pages/Projetos';
import Certificados from './pages/Certificados';
import Contatos from './pages/Contatos';
import Navbar from './components/NavBar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<SobreMim />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contatos" element={<Contatos />} />
        <Route path="/certificados" element={<Certificados />} />
      </Routes>
    </Router>
  );
}

export default App;