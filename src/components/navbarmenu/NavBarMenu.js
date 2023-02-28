import React, {useState} from 'react';
import "./NavBar.Menu.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from "./input/Input";
import logo from "./logo.png";




const NavBarMenu = (props) => {
    const [searchInput, setSearchInput] = useState('')

    return (
        <nav>
            <div className="nav_box">
        <span className="my_shop" onClick={() => props.setShow(true)}>
            <img src={logo} alt="" height="55px" width="55px"/>
                   Junk Yard.com
        </span>
                {/*shopping cart*/}
                <div className="cart" onClick={() => props.setShow(false)}>
                    <button
                        style={{width: "3rem", height: "3rem",}}
                        variant="outline-primary"
                    >
                        <i className="fi fi-rr-shopping-cart"></i>
                    </button>
                    <span>{props.size}</span>
                </div>

            </div>
<div>
                <Input searchInput={searchInput}
                       setSearchInput={setSearchInput}
                />
</div>
        </nav>
    );
};

export default NavBarMenu;
