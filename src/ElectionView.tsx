
import kyberlogo from '/kyber-logo.png'; // Import the variable kyberlogo that contains the path to the Kyber logo
import './MainMenu.css'; // Estilo CSS para la vista del menú principal
import { Link } from 'react-router-dom';

const ElectionView = () => {
  return (
    <div>
    <div className="top-menu">
        <div className="menu-content">
          <h1 className="title"><Link to="/"><img src={kyberlogo} alt="Logo de Kyber" /></Link></h1>
        </div>
      </div>
    <div className="main-menu">
      <video src="/rocket.mp4" autoPlay loop muted />
      <div className="menu-content">
        <h1 className="title">Elige la implementación que desees:</h1>
        <div className="button-container">
          <Link to="/CifradoView" className="button"><strong>Implementación Regev</strong></Link>
          <Link to="/CifradoViewKyber" className="button"><strong>Implementación Kyber</strong></Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ElectionView;