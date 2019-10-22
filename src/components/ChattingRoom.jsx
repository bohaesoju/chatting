import * as React from 'react';

export const ChattingRoom = () => {
    return (
        <div className="ChattingRoom">
            <ul className="chattingMessageWrap">
                <li className="leftSide">
                    안녕?
                </li>
                <li className="leftSide">
                    잘지내고 있니?
                </li>
                <li className="rightSide">
                    잘지내고 있어
                </li>
            </ul>
            <div className="writeMessageArea">
                <input type="text" id="writeMessage" className="messageInput"/>
                <label htmlFor="writeMessage">버튼</label>
            </div>
        </div>
    )
};
