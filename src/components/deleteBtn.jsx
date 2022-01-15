import React from 'react';
import {ReactComponent as IconDelete} from '../assets-svg/icon-delete.svg';
import './custom-button.styles.css'
export const DeleteButton = () => {
    return (
        <button className='custom-btn' style={{color:'hsl(358, 79%, 66%)'}}><IconDelete/> Delete</button>
    )
}