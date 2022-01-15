import React from 'react';
import {ReactComponent as IconPlus} from '../assets-svg/icon-plus.svg';
import {ReactComponent as IconMinus} from '../assets-svg/icon-minus.svg';
import './score.styles.css';
import { useState } from 'react/cjs/react.development';

export const Score = ({score}) => {
    const [count,setCount] = useState(score);

    return (
        <div className='score'>
            <button className='btn' onClick={()=>{setCount(count+1)}}>
            <IconPlus />
            </button>
            <p className='score-point'>{count}</p>
            <button className='btn' onClick={()=>{setCount(count-1)}}>
            <IconMinus />
            </button>
         </div>
    )
}