import { IoArrowBack } from 'react-icons/io5';

interface BackButtonProps {
    onClick: React.MouseEventHandler<HTMLSpanElement>;
}
const BackButton = ({ onClick }: BackButtonProps) => (
    <span
        onClick={onClick}
        style={{
            cursor: 'pointer',
        }}
    >
        <IoArrowBack />
        <i className="fa fa-icon" />
    </span>
);

export default BackButton;
