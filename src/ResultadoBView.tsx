import { useEffect, useState } from 'react';
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
        <h1 className="title">[    -x²+x³+x⁴+x⁶],[1+x²+x³+x⁴-x⁵]  </h1>
        <br />
        <br />
        <button className="button" onClick={handleContinue} style={{ margin: '0 auto' }} >Continuar</button>
    </div>
);

// Datos de la matriz
// Anillo de polinomios
const polynomialRing = [
    ['31 + 42x + 7x² + 30x³ + 41x⁴ + 6x⁶','9 + 5x + 26x² + 47x³ + 47x⁴ + 22x⁵ + 8x⁶'],
    ['49x + 45x² + 9x³ + 24x⁴ + 38x⁵ + 35x⁶','11 + 48x + 21x² + 20x³ + 11x⁴ + 11x⁵ + 26x⁶']
];

const b = [
    ['11 + 35x + 36x² + 18x³ + 9x⁴ + 4x⁵ + 49x⁶'],
['49 + 26x² + 7x³ + 32x⁴ + 37x⁵ + 10x⁶']
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
    ['43 + 47x + 49x² + 28x³ + 47x⁴ + 25x⁶','33 + 5x + 17x² + 5x³ + 19x⁴ + 9x⁵ + 6x⁶'],
['40 + 16x² + 36x³ + 10x⁴ + 30x⁵ + 22x⁶']
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
         y normalizar m'= 26 + 26x⁵ es el par (u,v) :</h1>
        <RingUV />
        <br />
        <br />
        <button className="button" onClick={handleContinue} style={{ margin: '0 auto' }} >Continuar</button>
    </div>
);

const Content3 = () => (
    <div>
        <h1 className="title">El desencriptado del par (u,v) tras calcular m<sub>n</sub> = e<sup>T</sup>r + e<sub>2</sub> + m - s<sup>T</sup> e<sub>1</sub>  determina que tu letra en código ASCII es:</h1>
        <br />
        <h1 className="title">1000010</h1>
        <br />
        <Link to="/CifradoViewKyber" className="button" style={{ margin: '0 auto' }}><strong>Finalizar</strong></Link>
    </div>
);


const ResultadoBView = () => {
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

export default ResultadoBView;

