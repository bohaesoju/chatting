import * as React from 'react';
import { Link } from 'react-router-dom';

export const FriendsList = ({ friendsListContent }) => {
    return (
        <>
        { friendsListContent &&
            <ul className="FriendsListWrap">
                {friendsListContent.map((content) => (
                    <li key={ content.id }>
                        <Link to="viewpage">
                            <img src={require(`${ content.image }`)}
                                 className="profileImage" alt=""/>
                            <div className="friendsNameWithContent">
                                <p className="friendsName">{ content.name }</p>
                                <p className="textContent">{ content.message }</p>
                            </div>
                            <div className="dateWithAlarmNumbering">
                                <p className="date">{ content.date }</p>
                                {content.alarm > 0 ? <p className="alarmNumbering">{ content.alarm }</p> : ''}
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
         }
        </>
    )
};
