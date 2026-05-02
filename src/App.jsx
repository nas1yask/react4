import { useTranslation } from "react-i18next";
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Second from './pages/Second'
import Header from './Header'

function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path='/' element={<Homepage/>}/>
                <Route path='/second' element={<Second/>}/>
            </Routes>
        </div>
    );
}

export default App;