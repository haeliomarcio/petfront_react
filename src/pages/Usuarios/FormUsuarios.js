import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
function FormUsuarios(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [json, setJson] = useState(null); // NOVO
    const { id } = useParams();
    function submit(event) {
        event.preventDefault();
        const data = {
            "id": id,
            "nome": nome,
            "email": email,
        };
         // NOVO
        if(json) {
            data.senha = json.senha;
        }
        if(id && password) {
            data.senha = password;
        } 
        if(!id && password){
            data.senha = password;
        }

        if(nome === '') {
            alert("Nome obrigatório");
            return false;
        }

        let method = 'POST';
        let url = "http://localhost:3001/usuarios";
        if(id) {
            method = 'PUT';
            url = url+ "/"+id;
        }

        fetch(url,{
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            alert("Usuário Registrado com Sucesso");
        })
        .catch(function(error) {
            alert(error);
        });
    }

    function getData() {
        fetch("http://localhost:3001/usuarios/"+id)
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            setNome(json.nome);
            setEmail(json.email);
            setJson(json);
        })
        .catch(function(error) {
            alert(error);
        });
    }

    useEffect(() => {
        if(id) {
            getData();
        }
    }, []);

    return (
        <div>
            <h3>Novo Usuário</h3>
            <Link to="/usuarios">Listar Usuários</Link>
            <form onSubmit={submit}>
                <br />
                <label>Nome</label>
                <input 
                    type="text" 
                    name="nome" 
                    onChange={(e) => setNome(e.target.value)}
                    value={nome}
                />
                <br />
                <label>Email</label>
                <input 
                    type="email" 
                    name="email" 
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <br />
                <label>Senha</label>
                <input 
                    type="password" 
                    name="senha" 
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <br />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
}

export default FormUsuarios;