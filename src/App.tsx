// import MainScreen from './modules/main/screens/MainScreen';

// function App() {
//     return <MainScreen />;
// }

// export default App;

import { pageContainerConfig } from './modules/main/screens/constants/pageContainerConfig';
import PageContainerTest from './modules/smartphoneUi/components/PageContainer/PageContainerTest';

function App() {
    return <PageContainerTest config={pageContainerConfig}></PageContainerTest>;
}

export default App;
