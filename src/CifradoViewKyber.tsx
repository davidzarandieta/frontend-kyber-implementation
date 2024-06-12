import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Application } from '@splinetool/runtime';
import './MainMenu.css';
import kyberlogo from '/kyber-logo.png';


const CifradoView = () => {
  
  const [buttonTexts, setButtonTexts] = useState({
    K: 'K',
    Y: 'Y',
    B: 'B',
    E: 'E',
    R: 'R'
  });

  useEffect(() => {
    const canvas = document.getElementById('canvas3d') as HTMLCanvasElement;
    const app = new Application(canvas);
    app.load('https://prod.spline.design/yGoUnx5KGJnvs9dX/scene.splinecode');
  }, []);

  const handleMouseEnter = (letter) => {
    const binary = {
      K: '1001011',
      Y: '1011001',
      B: '1000010',
      E: '1000101',
      R: '1010010'
    };
    setButtonTexts(prevState => ({ ...prevState, [letter]: binary[letter] }));
  };

  const handleMouseLeave = (letter) => {
    setButtonTexts(prevState => ({ ...prevState, [letter]: letter }));
  };

  return (
    <div>
      <div className="top-menu">
        <div className="menu-content">
          <h1 className="title"><Link to="/"><img src={kyberlogo} alt="Logo de Kyber" /></Link></h1>
        </div>
      </div>
      <div className="main-menu">
        <div className="menu-content">
          <h1 className="title">Elige la letra de KYBER que quieras cifrar.</h1>
          <br></br>
          <br></br>
          <br></br>
          <div className="button-container">
            <Link to="/ResultadoKView" className="button" onMouseEnter={() => handleMouseEnter('K')} onMouseLeave={() => handleMouseLeave('K')} style={{ width: '20%' }}>{buttonTexts.K}</Link>
            <Link to="/ResultadoYView" className="button" onMouseEnter={() => handleMouseEnter('Y')} onMouseLeave={() => handleMouseLeave('Y')} style={{ width: '20%' }}>{buttonTexts.Y}</Link>
            <Link to="/ResultadoBView" className="button" onMouseEnter={() => handleMouseEnter('B')} onMouseLeave={() => handleMouseLeave('B')} style={{ width: '20%' }}>{buttonTexts.B}</Link>
            
            <Link to="/ResultadoEView" className="button" onMouseEnter={() => handleMouseEnter('E')} onMouseLeave={() => handleMouseLeave('E')} style={{ width: '20%' }}>{buttonTexts.E}</Link>
            <Link to="/ResultadoRView" className="button" onMouseEnter={() => handleMouseEnter('R')} onMouseLeave={() => handleMouseLeave('R')} style={{ width: '20%' }}>{buttonTexts.R}</Link>
            
          </div>
        </div>
        <canvas id="canvas3d" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}></canvas>
      </div>
    </div>
  );
};

export default CifradoView;


