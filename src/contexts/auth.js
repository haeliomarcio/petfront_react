import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext({});

function AuthProvider(props) {
    const [isLogged, setIsLogged] = useState(false);

    return  (
        <AuthContext.Provider value={{ isLogged: isLogged, setIsLogged: setIsLogged }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;