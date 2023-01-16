


const About =  () => {

    return (
        
        <div className='gridContainer1'>
    <div className="gridDesc1">
                <h2 className="title">Little Lemon</h2>
                <h3 className="subHeading">Chicago</h3>
                <p className="paraLight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               </div> 
               
               
                <img className='backImage' src={require('./images/Chefs.jpg')}  />

                <img className='frontImage' src={require('./images/restaurant.jpg')}  />
                
    
</div>

    )
}

export default About