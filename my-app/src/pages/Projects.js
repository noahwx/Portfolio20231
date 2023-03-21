import React from 'react';
import logo from '../logo.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import BackIcon from '../Arrow_alt_left.svg';

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

    const navigate = useNavigate()

    return ( 
        <div>

            <div className='mobile-wrapper'>
                <div className='home-mobile-content'>
                <img src={BackIcon} alt='' className='mobile-back' onClick={() => navigate(-1)}/>
                    <h1 className='mobile-page'>Projects</h1>
                </div>
                <div className='projects-mobile-content'>
                    <div className='projects-mobile-item'></div>
                    <div className='projects-mobile-item'></div>
                    <div className='projects-mobile-item'></div>
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