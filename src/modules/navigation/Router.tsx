import { Route, Routes } from 'react-router-dom';
import PageContainer from '../smartphoneUi/components/PageContainer/PageContainer';
import Shalom from '../test/components/Shalom';
import Motek from '../test/components/Motek';
export default function Router() {
    return (
        <Routes>
            <Route path={'*'} element={<PageContainer />} />
            <Route path={'/shalom'} element={<Shalom />} />
            <Route path={'/motek'} element={<Motek />} />
        </Routes>
    );
}
