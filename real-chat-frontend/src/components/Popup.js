function Popup({children, isOpen, handleClose, handleSubmit}) {
    return (
        <div className={`popup ${isOpen && "popup_open"}`}>
            <form className="popup__form" onSubmit={handleSubmit} noValidate>
                <button onClick={handleClose} type="button" className="popup__close" />
                {children}
            </form>
        </div>
    )
};

export default Popup