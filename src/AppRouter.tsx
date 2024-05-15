import {Routes, Route} from 'react-router-dom';
import MainMenu from './vista_main';
import CifradoView from './CifradoView';

export const  AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainMenu />} />
            <Route path="/CifradoView" element={<CifradoView />} />
        </Routes>
    )
}