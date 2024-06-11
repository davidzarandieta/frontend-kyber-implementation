import { Routes, Route } from 'react-router-dom';
import MainMenu from './vista_main';
import CifradoView from './CifradoView';
import ElectionView from './ElectionView';
import ResultadoRegevViewBit0 from './ResultadoRegevViewBit0';
import ResultadoRegevViewBit1 from './ResultadoRegevViewBit1';
import CifradoViewKyber from './CifradoViewKyber';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainMenu />} />
            <Route path="/CifradoView" element={<CifradoView />} />
            <Route path="/ElectionView" element={<ElectionView />} />
            <Route path="/ResultadoRegevViewBit0" element={<ResultadoRegevViewBit0 />} />
            <Route path="/ResultadoRegevViewBit1" element={<ResultadoRegevViewBit1 />} />
            <Route path="/CifradoViewKyber" element={<CifradoViewKyber />} />
        </Routes>
    )
}