import Router from '../../navigation/Router';
import { BrowserRouter } from 'react-router-dom';

const MainScreen = () => {
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    );
};

export default MainScreen;
