import React, {useState} from 'react';
import NavBarMenu from "../NavBarMenu";
import Offer from "../../offers/Offer";
import "../../offers/Offer.css";
import ShoppingCart from "../navbarShoppingCart/shoppingCart/ShoppingCart";


const NavBar = () => {
    const [show, setShow] = useState(true)
    const [shoppingCart, setShoppingCart] = useState([])


    const handleClick = (item) => {
        let isPresent = false;
        shoppingCart.forEach((product) => {
            if (item.id === product.id)
                isPresent = true;
        })

        setShoppingCart([...shoppingCart, item]);
    }

    return (
        <React.Fragment>
            {/*function for put to shopping cart*/}

            <NavBarMenu size={shoppingCart.length} setShow={setShow}/>

            {
                show ? <Offer handleClick={handleClick}/> : <ShoppingCart
                ShoppingCart={ShoppingCart}
                />
            }

        </React.Fragment>
    );
};

export default NavBar;