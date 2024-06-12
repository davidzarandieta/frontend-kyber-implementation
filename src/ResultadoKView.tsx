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
        <br />
        <br />
        <h1 className="title" style={{ fontSize: '305%' }}>GENERACIÓN DE CLAVES</h1>
        <br />
        <h1 className="title" style={{ fontSize: '205%' }}>El módulo de la clave privada <strong>s</strong> (generada aleatoriamente) es:</h1>
        <br />
        <h1 className="title">[1 + x + -x³ + x⁴],[-1 + x³ + x⁴ + x⁵]  </h1>
        <br />
        <br />
        <button className="button" onClick={handleContinue} style={{ margin: '0 auto' }} >Continuar</button>
    </div>
);

// Datos de la matriz
// Anillo de polinomios
const polynomialRing = [
    ['24 + 49x + 17x² + 24x³ + 48x⁴ + 35x⁵ + 15x⁶', '25 + 38x + 21x² + 19x³ + 45x⁴ + 11x⁵ + 16x⁶'],
['12 + 21x + 42x² + 44x³ + 16x⁴ + 42x⁵ + 22x⁶','30 + 37x² + 41x³ + 2x⁴ + 31x⁵ + 26x⁶']
];

const b = [
    ['26 + 49x + 5x² + 33x³ + 50x⁴ + 36x⁵ + 3x⁶'],
['6 + 38x + 35x³ + 2x⁴ + 23x⁵ + 13x⁶']
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
    ['45 + 14x + 33x² + 24x³ + 8x⁴ + 38x⁵ + 33x⁶', '15 + 7x + 2x² + 14x³ + 37x⁴ + 24x⁵ + 2x⁶'],
    ['41 + 50x + 2x² + 5x³ + 5x⁴ + 20x⁵ + 11x⁶']
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
        <h1 className="title" style={{ fontSize: '305%' }}>GENERACIÓN DE CLAVES</h1>
        <br />
        <h1 className="title" style={{ fontSize: '205%' }}>La clave pública generada es el par (A,b) que viene dado por el anillo A (generado aleatoriamente) y <p>b<sub>i</sub> = ⟨a<sub>i</sub>, s⟩ + e<sub>i</sub>:</p></h1>
        <PolynomialRing />
        <br />
        <br />
        <button className="button" onClick={handleContinue} style={{ margin: '0 auto' }} >Continuar</button>
    </div>
);

// Componente para mostrar el contenido 2
const Content2 = ({ handleContinue }: { handleContinue: () => void }) => (
    <div>
        <br />
        <br />
        <h1 className="title" style={{ fontSize: '305%' }}>CIFRADO</h1>
        <br />
        <h1 className="title" style={{ fontSize: '205%' }}>El resultado cifrado tras calcular <p>u = A<sup>T</sup>r + e<sub>1</sub> y v = b<sup>T</sup>r + e<sub>2</sub> + m</p>
         y normalizar m'= 26 + 26x³ + 26x⁵ + 26x⁶ es el par (u,v) :</h1>
        <RingUV />
        <br />
        <br />
        <button className="button" onClick={handleContinue} style={{ margin: '0 auto' }} >Continuar</button>
    </div>
);

const Content3 = ({ handleContinue }: { handleContinue: () => void }) => (
    <div>
         <br />
        <br />
        <h1 className="title" style={{ fontSize: '305%' }}>DESCIFRADO</h1>
        <br />
        <h1 className="title" style={{ fontSize: '205%' }}>El descifrado del par (u,v) tras calcular <p>m<sub>n</sub> = e<sup>T</sup>r + e<sub>2</sub> + m - s<sup>T</sup> e<sub>1</sub></p> 
        si los valores están más cerca de p que de 0 definimos el bit como 1, si no, definimos como 0.</h1>
        <button className="button" onClick={handleContinue} style={{ margin: '0 auto' }} >Continuar</button>
    </div>
);

const Content3_1 = () => (
    <div>
        <br />
        <br />
        <h1 className="title" style={{ fontSize: '305%' }}>DESCIFRADO</h1>
        <br />
        <h1 className="title"style={{ fontSize: '205%' }}>El descifrado del par (u,v)  determina que los bits son: </h1>
        <h1 className="title"style={{ fontSize: '205%' }}>1001011</h1>
        <h1 className="title"style={{ fontSize: '205%' }}>Por lo tanto tu letra en código ASCII es: K</h1>
        <br />
        <Link to="/CifradoViewKyber" className="button" style={{ margin: '0 auto' }}><strong>Finalizar</strong></Link>
    </div>
);


const ResultadoKView = () => {
    const [showText, setShowText] = useState(true);
    const [showContent1, setShowContent1] = useState(false);
    const [showContent2, setShowContent2] = useState(false);
    const [showContent3, setShowContent3] = useState(false);
    const [showContent3_1, setShowContent3_1] = useState(false);

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
        }else if (showContent3) {
            setShowContent3(false);
            setShowContent3_1(true);
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
                    {showContent3 && <Content3 handleContinue={handleContinue}/>}
                    {showContent3_1 && <Content3_1 />}
                </div>
                <canvas id="canvas3d" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}></canvas>
            </div>
        </div>
    );
};

export default ResultadoKView;

