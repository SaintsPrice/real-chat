import {Routes, Route, BrowserRouterProps} from 'react-router-dom';
import { publicRoutes, authRoutes } from '../routes';
import Auth from '../pages/Auth';
import { useActions } from '../hooks/useActions';
import { FC, useEffect } from 'react';
import { useTypeSelector } from '../hooks/useTypedSelector';

const AppRouter: FC<BrowserRouterProps> = () => {

    const {checkAuth} = useActions();

    useEffect(() => {
        checkAuth()
    }, []);

    const {isAuth} = useTypeSelector(state => state.user);

    return (
        <Routes>
        {publicRoutes.map(({path, Component}) => 
            <Route key={path} path={path} element={<Component />} />
        )}

        {isAuth && authRoutes.map(({path, Component}) => 
            <Route key={path} path={path} element={<Component />} />
        )}

        <Route path='*' element={<Auth />} />
    </Routes>
    )
};

export default AppRouter;