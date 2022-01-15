import React from 'react';
import {ReactComponent as IconEdit} from '../assets-svg/icon-edit.svg';
import './custom-button.styles.css'
export const EditButton = () => {
    return (
        <button className='custom-btn'><IconEdit/> Edit</button>
    )
}