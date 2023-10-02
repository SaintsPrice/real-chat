import { useActions } from "../hooks/useActions";
import { useTypeSelector } from "../hooks/useTypedSelector";

const Header = () => {

    const {logout} = useActions();
    const {isAuth} = useTypeSelector(state => state.user);

    function handleLogout() {
        logout()
    };

    return (
        <header className="header">
            <h1 className="header__title">Social</h1>
            {isAuth && <button className="header__logout" onClick={handleLogout}>Выйти</button>}
        </header>
    )
};

export default Header;