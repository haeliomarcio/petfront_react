import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function ListaUsuarios() {
    const [lista, setLista] = useState([]);
    function listarDados(){
        fetch("http://localhost:3001/usuarios")
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            setLista(json);
        });
    }
    function excluir(id){
        fetch("http://localhost:3001/usuarios/"+id, {
            method: "DELETE"
        })
        .then(function(response){
            return response.json();
        })
        .then(function(json){
           alert("Excluido com sucesso.");
           listarDados();
        })
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
            <Link to="/usuarios/novo">Novo Usuário</Link>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map(function(item, index) {
                        return (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.email}</td>
                                <td>
                                    <Link to={`/usuarios/editar/${item.id}`}>Editar</Link>
                                    <button onClick={() => { excluir(item.id) }}>Excluir</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default ListaUsuarios;