import {Route, Routes, Link} from 'react-router-dom'

const Nav = () => {
    return (
        
        <div className="nav">
        <img className= 'logo'src={require('./images/logo.png')} />
            <ul>
               
                <li className="nav-list"><Link to="/">HomePage</Link></li> 
                <li className="nav-list"><Link to="/About">About</Link></li> 
                <li className='nav-list'><a href="#">Menu</a></li>
                <li className='nav-list'><Link to="/Booking">Reservations</Link></li>
                <li className='nav-list'><a href="#">Order Online</a></li>
                <li className='nav-list'><a href="#">Login</a></li>
            </ul>
        </div>
    );
};

export default Nav;