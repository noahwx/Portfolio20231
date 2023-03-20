import React from 'react';
import logo from '../logo.svg';
import { NavLink } from 'react-router-dom';

const Contact = () => {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    const handleMenuOne = () => {
        setOpen(false);
    };
    
    const handleMenuTwo = () => {
        setOpen(false);
    };

    const handleMenuThree = () => {
        setOpen(false);
    };

    return ( 
        <div>
            <div>
                <h1>Contact</h1>
            </div>
            <div>
                <div className='mobile-header'>
                    <h4 className="mobile-btn-etcs">Menu</h4>
                    <div className='header-btn'>
                        <img src={logo} alt='' onClick={handleOpen} className='mobile-btn'/>
                    </div>

                    {open ? (
                        <div className='mobile-header'>
                            <div className='mobile-NavItems'>
                                <NavLink to='/' className='mobile-header-item' onClick={handleMenuOne}>Home</NavLink>
                                <NavLink to='/Projects' className='mobile-header-item' onClick={handleMenuTwo}>Projects</NavLink>
                                <NavLink to='/Contact' className='mobile-header-item' onClick={handleMenuThree}>Contact</NavLink>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
     );
}
 
export default Contact;