import { useState } from 'react';
function FormUsuarios(){
    const [nome, setNome] = useState('Teste');

    return (
        <div>
            <h3>Novo Usuário</h3>
            <form>
                {nome}
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
                <input type="email" name="email" />
                <br />
                <label>Senha</label>
                <input type="password" name="senha" />
                <br />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
}

export default FormUsuarios;