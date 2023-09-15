import { useSelector } from "react-redux";
import Popup from "./Popup";
import useInput from "../validation/useInput";
import { useActions } from "../hooks/useActions";

function UserNamePopup({isOpen, handleClose}) {

    const {user} = useSelector(state => state.user);
    console.log(user)

    const {updateName} = useActions()

    const name = useInput(user.name, {isEmpty: false, minLength: 3, maxLength: 30});
    const secondName = useInput(user.secondName, {isEmpty: false, minLength: 3, maxLength: 30});

    const isNameValid = name.isDirty && name.validMessages.length > 0;
    const isSecondNameValid = secondName.isDirty && secondName.validMessages.length > 0;

    const isValid = isNameValid || isSecondNameValid;

    function handleSubmit(e) {
        e.preventDefault()
        updateName(name.value, secondName.value)
        handleClose()
    }
    
    return (
        <Popup isOpen={isOpen} handleClose={handleClose} handleSubmit={handleSubmit}>
            <h2 className="popup__title">Введите новое имя</h2>
            <label className="popup__label" htmlFor="name">Имя</label>
            {isNameValid && <p className="auth__error" style={{color: 'red'}}>{name.validMessages}</p>}
            <input className={`popup__input ${isNameValid && "auth__input_error"}`} id="name" placeholder="Введите имя" type="text" onBlur={name.onBlur} onChange={name.onChange} value={name.value} />
            <label className="popup__label" htmlFor="secondName">Фамилия</label>
            {isSecondNameValid && <p className="auth__error" style={{color: 'red'}}>{secondName.validMessages}</p>}
            <input className={`popup__input ${isSecondNameValid && "auth__input_error"}`} id="secondName" placeholder="Введите фамилию" type="text" onBlur={secondName.onBlur} onChange={secondName.onChange} value={secondName.value} />
            <button disabled={isValid} className="popup__submit">Сохранить</button>
        </Popup>
    )
};

export default UserNamePopup;