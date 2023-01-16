

const Highlights = () => {

    return (
        <>
        <div className='topLine'>
            <span className='display-title'>This weeks specials!</span><button className='button-online-order'>Order Online</button>

        </div>
        
        <div className="highlights">
            <div className='highlights-items'>
                <img src={require('./images/greekSalad.jpg')} style={{width: '300px', height: '200px', borderRadius: '16px 16px 0px 0px'}}/>
                <div className='top-line'>
                <span className='menuTitle'>Greek Salad</span> <span className='menuPrice'>$12.99</span>
                </div>
            </div>

            <div className='highlights-items'>
                <img src={require('./images/bruchettaBread.jpg')} style={{width: '300px', height: '200px', borderRadius: '16px 16px 0px 0px'}}/>
                <div className='top-line'>
                <span className='menuTitle'>Bruchetta</span> 
                <span className='menuPrice'>$5.99</span>
                </div>
            </div>

            <div className='highlights-items'>
                <img src={require('./images/lemon-dessert.jpg')} style={{width: '300px', height: '200px', borderRadius: '16px 16px 0px 0px'}}/>
                <div className='top-line'>
                <span className='menuTitle'>Lemon Cake</span> 
                <span className='menuPrice'>$5.00</span>
                </div>
                <p className='paraDark'>Light, fluffy, and deliciously tangy, this Lemon Cake is the perfect dessert for any occasion. With two layers of moist lemon-flavored cake coated in a rich lemon-flavored cream cheese frosting.</p>
            </div>
        
        </div>
        </>
    )
}

export default Highlights