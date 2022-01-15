import React from 'react';
import { useState } from 'react/cjs/react.development';
import {ReactComponent as IconReply} from '../assets-svg/icon-reply.svg';
import './custom-button.styles.css'

export const ReplyButton = ({onClick,id}) => {

    const addReply = () => {
        onClick(id);
    }

    return (
        <button className='custom-btn' onClick={addReply}><IconReply/> Reply</button>
    )
}