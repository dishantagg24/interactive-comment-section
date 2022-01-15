import React, { useState } from 'react';

import CommentData from '../CommentData';
import { Card } from '../components/card';
import './cardList.styles.css';
import { MessageInput } from './message-input';

export const CardList = () => {
    const [id,setId] = useState(null)
    const handleClick = (id) => {
      setId(id);
    }

    return (
        <div>
        {CommentData.map((item)=>{
            const {replies} = item;
            return (
              <div key={item.id}>
                <div className='card-container'>
                  <Card {...item} handleClick={handleClick}/>
                  {item.id===id ? <MessageInput content='REPLY' />:null}
                </div>
                <div className='reply-container'>
                <div className='vertical-line' style={{height:`${183*replies.length + 15*(replies.length-1)}px`}}></div>
                <div>
                {replies.map((reply)=>{
                  return (
                      <div key={reply.id} className='card-container '>
                      <Card {...reply} handleClick={handleClick} />
                      {reply.id===id ? <MessageInput content='REPLY' cols='45' />:null}
                      </div>
                  )
                })}
                </div>
                </div>
              </div>
            )
        })}
        </div>
    )
}