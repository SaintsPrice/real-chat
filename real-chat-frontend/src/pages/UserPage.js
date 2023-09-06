import { useEffect } from "react"
import { useActions } from "../hooks/useActions"
import { useSelector } from "react-redux"

function UserPage() {

    const {user} = useSelector(state => state.user)
    const {logout} = useActions()

    function handleLogout() {
        logout()
    }

    return (
        <div>
            <button onClick={handleLogout}>Выйти</button>
            <h1>{user.user.name}</h1>
            <h2>{user.user.secondName}</h2>
            UserPage
        </div>
    )
}

export default UserPage