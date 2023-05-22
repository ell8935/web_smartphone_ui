import { BottomNavProps } from '../../../types/bottomNavTypes';
import BottomNavStyled from './BottomNavStyled';
import { useNavigate } from 'react-router-dom';

const BottomNav = ({ tabsOptions }: BottomNavProps) => {
    const navigate = useNavigate();

    const handleNavigate = (route: string) => {
        navigate(route);
    };

    return (
        <BottomNavStyled>
            {tabsOptions?.map((v) => (
                <div className="tab" tabIndex={0} key={v.name} onClick={() => handleNavigate(v.route)}>
                    <div>{v.icon}</div>
                    <div>{v.name}</div>
                </div>
            ))}
        </BottomNavStyled>
    );
};

export default BottomNav;
