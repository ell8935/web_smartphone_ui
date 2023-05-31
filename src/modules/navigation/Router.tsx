import { Routes } from 'react-router-dom';
import generateRoutes from './utils/generateRoutes';

export default function Router() {
    return <Routes>{generateRoutes()}</Routes>;
}
