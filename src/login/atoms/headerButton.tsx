import React from 'react';
import '../../scss/subButton.scss';
import '../../scss/contactButton.scss';

interface ButtonProps {
    onClick: () => void;
    label: string;
    bgc: string;
}

export const HeaderButton: React.FC<ButtonProps> = ({ onClick, label, bgc }) => {
    return (
        < button onClick={onClick} style={{ backgroundColor: bgc }} className='subButton' >
            {label}
        </button>
    );
};

export default HeaderButton;

