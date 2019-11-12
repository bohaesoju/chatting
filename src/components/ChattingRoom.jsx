import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendToText } from '../reducers/AddfileList';

export const ChattingRoom = () => {
    const [chattingMessage, setChattingMessage] = useState('');
    const { textImage } = useSelector((state) => state.AddfileList);
    const { AddfileList2 } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('nnn')
        // if(!localStorage.getItem("chat")){
        //     localStorage.setItem("chat", JSON.stringify([]));
        // }
    }, [AddfileList2]);

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
                { textImage.length > 0 && textImage.map((e, i) => (
                    <li className="leftSide talkMessage" key={ i }>
                        <p className='about'>
                            { e.type === 'SEND_TO_IMAGE' ?
                                <img
                                    key={ i }
                                    className="chattingRoomImage"
                                    src={require(`${ e.index }`)}/> :
                                <span>{ e.index }</span>
                            }
                        </p>
                    </li>
                ))}
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
