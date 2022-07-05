import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Menu from './layouts/Menu';
import ListaUsuarios from './pages/Usuarios/ListaUsuarios';
import FormUsuarios from './pages/Usuarios/FormUsuarios';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Menu />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/usuarios" element={<ListaUsuarios />} />
            <Route path="/usuarios/novo" element={<FormUsuarios />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;
