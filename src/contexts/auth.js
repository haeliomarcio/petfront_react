import { useEffect, useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext({});

function AuthProvider(props) {
    const [isLogged, setIsLogged] = useState(true);

    useEffect(() => {
        if(localStorage.getItem('token@petfront')) {
            setIsLogged(true);
        } else {
            setIsLogged(true);
        }
    }, []);

    return  (
        <AuthContext.Provider value={{ isLogged: isLogged, setIsLogged: setIsLogged }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;