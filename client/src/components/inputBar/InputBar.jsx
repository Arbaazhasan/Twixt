import React, { useEffect, useState } from 'react';
import './inputBar.scss';

import { FiPaperclip } from "react-icons/fi";
import { BsFillSendFill } from "react-icons/bs";

import { IoDocumentOutline } from "react-icons/io5";
import { IoMdPhotos } from "react-icons/io";
import { FaPlay } from "react-icons/fa6";
import { FaHeadphonesAlt } from "react-icons/fa";
import { sentMessage } from '../../redux/action/messages';
import { useDispatch, useSelector } from 'react-redux';

const InputBar = () => {

    const dispatch = useDispatch();

    const { reciverData } = useSelector(state => state.messagesReducer);
    const { sendMessageLoading } = useSelector(state => state.messagesReducer);

    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');

    const optionTogler = () => {
        setIsOpen((pre) => !pre);
    };

    const messageHandler = (e) => {
        e.preventDefault();
        sentMessage(dispatch, reciverData.userId, message);
        setMessage('');
    };

    useEffect(() => {
        // console.log(reciverData.userId);
        // console.log(message);
        // console.log(sendMessageLoading);

    }, [reciverData, message, sendMessageLoading]);

    return (
        <form className='inputBar' onSubmit={messageHandler}>

            <div className="attachmentOption" style={{ display: isOpen ? "flex" : "none" }}>

                <div>
                    <span><IoDocumentOutline /></span>
                    <p>Document</p>
                </div>

                <div>
                    <span><IoMdPhotos /></span>
                    <p>Photo</p>
                </div>

                <div>
                    <span><FaPlay /></span>
                    <p>Video</p>
                </div>

                <div>
                    <span><FaHeadphonesAlt /></span>
                    <p>Music</p>
                </div>


            </div>



            <div className="attachments" onClick={optionTogler}>
                <FiPaperclip />
            </div>

            <div className="textInputArea">
                <input type="text" value={message} placeholder='Type a message here...' onChange={(e) => setMessage(e.target.value)} />
            </div>

            <div className="submitBtn">
                <button type='submit'>

                    {
                        sendMessageLoading ?
                            <div className='messageLoading'></div>
                            :
                            <BsFillSendFill />
                    }



                </button>
            </div>



        </form>
    );
};

export default InputBar;