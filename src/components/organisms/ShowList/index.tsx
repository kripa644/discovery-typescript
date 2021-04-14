import React from 'react';
import '../../_settings/_base.css';
import './style.css';

type ShowListProps = {
    className?: string
}

const ShowList: React.FC<ShowListProps> = ({className, children}) => {
    return (
        <div className={`showData ${className}`}>
            {children}
        </div>
    );
};

export default ShowList;