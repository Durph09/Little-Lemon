

const Nav = () => {
    return (
        
        <div className="nav">
        <img className= 'logo'src={require('./images/logo.png')} />
            <ul>
               
                <li className="nav-list"><a href="#">Home</a></li> 
                <li className='nav-list'><a href="#">About</a></li>
                <li className='nav-list'><a href="#">Menu</a></li>
                <li className='nav-list'><a href="#">Reservations</a></li>
                <li className='nav-list'><a href="#">Order Online</a></li>
                <li className='nav-list'><a href="#">Login</a></li>
            </ul>
        </div>
    );
};

export default Nav;