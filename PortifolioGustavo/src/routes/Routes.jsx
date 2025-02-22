import { createBrowserRouter } from "react-router-dom";
import SobreMim from '../components/SobreMim';
import Projetos from '../components/Projetos';
import Certificados from '../components/Certificados';
import Contatos from '../components/Contatos';

const router = createBrowserRouter([
  { path: '/SobreMim', element: <SobreMim /> },
  { path: '/Projetos', element: <Projetos /> },
  { path: '/Certificados', element: <Certificados /> },
  { path: '/Contatos', element: <Contatos /> },
]);

export default router;
