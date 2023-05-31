import Motek from '../test/components/Motek';
import Shalom from '../test/components/Shalom';

export const smartphoneUiConfig = {
    tabsOptions: {
        generalHeaderOptions: {
            hideHeader: false,
            generalTitle: 'String',
            hideGeneralTitle: true,
            headerStyle: {},
            hideBack: false,
        },
        generalBottomNavOptions: {
            bottomNavStyle: {},
            hideBottomNav: false,
        },
    },
    tabs: [
        {
            homeScreen: true,
            name: 'shalom',
            route: '/',
            screenComponent: Shalom,
            onBack: () => {},

            headerOptions: {
                title: 'String',
                hideHeader: true,
                hideBack: true,
                customHeaderStyle: {},
                onClick: () => {},
            },
            bottomOptions: {
                title: 'String',
                bottomNavStyle: {},
                onClick: () => {},
                icon: 'React.ReactNode',
            },
        },
        {
            name: 'kapara',
            route: '/kapara',
            screenComponent: Motek,
            onBack: () => {},

            headerOptions: {
                title: 'String',
                hideHeader: true,
                hideBack: true,
                customHeaderStyle: {},
                onClick: () => {},
            },
            bottomOptions: {
                title: 'String',
                bottomNavStyle: {},
                onClick: () => {},
                icon: 'React.ReactNode',
            },
        },
        {
            name: 'motek',
            route: '/motek',
            screenComponent: Motek,
            onBack: () => {},

            headerOptions: {
                title: 'String',
                hideHeader: true,
                hideBack: true,
                customHeaderStyle: {},
                onClick: () => {},
            },
            bottomOptions: {
                title: 'String',
                bottomNavStyle: {},
                onClick: () => {},
                icon: 'React.ReactNode',
            },
        },
    ],
};
