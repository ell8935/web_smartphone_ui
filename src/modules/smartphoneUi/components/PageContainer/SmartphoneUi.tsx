import { BrowserRouter } from 'react-router-dom';
import Router from '../../../navigation/Router';
import { usePageSizes } from '../../hooks/usePageSizes';
import BottomNav from '../BottomNav/BottomNav';
import SmartphoneUiStyled from './SmartphoneUiStyled';

interface PageContainerProps {
    children?: React.ReactNode;
    config: any;
}

const SmartphoneUi = ({ children, config }: PageContainerProps) => {
    const { containerSx, contentSx } = usePageSizes();
    const tabOptions = config.tabs;

    return (
        <SmartphoneUiStyled style={containerSx}>
            <BrowserRouter>
                <Router />
                <div style={contentSx}>{children}</div>
                <BottomNav tabsOptions={tabOptions} />
            </BrowserRouter>
        </SmartphoneUiStyled>
    );
};

export default SmartphoneUi;
