import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Application } from '@splinetool/runtime';
import './MainMenu.css';
import kyberlogo from '/kyber-logo.png';


const CifradoViewKyber = () => {
  const [switchValue, setSwitchValue] = useState(false);

  useEffect(() => {
    const canvas = document.getElementById('canvas3d') as HTMLCanvasElement;
    const app = new Application(canvas);
    app.load('https://prod.spline.design/yGoUnx5KGJnvs9dX/scene.splinecode');
  }, []);

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
                        <button className="button" style={{ width: '20%' }}>K</button>
                        <button className="button" style={{ width: '20%' }}>Y</button>
                        <button className="button" style={{ width: '20%' }}>B</button>
                        <button className="button" style={{ width: '20%' }}>E</button>
                        <button className="button" style={{ width: '20%' }}>R</button>

                   
                </div>
            </div>
            <canvas id="canvas3d" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}></canvas>
        </div>
    </div>
);
};

export default CifradoViewKyber;
