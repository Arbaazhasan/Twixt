import React, { useEffect, useRef, useState } from 'react';
import "./message.scss";
import { useSelector } from 'react-redux';
import { formatTime } from '../../utils/formatTime';

const Message = () => {

    const { messages: userMessages } = useSelector(state => state.messagesReducer);
    const { userData } = useSelector(state => state.userLogin);

    const [messages, setMessages] = useState();

    const lastMessageRef = useRef();


    useEffect(() => {

        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);

        userMessages && setMessages(userMessages);

        console.log(userMessages);

    }, [messages, userMessages]);


    return (
        <div className='messagesContainer'>

            {
                messages && messages.map((i) =>
                (
                    userData._id === i.senderId ?

                        <div className="reciverMessagesContainer" key={i._id} ref={lastMessageRef}>

                            <div className="messageContainer">

                                <div className="message">{i.message}</div>

                                <div className="timestamp">
                                    <span>{formatTime(i.createdAt)}</span>

                                </div>

                            </div>

                            <div className="profileIcon">
                                <img src="picon.png" alt="" />
                            </div>


                        </div>

                        :

                        <div className="sernderMessagesContainer" key={i._id}>

                            <div className="profileIcon">
                                <img src="picon.png" alt="" />
                            </div>

                            <div className="messageContainer">
                                <div className="message">{i.message}</div>

                                <div className="timestamp">
                                    <span>{formatTime(i.createdAt)}</span>
                                </div>

                            </div>

                        </div>
                ))
            }







        </div>
    );
};

export default Message;