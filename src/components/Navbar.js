import React, { useState } from 'react'
import "./navbar.css"
const Navbar = ({ navbar }) => {
    const [active, setActive] = useState(null);
    const handleclick = id => {
        setActive(id)
    }
    return (
        <nav id='nav' >
            <ul id='ul'>
                {navbar.map(item => (
                    <li id='li' key={item.id}>
                        <a id='a' href="#" onClick={() => handleclick(item.id)}>{item.name}</a>
                        {item.child && (
                            <ul className='ul'>
                                {item.child.map(child => (
                                    <li key={child.id}>
                                        <a href='#' >{child.name}</a>
                                    </li>
                                ))}
                            </ul>
               
                        )}
                    </li>
                ))}
            </ul>
            <div class="hamburger-menu">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
          


        </nav>
    )
}

export default Navbar