import { IoArrowBack } from 'react-icons/io5';
import BackButtonStyled from './BackButtonStyled';

interface BackButtonProps {
    onClick: React.MouseEventHandler<HTMLSpanElement>;
}

const BackButton = ({ onClick }: BackButtonProps) => (
    <BackButtonStyled onClick={onClick}>
        <IoArrowBack fontSize={35} />
    </BackButtonStyled>
);

export default BackButton;
