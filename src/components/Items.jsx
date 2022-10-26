import React from 'react';
import "./LeftPart.css"

const items = ({tag, name, amount, quantity}) => {
    return (
        <div className='items'>
            <div>
                <p>#{tag}</p>
            </div>
            <div className='name-amt'>
                <p>{name}</p>
                <span>${amount}</span>
            </div>
            <div>
                <p>{quantity}</p>
            </div>
        </div>
    )
}

export default items
