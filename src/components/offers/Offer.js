import React from 'react';
import list from "../offers/Items";
import Cards from "./Cards";
import "./Offer.css";



const Offer = (props) => {

    return (
        <section>
            {
                list.map((item) => (
                <Cards key={item.id} item={item} handleClick={props.handleClick}/>
            ))}
        </section>
    );
};

export default Offer;