import React from 'react';
import logo from '../logo.svg';
import { NavLink } from 'react-router-dom';

const Projects = () => {

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

            <div className='mobile-wrapper'>
                <div className='home-mobile-content'>
                    <h1 className='mobile-page'>Projects</h1>
                </div>
                <div>
                    <div className='mobile-header'>
                        <h4 className="mobile-header-btn-etcs">Menu</h4>
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
                    <div className='mobile-bg-gradient'></div>
                </div>
            </div>
        </div>
     );
}
 
export default Projects;