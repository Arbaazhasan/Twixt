import React, { useEffect } from 'react';
import './conversations.scss';

import Conversation from '../conversation/Conversation';
import { useDispatch, useSelector } from 'react-redux';
import { conversationProvider } from '../../redux/reducer/appFunctions';
import { getUserMessages } from '../../redux/action/messages';

const Conversations = ({ chatType }) => {
    const dispatch = useDispatch();
    const { allUsersChats } = useSelector(state => state.conversations);

    const conversationHandler = (userId, name, profilePicture, isOnline, updatedAt) => {

        dispatch(conversationProvider());

        getUserMessages(dispatch, userId, name, profilePicture, isOnline, updatedAt);

    };



    useEffect(() => {

        // console.log(allUsersChats[0].profilePicture.url);

    }, [allUsersChats]);


    return (
        <div className='conversations'>

            <div className='chatCategory'>
                <p>{chatType}</p>
            </div>


            {
                allUsersChats && allUsersChats.map((i) => (
                    <div key={i._id} onClick={() => conversationHandler(
                        i._id,
                        i.name,
                        i.profilePicture,
                        i.isOnline,
                        i.updatedAt,
                    )}>
                        <Conversation
                            userId={i._id}
                            name={i.name}
                            profilePicture={i.profilePicture}
                            messageTime={i.time}
                            lastMessage={i.lastMessage || "Abd"}
                            isOnline={i.isOnline}
                            lastSeen={i.updatedAt}
                        />
                    </div>
                ))
            }


        </div >
    );
};

export default Conversations;