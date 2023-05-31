import { Route } from 'react-router-dom';
import { pageContainerConfig } from '../../main/screens/constants/pageContainerConfig';
import { FunctionComponent } from 'react';
function getRoutesAndComponents() {
    const generalsRoutes: { [key: string]: FunctionComponent } = {};
    const homeRoute: { [key: string]: FunctionComponent } = {};

    for (let tab of pageContainerConfig.tabs) {
        const { route, screenComponent, homeScreen } = tab;
        if (homeScreen) {
            homeRoute['/'] = screenComponent;
        } else {
            generalsRoutes[route] = screenComponent;
        }
    }

    return [homeRoute, generalsRoutes];
}

const routesAndComponents = getRoutesAndComponents();

const generateRoutes = () => {
    return (
        <>
            {Object.entries(routesAndComponents[0]).map(([path, screenComponent]) => (
                <Route key={'/'} path={'/'} element={screenComponent({})} />
            ))}
            {Object.entries(routesAndComponents[1]).map(([path, screenComponent]) => (
                <Route key={path} path={path} element={screenComponent({})} />
            ))}
        </>
    );
};

export default generateRoutes;
