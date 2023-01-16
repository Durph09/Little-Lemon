

const Footer =  () => {

    return (
        <footer>
        <div className="footerContainer">
        <img alt='Little Lemon Logo' className= 'logo'src={require('./images/footerLogo.png')} />
           
           <div style={{padding: '50px'}}>
            <address>123 Main Drive, Chicago IL.</address>
            <p>Phone: (555) 555-555</p>
            <p> Email: Us@littleLemon.com</p>
            <p>Come and Visit</p>
            </div>
            
            
            <ul className='footerUl'>
                <li className='nav-List'><a href="#">Home</a></li>
                <li className='nav-List'><a href="#">About</a></li>
                <li className='nav-List'><a href="#">Menu</a></li>
                <li className='nav-List'><a href="#">Reservations</a></li>
                <li className='nav-List'><a href="#">Order Online</a></li>
                <li className='nav-List'><a href="#">Login</a></li>
            </ul>
            
            </div>
        </footer>
    )

}

export default Footer;