import React from 'react';
import logo from '../logo.svg';
import { NavLink } from 'react-router-dom';

const Home = () => {

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
                <h1>Home</h1>
            </div>
            <div>
                <div className='mobile-header'>
                    {/* <h4 className="mobile-btn-etcs">Menu</h4> */}
                    <div className='header-btn'>
                        <img src={logo} alt='' onClick={handleOpen} className='mobile-btn'/>
                    </div>

                    {open ? (
                        <div className='mobile-header'>
                            <div className='mobile-header-items'>
                                <NavLink to='/' className='mobile-header-item' onClick={handleMenuOne}>Home</NavLink>
                                <NavLink to='/pages/About' className='mobile-header-item' onClick={handleMenuOne}>About</NavLink>
                                <NavLink to='/pages/Projects' className='mobile-header-item' onClick={handleMenuTwo}>Projects</NavLink>
                                <NavLink to='/pages/Contact' className='mobile-header-item' onClick={handleMenuThree}>Contact</NavLink>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
     );
}
 
export default Home;