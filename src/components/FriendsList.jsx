import * as React from 'react';
import { Link } from 'react-router-dom';

export const FriendsList = () => {
    return (
        <ul className="FriendsListWrap">
            <li>
                <Link to="viewpage">
                    <img src="http://www.interiorgas.com/wp-content/uploads/blank-profile-picture.png" className="profileImage" alt=""/>
                    <div className="friendsNameWithContent">
                        <p className="friendsName">장만월사장</p>
                        <p className="textContent">안녕하세요 반갑습니다</p>
                    </div>
                    <div className="dateWithAlarmNumbering">
                        <p className="date">10.12</p>
                        <p className="alarmNumbering">3</p>
                    </div>
                </Link>
            </li>
        </ul>
    )
};
