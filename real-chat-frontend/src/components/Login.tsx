import useInput from "../validation/useInput";
import { useActions } from "../hooks/useActions";
import { FC } from 'react';
import { useTypeSelector } from "../hooks/useTypedSelector";

interface ILoginProps {
    onHandleLogin: () => void;
};

const Login: FC<ILoginProps> = ({onHandleLogin}) => {

    const email = useInput('', {isEmpty: true, minLength: 3, maxLength: 30, isEmail: true});
    const password = useInput('', {isEmpty: true, minLength: 3, maxLength: 30});

    const isEmailValid = email.isDirty && email.validMessages.length > 0;
    const isPasswordValid = password.isDirty && password.validMessages.length > 0;

    const isValid = email.validMessages.length > 0 || password.validMessages.length > 0;

    const {login} = useActions();
    const {loginError} = useTypeSelector(state => state.user);

    function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        login(email.value, password.value)
    };

    return (
        <div className="auth__login">
            <h2 className="auth__title">Войти</h2>
            <p className="auth__description">Если у вас нет учетной записи, зарегистрируйтесь</p>
            <p className="auth__description">Вы можете <a onClick={() => onHandleLogin()} style={{textDecoration: 'none', color: '#0C21C1'}} href="#" >зарегистрироваться здесь!</a></p>
            <form className="auth__form" onSubmit={handleSubmit} noValidate>
                <label className="auth__label" htmlFor="email">Email</label>
                {isEmailValid && <p className="auth__error" style={{color: 'red'}}>{email.validMessages}</p>}
                <input onChange={email.onChange} onBlur={email.onBlur} value={email.value} className={`auth__input ${isEmailValid && 'auth__input_error'}`} type="email" id="email" placeholder="Введите свой email" required />
                <label className="auth__label" htmlFor="password">Пароль</label>
                {isPasswordValid && <p className="auth__error" style={{color: 'red'}}>{password.validMessages}</p>}
                <input onChange={password.onChange} onBlur={password.onBlur} value={password.value} className={`auth__input ${isPasswordValid && 'auth__input_error'}`} type="password" id="password" placeholder="Введите ваш пароль" required />
                {loginError && <p className="auth__error" style={{color: 'red'}}>{loginError}</p>}
                <button disabled={isValid} className="auth__submit" type="submit">Войти</button>
            </form>
        </div>
    )
};

export default Login;