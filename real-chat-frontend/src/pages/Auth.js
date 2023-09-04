import { useState } from "react"
import Login from "../components/Login"
import Register from "../components/Register"

function Auth() {

    const [isLogin, setIsLogin] = useState(true)

    function onHandleLogin() {
        setIsLogin(!isLogin)
    }

    return (
        <div className="auth">
            {isLogin ? <Login onHandleLogin={onHandleLogin} /> : <Register onHandleLogin={onHandleLogin} />}
        </div>
    )
}

export default Auth