import { smartphoneUiConfig } from './modules/constants/smartphoneUiConfig';
import SmartphoneUi from './modules/smartphoneUi/components/PageContainer/SmartphoneUi';

function App() {
    return <SmartphoneUi config={smartphoneUiConfig}></SmartphoneUi>;
}

export default App;
