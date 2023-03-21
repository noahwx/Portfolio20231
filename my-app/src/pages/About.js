import React from 'react';
import logo from '../logo.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import BackIcon from '../Arrow_alt_left.svg';

const About = () => {

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
            <div className='desktop-wrapper'>
                <div className='desktop-bg'></div>
            </div>
            <div className='mobile-wrapper'>
                <div className='home-mobile-content'>
                    <img src={BackIcon} alt='' className='mobile-back' onClick={() => navigate(-1)}/>
                    <h1 className='mobile-page'>About <h1 className='mobile-page2'> Me</h1></h1>
                </div>
                <div className='mobile-about-content'>
                    <p className='mobile-about-text'>I am a 25 year old web developer and analyst from the United States. I have been coding for about 3 years now and I am always looking to learn more. I am currently working on a few projects and I am always looking for new opportunities. I am currently looking for a full time position as a web developer or analyst. If you are interested in working with me do not hesitate to contact me today!</p>
                    <a href='mailto:noahfontenette@outlook.com' className='about-page-item'>Email Me Today</a>
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
 
export default About;