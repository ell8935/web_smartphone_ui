import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNavStyled from './TopNavStyled';
import BackButton from '../../../navigation/components/BackButton/BackButton';

interface TopNavProps {
    hideBack?: boolean;
    showLogo?: boolean;
    title?: React.ReactNode;
    onBack?: () => void;
    logo?: string;
}
const TopNav = ({ hideBack = false, showLogo = false, title = null, onBack = undefined, logo }: TopNavProps) => {
    const navigate = useNavigate();
    const goBack = useCallback(() => {
        onBack ? onBack() : navigate(-1);
    }, [onBack, navigate]);

    return (
        <TopNavStyled>
            {!hideBack ? <BackButton onClick={goBack} /> : <div />}
            {showLogo ? <img src={logo} alt="Zigmond" style={{ height: 24 }} /> : title ? <h3>{title}</h3> : <div />}
        </TopNavStyled>
    );
};

export default TopNav;
