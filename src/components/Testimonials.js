

const Testimonials = () => {

    return (
        <div className="highlights">
        <div className="testo-items">
            <h2 className="menuTitle">Jon T.</h2>
            <img src={require("./images/JonT.png")} style={{width: '150px', height: '150px', borderRadius: "16px"}}/>
            <p>"Tomatoes are a fruit, bet you didn't know that.  5 stars everytime!"</p>
        </div>

        <div className="testo-items">
            <h2 className="menuTitle">Beth P.</h2>
            <img src={require("./images/BethP.png")} style={{width: '150px', height: '150px', borderRadius: "16px"}}/>
            <p>"Everytime I'm in town Little Lemon is a must, along with several other generic establishments."</p>
        </div>

        <div className="testo-items">
            <h2 className="menuTitle">Joe S.</h2>
            <img src={require("./images/JoeS.png")} style={{width: '150px', height: '150px', borderRadius: "16px"}}/>
            <p>"My real name is Vincent Adultman of AdultMan Industries. Always save room for dessert, they're the best"</p>
        </div>

        <div className="testo-items">
            <h2 className="menuTitle">Salt B.</h2>
            <img src={require("./images/SaltB.png")} style={{width: '150px', height: '150px', borderRadius: "16px"}}/>
            <p>"When I'm not busy slapping meat you can always find me sucking lemons"</p>
        </div>
        
        </div>
    )
}

export default Testimonials