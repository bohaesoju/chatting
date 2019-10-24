import * as React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div className="Header">
            <div className="listIcon"><Link to="/"><img className="menuIcon" src={require('./image/side_menu_icon@3x.png')} alt=""/></Link></div>
            <p className="HeaderCenterTitle"><Link to="/">채팅</Link></p>
            <div className="peopleIcon"><img className="profileIcon" src={require('./image/profile_icon@3x.png')} alt=""/></div>
        </div>
    )
};
