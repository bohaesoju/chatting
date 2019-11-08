import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sendToText } from '../reducers/AddfileList';

export const ChattingRoom = () => {
    const [chattingMessage, setChattingMessage] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        if(!localStorage.getItem("chat")){
            localStorage.setItem("chat", JSON.stringify([]));
        }
    }, []);

    let chatHistory = JSON.parse(localStorage.getItem("chat"));

    const onChattingMessage = e => {
        setChattingMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(chattingMessage === ''){
            alert('채팅 메시지를 입력해주세요!');
        } else {
            let message = {
                text : chattingMessage,
                dateTime : new Date().toLocaleTimeString() + " " + new Date().toDateString(),
                src : "http://pickaface.net/includes/themes/clean/img/slide4.png"
            };

            chatHistory.push(message);
            setChattingMessage('');

            console.log(chatHistory, message)
        }

        // setChattingMessage('');
        // console.log(chattingMessage);
        // dispatch(sendToText({ id: 'test' }));
    };

    // const { handleSubmit } = this.props;

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
                    <form onSubmit={ handleSubmit }>
                        <input type="text"
                               placeholder="메시지를 입력하세요.."
                               onChange={ onChattingMessage }
                               id="writeMessage"
                               className="messageInput"
                               value={ chattingMessage }
                        />
                        <button type="submit" className="writeMessage"></button>
                    </form>
                </div>
            </div>
        </div>
    )
};
