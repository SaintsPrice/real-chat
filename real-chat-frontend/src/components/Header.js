import { useSelector } from "react-redux"
import { useActions } from "../hooks/useActions"

function Header() {

    const {logout} = useActions()
    const user = useSelector(state => state.user)

    function handleLogout() {
        logout()
    }

    return (
        <header className="header">
            <h1 className="header__title">Social</h1>
            {user.isAuth && <button className="header__logout" onClick={handleLogout}>Выйти</button>}
        </header>
    )
};

export default Header