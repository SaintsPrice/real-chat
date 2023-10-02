import { useActions } from "../hooks/useActions";
import Popup from "./Popup";
import {FC, useState} from 'react';

interface IUserAvatarPopupProps {
    isOpen: boolean;
    handleClose: () => void;
};

const UserAvatarPopup: FC<IUserAvatarPopupProps> = ({isOpen, handleClose}) => {

    const [file, setFile] = useState<File | null>(null);

    const {updateAvatar} = useActions()

    function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
        if(e.target.files) {
            setFile(e.target.files[0])
        }
    };

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if(file) {
            const formData = new FormData()
            formData.append("avatar", file)
            updateAvatar(formData)
            handleClose()
        }
    };

    return (
        <Popup isOpen={isOpen} handleSubmit={handleSubmit} handleClose={handleClose}>
            <h2 className="popup__title">Поменять аватар</h2>
            <label className="popup__label popup__label__avatar" htmlFor="file">
                <span className="popup__label__avatar__image" />
                <span className="popup__label__avatar__title">Выберите файл</span>
            </label>
            <input onChange={handleFile} className="popup__input popup__input__avatar" id="file" type="file" />
            {file && <p className="popup__file">{'Добавлен ' + file}</p>}
            <button className="popup__submit">Сохранить</button>
        </Popup>
    )
};

export default UserAvatarPopup;