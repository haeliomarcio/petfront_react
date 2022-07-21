import { Box, Drawer, MenuItem, Button } from '@mui/material';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/auth';
import { FaBars } from 'react-icons/fa';
export function MenuMobile() {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <Button onClick={() => setVisible(true)}>
                <FaBars size="24px" color="black" />
            </Button>
            <Drawer
                open={visible}
                onClose={() => setVisible(false)}
            >
                <Menu />
            </Drawer>
        </>
    );
}

function Menu() {
    const { setIsLogged } = useContext(AuthContext);

    function logout() {
        localStorage.removeItem('token@petfront');
        setIsLogged(false);
    }
    return (
        <Box container="nav" className="menu">
            <MenuItem>
                <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem>
                <Link to="/dashboard">Dashboard</Link>
            </MenuItem>
            <MenuItem>
                <Link to="/usuarios">Usuários</Link>
            </MenuItem>
            <MenuItem>
                <a href onClick={() => logout()}>Logout</a>
            </MenuItem>
        </Box>
    );
}
export default Menu;