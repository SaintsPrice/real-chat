import { useSelector } from "react-redux";
import { useState } from "react";
import UserNamePopup from "../components/UserNamePopup";
import UserAvatarPopup from "../components/UserAvatarPopup";
import { REACT_APP_API_URL } from "../utils/const";

function UserPage() {

    const {user} = useSelector(state => state.user);
    console.log(user)

    
    const [namePopupIsOpen, setNamePopupIsOpen] = useState(false)
    const [avatarPopupIsOpen, setAvatarPopupIsOpen] = useState(false)

    function handleOpenNamePopup() {
        setNamePopupIsOpen(true)
    };

    function handleOpenAvatarPopup() {
        setAvatarPopupIsOpen(true)
    };

    function handleClosePopup() {
        setNamePopupIsOpen(false)
        setAvatarPopupIsOpen(false)
    };

    return (
        <main className="user-page">
            <section className="user-page__profile">
                <div className="user-page__profile__avatar">
                    <img className="user-page__profile__avatar__image" src={REACT_APP_API_URL + '/' + user.avatar} alt="Аватар" />
                    <button onClick={handleOpenAvatarPopup} className="user-page__profile__avatar__edit" type="button" />
                </div>
                <div className="user-page__profile__container">
                    <h2 className="user-page__profile__name">{user.name} {user.secondName}</h2>
                    <button onClick={handleOpenNamePopup} className="user-page__profile__edit" type="button" />
                </div>
                <button className="user-page__profile__messages" type="button"></button>
            </section>
            <form className="post" style={{marginTop: "50px"}}>
                <label className="post__title" htmlFor="post">Напишите свой пост</label>
                <div className="post__container">
                    <textarea className="post__input" type="text" id="post" cols={90} rows={6} placeholder="Напишите что-нибудь" />
                    <button className="post__submit" />
                </div>
            </form>
            <UserNamePopup isOpen={namePopupIsOpen} handleClose={handleClosePopup} />
            <UserAvatarPopup isOpen={avatarPopupIsOpen} handleClose={handleClosePopup} />
        </main>
    )
};

export default UserPage;