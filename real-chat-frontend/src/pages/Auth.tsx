import { FC, useState } from "react";
import {Navigate} from 'react-router-dom'
import Login from "../components/Login";
import Register from "../components/Register";
import { USER_ROUTE } from "../utils/const";
import { useTypeSelector } from "../hooks/useTypedSelector";

const Auth: FC = () => {

    const [isLogin, setIsLogin] = useState(true);

    function onHandleLogin() {
        setIsLogin(!isLogin)
    };

    const {isAuth} = useTypeSelector(state => state.user);

    return (
        <div className="auth">
            {isLogin ? <Login onHandleLogin={onHandleLogin} /> : <Register onHandleLogin={onHandleLogin} />}
            {isAuth && <Navigate to={USER_ROUTE} />}
        </div>
    )
};

export default Auth;