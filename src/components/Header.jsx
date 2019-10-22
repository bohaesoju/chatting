import * as React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div className="Header">
            <div className="listIcon"><Link to="/">리스트</Link></div>
            <p className="HeaderCenterTitle"><Link to="/">채팅</Link></p>
            <div className="peopleIcon">피플</div>
        </div>
    )
};
