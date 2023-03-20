import logo from '../logo.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return ( 
        <div className="Header">
            <NavLink to='/' className='Header-Logo'><img src={logo} alt=''/></NavLink>
            <div className='Header-Items'>
                <NavLink to='/' className='Header-Item'>Home</NavLink>
                <NavLink to='/pages/About' className='Header-Item'>About</NavLink>
                <NavLink to='/pages/Projects' className='Header-Item'>Projects</NavLink>
                <NavLink to='/pages/Contact' className='Header-Item'>Contact</NavLink>
            </div>
        </div>
     );
}
 
export default Header;