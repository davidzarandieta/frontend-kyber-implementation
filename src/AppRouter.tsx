import {Routes, Route} from 'react-router-dom';
import MainMenu from './vista_main';
import CifradoView from './CifradoView';
import ElectionView from './ElectionView';

export const  AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainMenu />} />
            <Route path="/CifradoView" element={<CifradoView />} />
            <Route path="/ElectionView" element={<ElectionView />} />
        </Routes>
    )
}