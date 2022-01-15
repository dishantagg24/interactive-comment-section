import React from 'react';

import './card.styles.css'
import { Score } from './score';
import UserData from '../UserData';
import { ReplyButton } from './replyBtn';
import { EditButton } from './editBtn';
import { DeleteButton } from './deleteBtn';

export const Card = ({id,user,createdAt,content,score,replyingTo,handleClick}) => {
    return (
        <article className='card'>
         <Score score={score}/>
         <div className='comment'>
            <div className='header'>
              <div className='user-info'>
                <img src={user.image.png} alt={user.username}/>
                <div className='username'>
                  <span className='name'>{user.username}</span>
                  {UserData.username===user.username ? 
                  <span className='user'>you</span>
                  : null
                  }
                </div>
                <span className='time-period'>{createdAt}</span>
              </div>
            {UserData.username===user.username
            ? 
            <div className='delete-edit-btn'>
            <DeleteButton />
            <EditButton />
            </div>
            :
            <ReplyButton onClick={handleClick} id={id}/>
            }
            </div>
            <p className='content'>
            { replyingTo ? <span className='tag'>@{replyingTo} </span> : null }
            {content}</p>
         </div>
        </article>
    )
}