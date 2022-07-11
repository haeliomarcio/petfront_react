import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Menu from './layouts/Menu';
import ListaUsuarios from './pages/Usuarios/ListaUsuarios';
import FormUsuarios from './pages/Usuarios/FormUsuarios';
import { Container } from '@mui/material';
import RoutePrivate from './routes/RoutePrivate';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Menu />
          <Container>
            <>
              <RoutePrivate 
                path="/"
                element={<Home />} 
                isPrivate={false} 
              />
              <RoutePrivate 
                path="/login" 
                element={<Login />}
                isPrivate={false}
              />
              <RoutePrivate path="/dashboard" element={<Dashboard />} isPrivate={true} />
              <RoutePrivate path="/usuarios" element={<ListaUsuarios />} isPrivate={true}/>
              <RoutePrivate path="/usuarios/novo" element={<FormUsuarios />} isPrivate={true} />
              <RoutePrivate path="/usuarios/editar/:id" element={<FormUsuarios />} isPrivate={true}/>
            </> 
          </Container>
        </BrowserRouter>
    </div>
  );
}
export default App;
