import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Application } from '@splinetool/runtime';
import './MainMenu.css';
import kyberlogo from '/kyber-logo.png';

// Componente para el contenido del menú superior
const TopMenu = () => (
    <div className="top-menu">
        <div className="menu-content">
            <h1 className="title">
                <Link to="/">
                    <img src={kyberlogo} alt="Logo de Kyber" />
                </Link>
            </h1>
        </div>
    </div>
);

// Componente para mostrar el contenido inicial
const InitialContent = ({ handleContinue }: { handleContinue: () => void }) => (
    <div>
        <h1 className="title">El módulo de la clave privada <strong>s</strong> (generada aleatoriamente) es:</h1>
        <br />
        <h1 className="title">[-1-x²+x³-x⁶],[1+x+x³+x⁴-x⁶]</h1>
        <br />
        <br />
        <button className="button" onClick={handleContinue} style={{ margin: '0 auto' }} >Continuar</button>
    </div>
);

// Datos de la matriz
// Anillo de polinomios
const polynomialRing = [
    ['21 + 38x + 13x² + 21x³ + 15x⁴ + x⁵ + 37x⁶','17 + 35x + 17x² + 50x³ + 46x⁴ + 9x⁵ + 24x⁶'],
['30 + 22x + 35x² + 41x³ + 16x⁵ + 3x⁶', '23 + 38x + 31x² + 41x³ + 20x⁴ + 36x⁵ + 46x⁶']
];

const b = [
    ['37 + 25x + 19x² + 32x³ + 15x⁴ + 6x⁵ + 32x⁶'],
    ['13 + 37x + 3x² + 36x³ + 9x⁴ + 50x⁵ + 39x⁶']
];


// Componente para renderizar el anillo de polinomios
const PolynomialRing = () => (
    <table className="matrix-table">
         <thead>
            <tr>
                <th>A1</th>
                <th>A2</th>
                <th>b</th> {/* Encabezado de columna para los números adicionales */}
            </tr>
        </thead>
        <tbody>
            {polynomialRing.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {row.map((polynomial, colIndex) => (
                        <td key={colIndex}>{polynomial}</td>
                    ))}
                    <td>{b[rowIndex]}</td> {/* Columna para los números adicionales */}
                </tr>
            ))}
        </tbody>
    </table>
);

const u_v_ring = [
    ['32 + 30x + 39x² + 5x³ + 14x⁴ + 25x⁵ + 44x⁶','29 + 13x + 20x² + 33x³ + 38x⁴ + 19x⁵'],
['7 + 13x + 49x² + 38x³ + 35x⁴ + 47x⁵ + 4x⁶']
];

// Componente para renderizar el anillo de polinomios
const RingUV = () => (
    <table className="matrix-table">
        <thead>
            <tr>
                <th>U</th>
                <th>V</th>
            </tr>
        </thead>
        <tbody>
            {u_v_ring.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {row.map((polynomial, colIndex) => (
                        <td key={colIndex}>{polynomial}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
);


// Componente para mostrar el contenido 1
const Content1 = ({ handleContinue }: { handleContinue: () => void }) => (
    <div>
        <br />
        <br />
        <br />
        <br />
        <h1 className="title" style={{ fontSize: '205%' }}>La clave pública generada es el par (A,b) que viene dado por el anillo A (generada aleatoriamente) y b<sub>i</sub> = ⟨a<sub>i</sub>, s⟩ + e<sub>i</sub>:</h1>
        <PolynomialRing />
        <br />
        <br />
        <button className="button" onClick={handleContinue} style={{ margin: '0 auto' }} >Continuar</button>
    </div>
);

// Componente para mostrar el contenido 2
const Content2 = ({ handleContinue }: { handleContinue: () => void }) => (
    <div>
        <h1 className="title" style={{ fontSize: '205%' }}>El resultado encriptado tras calcular <p>u = A<sup>T</sup>r + e<sub>1</sub> y v = b<sup>T</sup>r + e<sub>2</sub> + m</p>
         y normalizar m'= 26 + 26x² + 26x⁵ es el par (u,v) :</h1>
        <RingUV />
        <br />
        <br />
        <button className="button" onClick={handleContinue} style={{ margin: '0 auto' }} >Continuar</button>
    </div>
);

const Content3 = () => (
    <div>
        <h1 className="title">El desencriptado del par (u,v) tras calcular m<sub>n</sub> = e<sup>T</sup>r + e<sub>2</sub> + m - s<sup>T</sup> e<sub>1</sub>  determina que tu tu letra en código ASCII es:</h1>
        <br />
        <h1 className="title">1010010</h1>
        <br />
        <Link to="/CifradoViewKyber" className="button" style={{ margin: '0 auto' }}><strong>Finalizar</strong></Link>
    </div>
);


const ResultadoRView = () => {
    const [showText, setShowText] = useState(true);
    const [showContent1, setShowContent1] = useState(false);
    const [showContent2, setShowContent2] = useState(false);
    const [showContent3, setShowContent3] = useState(false);

    useEffect(() => {
        const canvas = document.getElementById('canvas3d') as HTMLCanvasElement;
        const app = new Application(canvas);
        app.load('https://prod.spline.design/yGoUnx5KGJnvs9dX/scene.splinecode');
    }, []);

    const handleContinue = () => {
        if (showText) {
            setShowText(false);
            setShowContent1(true);
        } else if (showContent1) {
            setShowContent1(false);
            setShowContent2(true);
        } else if (showContent2) {
            setShowContent2(false);
            setShowContent3(true);
        }
    };

    return (
        <div>
            <TopMenu />
            <div className="main-menu">
                <div className="menu-content">
                    {showText && <InitialContent handleContinue={handleContinue} />}
                    {showContent1 && <Content1 handleContinue={handleContinue} />}
                    {showContent2 && <Content2 handleContinue={handleContinue} />}
                    {showContent3 && <Content3 />}
                </div>
                <canvas id="canvas3d" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}></canvas>
            </div>
        </div>
    );
};

export default ResultadoRView;

