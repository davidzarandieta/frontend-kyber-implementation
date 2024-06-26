import kyberlogo from '/kyber-logo.png'; // Import the variable kyberlogo that contains the path to the Kyber logo
import './MainMenu.css'; // Estilo CSS para la vista del menú principal
import { Link } from 'react-router-dom';

const MainMenu = () => {
  return (
    <div className="main-menu">
      <video src="/rocket.mp4" autoPlay loop muted />
      <div className="menu-content">
        <div className="logo">
          <img src={kyberlogo} alt="Logo de Kyber" /> {/* Usa la variable kyberlogo para la ruta del logo */}
        </div>
        <h1 className="title">CRYSTALS-Kyber</h1>
        <p className="subtitle">¡Bienvenido a la era de la criptografía post-cuántica!</p>
        <div className="button">
          <Link to="/ElectionView" className="start-button"><strong>Empieza a cifrar con Kyber</strong></Link>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
