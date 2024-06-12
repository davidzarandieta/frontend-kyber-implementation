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
        <h1 className="title">El vector de la clave privada <strong>s</strong> (generada aleatoriamente) es:</h1>
        <br />
        <h1 className="title">[0, 12, 1, 7]</h1>
        <br />
        <br />
        <button className="button" onClick={handleContinue} style={{ margin: '0 auto' }} >Continuar</button>
    </div>
);

// Datos de la matriz
const matrixData = [
    [13, 6, 9, 16],
    [11, 5, 8, 14],
    [8, 1, 15, 7],
    [11, 1, 0, 2],
    [16, 8, 9, 13],
    [0, 13, 10, 0],
    [13, 0, 5, 5],
    [7, 5, 11, 11],
    [0, 11, 4, 4],
    [11, 2, 4, 5],
    [9, 6, 12, 8],
    [1, 3, 2, 6],
    [10, 1, 2, 9],
    [6, 5, 8, 10],
    [5, 6, 10, 10],
    [6, 15, 13, 6],
    [9, 7, 16, 10],
    [12, 0, 6, 2],
    [10, 14, 9, 15],
];

// Números adicionales a la derecha de la matriz
const additionalNumbers = [193, 166, 76, 26, 196, 166, 41, 148, 165, 64, 140, 80, 77, 138, 152, 235, 170, 20, 282];

// Componente para renderizar la matriz con los números adicionales a la derecha
// Componente para renderizar la matriz con los números adicionales a la derecha
const Matrix = () => (
    <table className="matrix-table">
        <thead>
            <tr>
                <th>a1</th>
                <th>..</th>
                <th>..</th>
                <th>an</th>
                <th>b</th> {/* Encabezado de columna para los números adicionales */}
            </tr>
        </thead>
        <tbody>
            {matrixData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {row.map((value, colIndex) => (
                        <td key={colIndex}>{value}</td>
                    ))}
                    <td>{additionalNumbers[rowIndex]}</td> {/* Columna para los números adicionales */}
                </tr>
            ))}
        </tbody>
    </table>
);

// Nueva matriz de una fila y 4 columnas
const matrix2Data = [89, 76, 98, 97, 1691];

// Componente para renderizar la nueva matriz
const Matrix2 = () => (
    <table className="matrix-table">
        <thead>
            <tr>
                <th>a1</th>
                <th>..</th>
                <th>..</th>
                <th>an</th>
                <th>b</th> {/* Encabezado de columna para los números adicionales */}
            </tr>
        </thead>
        <tbody>
            <tr>
                {matrix2Data.map((value, index) => (
                    <td key={index}>{value}</td>
                ))}
            </tr>
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
        <h1 className="title" style={{ fontSize: '205%' }}>La clave pública está definida por el par (A,b) que viene dado por una matriz A (generada aleatoriamente) y b<sub>i</sub> = ⟨a<sub>i</sub>, s⟩ + e<sub>i</sub>:</h1>
        <br />
        <br />
        <button className="button" onClick={handleContinue} style={{ margin: '0 auto' }} >Continuar</button>
    </div>
);

const Content1_1 = ({ handleContinue }: { handleContinue: () => void }) => (
    <div>
        <br />
        <br />
        <br />
        <br />
        <h1 className="title" style={{ fontSize: '205%' }}>La clave pública (A,b) es:</h1>
        <Matrix />
        <br />
        <br />
        <button className="button" onClick={handleContinue} style={{ margin: '0 auto' }} >Continuar</button>
    </div>
);

// Componente para mostrar el contenido 2
const Content2 = ({ handleContinue }: { handleContinue: () => void }) => (
    <div>
        <h1 className="title">El resultado encriptado tras calcular ∑<sub>i∈S</sub> a<sub>i</sub>, ∑<sub>i∈S</sub> b<sub>i</sub> es:</h1>
        <br />
        <Matrix2 />
        <br />
        <br />
        <button className="button" onClick={handleContinue} style={{ margin: '0 auto' }} >Continuar</button>
    </div>
);

const Content3 = () => (
    <div>
        <h1 className="title">El desencriptado del par (A,b) tras calcular b − ⟨a,s⟩ determina que tu bit es:</h1>
        <br />
        <h1 className="title">0</h1>
        <br />
        <Link to="/CifradoView" className="button" style={{ margin: '0 auto' }}><strong>Finalizar</strong></Link>
    </div>
);


const ResultadoRegevViewBit0 = () => {
    const [showText, setShowText] = useState(true);
    const [showContent1, setShowContent1] = useState(false);
    const [showContent1_1, setShowContent1_1] = useState(false);
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
            setShowContent1_1(true); // Mostrar Content1_1 después de que Content1 haya sido mostrado
        } else if (showContent1_1) {
            setShowContent1_1(false);
            setShowContent2(true); // Mostrar Content2 después de que Content1_1 haya sido mostrado y ocultado
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
                    {showContent1_1 && <Content1_1 handleContinue={handleContinue} />}
                    {showContent2 && <Content2 handleContinue={handleContinue} />}
                    {showContent3 && <Content3 />}
                </div>
                <canvas id="canvas3d" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}></canvas>
            </div>
        </div>
    );
};

export default ResultadoRegevViewBit0;

