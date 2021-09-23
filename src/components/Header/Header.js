import React from 'react'
import './Header.css'

export default function Header() {
    return (
       <div>   
           <header>
              <div className="navbar">
                    <h2 style={{color:'white'}}>That Js Dude</h2>
                    <button className="btnStyle">Sign In</button>
                </div>

                <div className="headerExclusive">
                <h2 style={{fontSize:'58px'}}>Exclusive React Workshop for <br/> beginners!</h2>
                    <p style={{fontSize:'22px'}}>Once in a year opportunity to learn and build your <a href="/home">first React app</a></p>
                    <button className="exclusiveBtn">Learn More</button>
                </div>
            </header>
       </div>
    )
}
