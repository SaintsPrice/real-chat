import { useSelector } from "react-redux";
import avatarImage from "../asset/default-avatar.jpg";

function UserPage() {

    const {user} = useSelector(state => state.user)

    return (
        <main className="user-page">
            <section className="user-page__profile">
                <div className="user-page__profile__avatar">
                    <img className="user-page__profile__avatar__image" src={avatarImage} />
                    <button className="user-page__profile__avatar__edit" type="button" />
                </div>
                <div className="user-page__profile__container">
                    <h2 className="user-page__profile__name">{user.user.name} {user.user.secondName}</h2>
                    <button className="user-page__profile__edit" type="button" />
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
        </main>
    )
}

export default UserPage