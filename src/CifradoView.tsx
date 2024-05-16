
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Application } from '@splinetool/runtime';
import './MainMenu.css';
import kyberlogo from '/kyber-logo.png';


const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 100,
  height: 50,
  padding: 10,
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(48px)', // Increase the translateX value to move the switch further
      '& .MuiSwitch-thumb:before': {
        content: "'1'",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#fff',
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
    '&.Mui-checked + .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 40,
    height: 40,
    '&::before': {
      content: "'0'",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#fff',
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

const CifradoView = () => {
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
        <h1 className="title">Elige el bit que quieras cifrar.</h1>
        <br></br>
        <br></br>
        <br></br>
          <form>
            {/* <label htmlFor="bit">Elige el bit a cifrar:</label> */}
            <FormGroup>
              <FormControlLabel
                control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                label=""
              />
            </FormGroup>         
            <button style={{ margin: '0 auto' }} className="button">Cifrar</button>
          </form>
        </div>
        <canvas id="canvas3d" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}></canvas>
      </div>
    </div>
  );
};

export default CifradoView;