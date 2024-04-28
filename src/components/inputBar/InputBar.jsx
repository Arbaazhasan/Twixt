import React, { useState } from 'react';
import './inputBar.scss';

import { FiPaperclip } from "react-icons/fi";
import { BsFillSendFill } from "react-icons/bs";

import { IoDocumentOutline } from "react-icons/io5";
import { IoMdPhotos } from "react-icons/io";
import { FaPlay } from "react-icons/fa6";
import { FaHeadphonesAlt } from "react-icons/fa";

const InputBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const optionTogler = () => {
        setIsOpen((pre) => !pre);

    };


    return (
        <form className='inputBar'>

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
                <input type="text" placeholder='Type a message here...' />
            </div>

            <div className="submitBtn">
                <button>
                    <BsFillSendFill />
                </button>
            </div>



        </form>
    );
};

export default InputBar;