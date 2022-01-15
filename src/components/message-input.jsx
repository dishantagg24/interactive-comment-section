import React from 'react';
import UserData from '../UserData'
import './message-input.styles.css'

export const MessageInput = ({content,placeholder,cols}) => {
    const {image,username} = UserData;
    return (
    <div className='message-input'>
        <img src={image.png} alt={username}/>
        <textarea  className='message' rows="2" cols={`${cols ? cols:'55'}`} placeholder={placeholder}/>
        <button className='submit-btn'>{content}</button>
    </div>
 )   
}