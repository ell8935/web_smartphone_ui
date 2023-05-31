import { BrowserRouter } from 'react-router-dom';
import Router from '../../../navigation/Router';
import { usePageSizes } from '../../hooks/usePageSizes';
import BottomNav from '../BottomNav/BottomNav';
import PageContainerStyled from './PageContainerStyled';

interface PageContainerProps {
    children?: React.ReactNode;
    config: any;
}

const SmartphoneUi = ({ children, config }: PageContainerProps) => {
    const { containerSx, contentSx } = usePageSizes();
    const tabOptions = config.tabs;

    return (
        <PageContainerStyled style={containerSx}>
            <BrowserRouter>
                <Router />
                <div style={contentSx}>{children}</div>
                <BottomNav tabsOptions={tabOptions} />
            </BrowserRouter>
        </PageContainerStyled>
    );
};

export default SmartphoneUi;
