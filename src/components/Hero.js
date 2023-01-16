

const Hero = () => {

    return(
        <div className="gridContainer">
        
            <div className="hero"></div>
            <div className="gridDesc">
                    <h2 className="title">Little Lemon</h2>
                    <h3 className="subHeading">Chicago</h3>
                    <p className="paraLight">We are a family owned Mediterranean restaaurant, focused on traditional recipes served with a modern twist</p>
                    <button>Reserve a table</button>
                    
            </div>
            <img className='gridImage' src={require('./images/bruchetta.jpg')} />
          
            

            </div>
        
    
    
    )
}

export default Hero