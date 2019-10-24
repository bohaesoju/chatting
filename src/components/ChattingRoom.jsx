import * as React from 'react';

export const ChattingRoom = () => {
    return (
        <div className="ChattingRoom">
            <ul className="chattingMessageWrap">
                <li className="leftSide talkMessage">
                    <div className="about">
                        안녕?
                    </div>
                </li>
                <li className="leftSide talkMessage">
                    <div className="about">
                        잘지내?
                    </div>
                </li>
                <li className="rightSide talkMessage">
                    <div className="about">
                        오랜만이야
                    </div>
                </li>
                <li className="leftSide talkMessage">
                    <div className="about">
                        보고싶다
                    </div>
                </li>
            </ul>
            <div className="writeMessageArea">
                <div className="InputandLabelWrap">
                    <input type="text" placeholder="메시지를 입력하세요.." id="writeMessage" className="messageInput"/>
                    <button className="writeMessage"></button>
                </div>
            </div>
        </div>
    )
};
