import {Routes, Route} from 'react-router-dom';
import { publicRoutes, authRoutes } from '../routes';
import Auth from '../pages/Auth';

function AppRouter() {

    const isAuth = true

    return (
        <Routes>
        {publicRoutes.map(({path, Component}) => 
            <Route key={path} path={path} element={<Component />} exact/>
        )}

        {isAuth && authRoutes.map(({path, Component}) => 
            <Route key={path} path={path} element={<Component />} exact/>
        )}

        <Route path='*' element={<Auth />} />
    </Routes>
    )
};

export default AppRouter