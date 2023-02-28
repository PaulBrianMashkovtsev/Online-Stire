import React from 'react';
import "./Footer.css";


const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h4>Junk Yard.com</h4>
                        <h1 className="list-unstyled">
                            <li>342-420-6969</li>
                            <li>Brooklyn, NY</li>
                            <li>3232 shore parkway</li>
                        </h1>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <h4>Stuff</h4>
                        <ui className="list-unstyled">
                            <li>Viktor Bogutskii</li>
                            <li>Julia Frolova</li>
                            <li>Larisa Yagodina</li>
                        </ui>
                    </div>
                    {/* Column3 */}
                    <div className="col">
                        <h4>About Junk Yard.com</h4>
                        <ui className="list-unstyled">
                            <li>Company info</li>
                            <li>Returns</li>
                            <li>Donation</li>
                        </ui>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Junk Yard.com | All rights reserved |
                        Terms Of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;