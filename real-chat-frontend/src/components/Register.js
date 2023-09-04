import { useState } from "react"
import useInput from "../validation/useInput"

function Register({onHandleLogin}) {

    const [confirmPassword, setConfirmPassword] = useState('')

    const email = useInput('', {isEmpty: true, minLength: 3, maxLength: 30, isEmail: true})
    const name = useInput('', {isEmpty: true, minLength: 3, maxLength: 30})
    const secondName = useInput('', {isEmpty: true, minLength: 3, maxLength: 30})
    const password = useInput('', {isEmpty: true, minLength: 3, maxLength: 30})
    const secondPassword = useInput('', {isEmpty: true, minLength: 3, maxLength: 30, confirmPass: confirmPassword})

    const isEmailValid = email.isDirty && email.validMessages.length > 0
    const isNameValid = name.isDirty && name.validMessages.length > 0
    const isSecondNameValid = secondName.isDirty && secondName.validMessages.length > 0
    const isPasswordValid = password.isDirty && password.validMessages.length > 0
    const isSecondPasswordValid = secondPassword.isDirty && secondPassword.validMessages.length > 0

    const isValid = email.validMessages.length > 0 || name.validMessages.length > 0 || secondName.validMessages.length > 0|| password.validMessages.length > 0 || secondPassword.validMessages.length > 0

    function handleConfirmPassword(e) {
        setConfirmPassword(e.target.value)
        password.onChange(e)
    }

    function handleSubmit(e) {
        e.preventDefault(e)
    }

    return (
        <div className="auth__register">
            <h2 className="auth__title">Зарегистрироваться</h2>
            <p className="auth__description">Если у вас уже есть учетной записи, войдите</p>
            <p className="auth__description">Вы можете <a onClick={() => onHandleLogin()} style={{textDecoration: 'none', color: '#0C21C1'}} href="#">войти в систему здесь!</a></p>
            <form onSubmit={handleSubmit} className="auth__form">
                <label className="auth__label" htmlFor="email">Email</label>
                {isEmailValid && <p className="auth__error" style={{color: 'red'}}>{email.validMessages}</p>}
                <input onChange={email.onChange} onBlur={email.onBlur} value={email.value} className={`auth__input ${isEmailValid && 'auth__input_error'}`} type="email" id="email" placeholder="Введите свой email" required />
                <label className="auth__label" htmlFor="name">Имя</label>
                {isNameValid && <p className="auth__error" style={{color: 'red'}}>{name.validMessages}</p>}
                <input onChange={name.onChange} onBlur={name.onBlur} value={name.value} className={`auth__input ${isNameValid && 'auth__input_error'}`} type="text" id="name" placeholder="Введите ваше имя" required />
                <label className="auth__label" htmlFor="second__name">Фамилия</label>
                {isSecondNameValid && <p className="auth__error" style={{color: 'red'}}>{secondName.validMessages}</p>}
                <input onChange={secondName.onChange} onBlur={secondName.onBlur} value={secondName.value} className={`auth__input ${isSecondNameValid && 'auth__input_error'}`} type="text" id="second__name" placeholder="Введите вашу фамилию" required />
                <label className="auth__label" htmlFor="password">Пароль</label>
                {isPasswordValid && <p className="auth__error" style={{color: 'red'}}>{password.validMessages}</p>}
                <input onChange={handleConfirmPassword} onBlur={password.onBlur} value={password.value} className={`auth__input ${isPasswordValid && 'auth__input_error'}`} type="password" id="password" placeholder="Введите ваш пароль" required />
                <label className="auth__label" htmlFor="confirm__password">Повторите пароль</label>
                {isSecondPasswordValid && <p className="auth__error" style={{color: 'red'}}>{secondPassword.validMessages}</p>}
                <input onChange={secondPassword.onChange} onBlur={secondPassword.onBlur} value={secondPassword.value} className={`auth__input ${isSecondPasswordValid && 'auth__input_error'}`} type="password" id="confirm__password" placeholder="Повторите ваш пароль" required />
                <button disabled={isValid} className="auth__submit" type="submit">Зарегистрироваться</button>
            </form>
        </div>
    )
};

export default Register