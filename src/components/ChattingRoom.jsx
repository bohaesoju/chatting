import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendToText } from '../reducers/AddfileList';
import { Maybe } from './Maybe';
import { ChattingList } from "./ChattingList";

export const ChattingRoom = () => {
    const [chattingMessage, setChattingMessage] = useState('');
    const { textImage } = useSelector((state) => state.AddfileList);
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, document.body.scrollHeight);
    }, [textImage.length]);

    const onChattingMessage = e => {
        setChattingMessage(e.target.value);
    };

    const sendToTextMessage = () => {
        dispatch(sendToText(chattingMessage));
        setChattingMessage('');
        window.scrollTo(0, document.body.scrollHeight);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(chattingMessage === ''){
            alert('채팅 메시지를 입력해주세요!');
        } else {
            sendToTextMessage()
        }
    };

    return (
        <div className="ChattingRoom">
            <ul className="chattingMessageWrap">
                <Maybe test={ textImage.length > 0 }>
                    <ChattingList />
                </Maybe>
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
