import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Entry from './screens/entry';
import Register from './screens/register';
import Login from './screens/login';
import StartGame from './screens/startGame';
import Dashboard from './screens/dashboard';
import ProtectedRoutes from './ProtectedRoutes';
import { BeginGame } from './screens/beginGame';


function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Entry />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/startgame' element={<ProtectedRoutes><StartGame /></ProtectedRoutes>} />
                    <Route path='/dashboard' element={<ProtectedRoutes><Dashboard /></ProtectedRoutes>} />
                    <Route path='/begingame' element={<ProtectedRoutes><BeginGame /></ProtectedRoutes>} />

                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
