import {Routes, Route, useActionData} from 'react-router-dom';
import { publicRoutes, authRoutes } from '../routes';
import Auth from '../pages/Auth';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';
import { useEffect } from 'react';

function AppRouter() {

    const {checkAuth} = useActions()

    useEffect(() => {
        checkAuth()
    }, [])

    const {isAuth} = useSelector(state => state.user)

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