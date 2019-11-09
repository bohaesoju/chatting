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
            localStorage.setItem("chat", JSON.stringify(chatHistory));

            let localData = localStorage.getItem("chat");
            let localDataJson = JSON.parse(localData);

            let i = 0;
            let templateDiv =
                "<li class='leftSide talkMessage'>" +
                "<p className='about'>" + localDataJson[i].text +
                "</p>" +
                "</li>";
            i++;

            console.log(templateDiv, message.text)
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
                    <p className='about'>
                        { chattingMessage }
                    </p>
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
