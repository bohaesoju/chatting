import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendToText, sendToTextImage } from '../reducers/AddfileList';

export const ChattingRoom = () => {
    const [chattingMessage, setChattingMessage] = useState('');
    const { image, textImage } = useSelector((state) => state.AddfileList);
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

    const sendToTextMessage = () => {
        console.log(chattingMessage);
        dispatch(sendToText(chattingMessage));
        setChattingMessage('')
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(chattingMessage === ''){
            alert('채팅 메시지를 입력해주세요!');
        } else {
            sendToTextMessage()
            // let message = {
            //     text : chattingMessage,
            //     dateTime : new Date().toLocaleTimeString() + " " + new Date().toDateString(),
            //     src : "http://pickaface.net/includes/themes/clean/img/slide4.png"
            // };
            //
            // chatHistory.push(message);
            // setChattingMessage('');
            // localStorage.setItem("chat", JSON.stringify(chatHistory));
            //
            // let localData = localStorage.getItem("chat");
            // let localDataJson = JSON.parse(localData);
            //
            // let i = 0;
            // let templateDiv =
            //     "<li class='leftSide talkMessage'>" +
            //     "<p className='about'>" + localDataJson[i].text +
            //     "</p>" +
            //     "</li>";
            // i++;
            //
            // console.log(templateDiv, message.text)
        }

        // setChattingMessage('');
        // console.log(chattingMessage);
        // dispatch(sendToText({ id: 'test' }));
    };

    // const { handleSubmit } = this.props;

    return (
        <div className="ChattingRoom">
            <ul className="chattingMessageWrap">
                {/*{ image.length > 0 && image.map((e, i) => (*/}
                    {/*<li className="leftSide talkMessage">*/}
                        {/*<p className='about'>*/}
                        {/*<img*/}
                            {/*key={ i }*/}
                            {/*className="chattingRoomImage"*/}
                            {/*src={require(`${ e }`)}/>*/}
                        {/*</p>*/}
                    {/*</li>*/}
                {/*))}*/}
                { textImage.length > 0 && textImage.map((e, i) => (
                    <li className="leftSide talkMessage" key={ i }>
                        <p className='about'>
                        {e.type === 'SEND_TO_IMAGE' ?
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
