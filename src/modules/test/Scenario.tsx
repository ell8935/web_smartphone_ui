import React from 'react';
import PageContainerTest from '../smartphoneUi/components/PageContainer/PageContainerTest';
import { pageContainerConfig } from '../main/screens/constants/pageContainerConfig';
import { BrowserRouter } from 'react-router-dom';
import RealRouter from './RealRouter';

const Scenario = () => {
    return (
        <PageContainerTest config={pageContainerConfig}>
            <BrowserRouter>
                <RealRouter />
            </BrowserRouter>
        </PageContainerTest>
    );
};

export default Scenario;
