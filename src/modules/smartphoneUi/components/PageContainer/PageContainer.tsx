import BottomNav from '../BottomNav/BottomNav';
import { usePageSizes } from '../../hooks/usePageSizes';
import PageContainerStyled from './PageContainerStyled';
import { useEffect } from 'react';
import TopNav from '../TopNav/TopNav';

interface PageContainerProps {
    children?: React.ReactNode;
    pageReady?: boolean;
    pageTitle?: string;
    onBack?: () => void;
    hideBack?: boolean;
    hideBotNav?: boolean;
    hideTopNav?: boolean;
    showLogo?: boolean;
    bottomNavProps?: {
        icon: React.ReactNode | string;
        name: string;
        route: string;
    }[];
}

const PageContainer = ({
    children,
    pageTitle,
    pageReady = true,
    hideBack = false,
    hideTopNav = false,
    hideBotNav = false,
    showLogo = false,
    onBack = undefined,
    bottomNavProps,
}: PageContainerProps) => {
    useEffect(() => {
        if (pageReady && pageTitle) {
            document.title = pageTitle;
        }
    }, [pageReady, pageTitle]);

    const { containerSx, contentSx } = usePageSizes();

    return (
        <PageContainerStyled style={containerSx}>
            <TopNav />
            <div style={contentSx}>{children}</div>
            <BottomNav tabsOptions={bottomNavProps} />
        </PageContainerStyled>
    );
};

export default PageContainer;
