
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Application } from '@splinetool/runtime';

const CifradoView = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas3d') as HTMLCanvasElement;
    const app = new Application(canvas);
    app.load('https://prod.spline.design/yGoUnx5KGJnvs9dX/scene.splinecode');
  }, []);
  
  return (
    <div className="main-menu">
      <div className="menu-content">
        <form>
          <label htmlFor="bit">Elige el bit a cifrar:</label>
          <select id="bit" name="bit">
            <option value="0">0</option>
            <option value="1">1</option>
          </select>
          <div className="button-container">
            <button  className="cifrar-button">Cifrar</button>
          </div>
        </form>
        <Link to="/">Volver al menú principal</Link>
      </div>
      <canvas id="canvas3d" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}></canvas>
    </div>
  );
};

export default CifradoView;