import React from 'react'
import "./topbar.css"
import shipping from "../assets/shipping.png"
import fb from "../assets/fb.png"
import insta from "../assets/insta.png"
import linkedin from "../assets/linkedin.png"
import twitter from "../assets/Vector (2).png"

const Topbar = () => {
    return (
        
        <div id="mainhead">
            <div id='top1'><img src={shipping} alt='ship'></img> Free Delivery | Return Policy</div>
            <div id='top2'>          <ul>
                <li>Login</li>
                <li>Follow US</li>
                <li><img src={fb} alt='fb'></img></li>
                <li><img src={insta} alt='insta'></img></li>
                <li><img src={twitter} alt='twitter'></img></li>
                <li><img src={linkedin} alt='in'></img></li>
            </ul>
            </div>
  

        </div>
    )
}

export default Topbar