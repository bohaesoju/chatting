import * as React from 'react';

export const ChattingRoom = () => {
    return (
        <div className="ChattingRoom">
            <ul className="chattingMessageWrap">
                <li className="leftSide talkMessage">
                    <div className="about">
                        유이야 안녕? 어떻게 지내?
                    </div>
                </li>
                <li className="leftSide talkMessage">
                    <div className="about">
                        잘지내고 있는거지??
                    </div>
                </li>
                <li className="rightSide talkMessage">
                    <div className="about">
                        응응. 나는 잘 지내고 있지 오랜만이야
                    </div>
                </li>
                <li className="leftSide talkMessage">
                    <div className="about">
                        우리 얼굴 본지도 오래된것 같다.
                    </div>
                </li>
                <li className="leftSide talkMessage">
                    <div className="about">
                        한번 봐야 하는데ㅎㅎ
                    </div>
                </li>
                <li className="rightSide talkMessage">
                    <div className="about">
                        응 맞아 언제 일마치고 한번 보자 !
                    </div>
                </li>
                <li className="leftSide talkMessage">
                    <div className="about">
                        그래 보고싶다
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
