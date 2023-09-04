import Auth from "./pages/Auth";
import Messages from "./pages/Messages";
import SearchPage from "./pages/SearchPage";
import UserPage from "./pages/UserPage";
import { AUTH_ROUTE, MESSAGES_ROUTE, SEARCH_ROUTE, USER_ROUTE } from "./utils/const";

export const publicRoutes = [
    {
        path: AUTH_ROUTE,
        Component: Auth
    }
]

export const authRoutes = [
    {
        path: MESSAGES_ROUTE,
        Component: Messages
    },
    {
        path: USER_ROUTE,
        Component: UserPage
    },
    {
        path: SEARCH_ROUTE,
        Component: SearchPage
    }
]