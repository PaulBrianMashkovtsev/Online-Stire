import React, { useState, useEffect } from "react";
import "./ShoppingCart.css";


const ShoppingCart = (props) => {
    const [price, setPrice] = useState(0);

    const handlePrice = () => {
        let ans = 0;
        ShoppingCart.map((item) => (
            ans += item.amount * item.price
        ));
        setPrice(ans);
    };

    const handleRemove = (id) => {
        const arr = props.ShoppingCart.filter((item) => item.id !== id);
        props.setShoppingCart(arr);
        // handlePrice();
    };


    useEffect(() => {
        handlePrice();
    });

    return (
        <article>
        <h1>Shopping Cart</h1>

            {props.ShoppingCart ?.map((item) => (
                <div className="cart_box" key={item.id}>
                    <div className="cart_imgUrl">
                        <img src={item.imgUrl}/>
                        <p>{item.name}</p>
                    </div>
                    <div>
                        <button onClick={() => props.handleChange(item, +1)}>+</button>
                        <button>{item.amount}</button>
                        <button onClick={() => props.handleChange(item, -1)}>-</button>
                    </div>
                    <div>
                        <span>{item.price}</span>
                        <button onClick={() => handleRemove(item.id)}>Remove</button>
                    </div>
                </div>
            ))}
            <div className="total">
                <span>Total Price of your ShoppingCart</span>
                <span>$ {price}</span>
            </div>

        </article>
    );
};

export default ShoppingCart;