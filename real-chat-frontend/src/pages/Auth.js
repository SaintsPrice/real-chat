import { useState } from "react";
import {Navigate} from 'react-router-dom'
import Login from "../components/Login";
import Register from "../components/Register";
import { useSelector } from "react-redux";
import { USER_ROUTE } from "../utils/const";

function Auth() {

    const [isLogin, setIsLogin] = useState(true)

    function onHandleLogin() {
        setIsLogin(!isLogin)
    }

    const {isAuth} = useSelector(state => state.user)

    return (
        <div className="auth">
            {isLogin ? <Login onHandleLogin={onHandleLogin} /> : <Register onHandleLogin={onHandleLogin} />}
            {isAuth && <Navigate to={USER_ROUTE} />}
        </div>
    )
}

export default Auth