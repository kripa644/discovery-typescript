import React from 'react';
import './style.css';
import '../../_settings/_base.css';

type TextProps = {
    className?: string,
    handleClick?: () => void
}

const Text: React.FC<TextProps> = ({ className, handleClick, children}) => {
    const classNames = `Text ${className}`;
    return (
        <p className={classNames} onClick={handleClick}>
            {children}
        </p>
    );
};

export default Text;