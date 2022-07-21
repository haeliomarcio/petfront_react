import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../contexts/auth";
import DefaultLayout from "../layouts/DefaultLayout";
import Menu from "../layouts/Menu";

import Login from "../pages/Login";
function Private(props) {
    
    if(!props.isLogged) {
        return (
            <Login />
        )
    }
    return (
        <DefaultLayout>
            {props.children}
        </DefaultLayout>
    );
}

function RoutePrivate(props) {
    const { isLogged } = useContext(AuthContext);
   
    return (
        <Routes>
            <Route 
                path={props.path} 
                element={
                    <Private {...props} isLogged={isLogged}>
                        {props.element}
                    </Private>
                }
            />
        </Routes>
    );
}

export default RoutePrivate;