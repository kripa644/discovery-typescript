import React from 'react';
import './style.css';
import '../../_settings/_base.css';
import { type } from 'node:os';

export enum ButtonType {
    BUTTON = 'button',
    SUBMIT = 'submit',
};

// button themes
export enum ButtonTheme {
    PRIMARY =  'primary',
    SECONDARY = 'secondary',
};

type ButtonProps = {
    type: ButtonType,
    theme?: ButtonTheme,
    className?: string,
}

const Button: React.FC<ButtonProps> = ({type, theme, className, children}) => {
    const classNames = `button ${theme} ${className}`;

    return (
        <button type={type} className={classNames}>
            {children}
        </button>
    );
};

export default Button;