import { Routes, Route } from 'react-router-dom';
import MainMenu from './vista_main';
import CifradoView from './CifradoView';
import ElectionView from './ElectionView';
import ResultadoRegevViewBit0 from './ResultadoRegevViewBit0';
import ResultadoRegevViewBit1 from './ResultadoRegevViewBit1';
import CifradoViewKyber from './CifradoViewKyber';
import ResultadoKView from './ResultadoKView';
import ResultadoYView from './ResultadoYView';
import ResultadoBView from './ResultadoBView';
import ResultadoEView from './ResultadoEView';
import ResultadoRView from './ResultadoRView';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainMenu />} />
            <Route path="/CifradoView" element={<CifradoView />} />
            <Route path="/ElectionView" element={<ElectionView />} />
            <Route path="/ResultadoRegevViewBit0" element={<ResultadoRegevViewBit0 />} />
            <Route path="/ResultadoRegevViewBit1" element={<ResultadoRegevViewBit1 />} />
            <Route path="/CifradoViewKyber" element={<CifradoViewKyber />} />
            <Route path="/ResultadoKView" element={<ResultadoKView />} />
            <Route path="/ResultadoYView" element={<ResultadoYView />} />
            <Route path="/ResultadoBView" element={<ResultadoBView />} />
            <Route path="/ResultadoEView" element={<ResultadoEView />} />
            <Route path="/ResultadoRView" element={<ResultadoRView />} />

        </Routes>
    )
}