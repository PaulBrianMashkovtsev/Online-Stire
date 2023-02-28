import React from 'react';

const Cards = (props) => {
    const {imgUrl, name, price, amount} = props.item;
    return (
        <div className="cards">
            <div className="image_box">
                <img src={imgUrl} alt="pic"/>
            </div>
            <div className="details">
                <p>{name}</p>
                <p> $ {price}</p>
                <p>Quantity: {amount}</p>
                <button onClick={() => props.handleClick(props.item)}>Buy now</button>
            </div>
        </div>
    );
};

export default Cards;