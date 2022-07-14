import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Table, TableHead, TableBody, TableCell, TableRow, Button } from "@mui/material";
import Swal from 'sweetalert2'
import { destroy, find } from '../../core/api';

function ListaUsuarios() {
    const [lista, setLista] = useState([]);
    async function listarDados(){
        const response = await find('usuarios', '');
        setLista(response.data);
    }
    
    async function excluir(id){
        await destroy('usuarios', id);
        Swal.fire({
            title: 'Exclusão',
            text: 'Registro Excluído com Sucesso',
            icon: 'success',
            confirmButtonText: 'Ok'
        });
        listarDados();
    }
    // function(param1, param2...){
    // 
    // }
    // (param1, param2...) => {}
    useEffect(() => {
        listarDados();
    }, []);
    return (
        <div>
            <Link to="/usuarios/novo">
                <Button size="small" variant="contained">Novo Usuário</Button>
            </Link>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Nome</TableCell>
                        <TableCell>E-mail</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {lista.map(function(item, index) {
                        return (
                            <TableRow>
                                <TableCell>{item.id}</TableCell>
                                <TableCell>{item.nome}</TableCell>
                                <TableCell>{item.email}</TableCell>
                                <TableCell>
                                    <Link to={`/usuarios/editar/${item.id}`}>
                                        <Button>
                                            Editar
                                        </Button>
                                    </Link>
                                    <Button onClick={() => { excluir(item.id) }}>Excluir</Button>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
          
        </div>
    );
}

export default ListaUsuarios;