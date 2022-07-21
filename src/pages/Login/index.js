import React, { useContext, useState } from 'react';
import { Container, Box, Typography, TextField, 
    Button, Checkbox, FormGroup, FormLabel, FormControlLabel, 
    Grid, CssBaseline, Link } from '@mui/material';
import { AuthContext } from '../../contexts/auth';
import api, { find } from '../../core/api';
function Login() {
    const { setIsLogged } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    function handleChange(event){
        if(event.target.name === 'email') {
            setEmail(event.target.value);
        }
        if(event.target.name === 'password') {
            setSenha(event.target.value);
        }
    } 
    async function logar(){
        const response = await find("usuarios", "email="+email);
        if(response.data[0].senha === senha) {
            alert("Login realizado com sucesso.");
            localStorage.setItem('token@petfront', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9');
            setIsLogged(true);
        } else {
            alert("Login ou senha incorreto.")
        }
    }
    return (
        <div className="login">
            <Container component="main" maxWidth="xs">
                <CssBaseline>
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant="h5">
                            Login
                        </Typography>

                        <Box component="form" sx={{ mt: 1 }}>
                            
                            <TextField
                                label="E-mail"
                                name="email"
                                id="email"
                                type="text"
                                variant='outlined'
                                fullWidth
                                style={{ marginTop: '15px' }}
                                onChange={handleChange}
                            />
                            
                            <TextField
                                label="Senha" 
                                name="password" 
                                id="password" 
                                type="password"
                                variant='outlined'
                                fullWidth
                                style={{ marginTop: '15px' }}
                                onChange={handleChange}
                            />

                            <FormGroup>
                                <FormControlLabel 
                                    control={<Checkbox id="lembre-me" name="lembre-me" defaultChecked />} 
                                    label="Lembre-me" 
                                />
                            </FormGroup>                   
                            
                            <Button
                                onClick={logar}
                                id="logar"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                >
                                Acessar
                            </Button>
                            <Grid container>
                                <Grid item xs={12} md={5}>
                                    <Link href="#" variante="body2">
                                        Esqueceu a senha?
                                    </Link>
                                </Grid>
                                <Grid item xs={12} md={7}>
                                    <Link href="#" variante="body2">
                                        Não possui conta? Cadastre-se
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                        
                    </Box>
                </CssBaseline>
            </Container>
        </div>
    );
}

export default Login;