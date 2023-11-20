import React, { useState } from "react";
import { RiSearchLine } from 'react-icons/ri';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './nav.css';

const NavList = () =>(
    <>
        <ul>
            <li><a>Home</a></li>
            <li><a>Pricing</a></li>
            <li><a>Learning Paths</a></li>
            <li><a>Courses</a></li>
        </ul>
    </>
)

const Form = () =>{
    return(
        <div className="nav-form">
            <form>
                <RiSearchLine  />
                <input placeholder="Search Courses"></input>
            </form>
        </div>
    )
}
const Nav = () =>{
    const [Menu, setMenu] = useState(false);
    return(
        <div className="nav">
            <div className="nav-links">
                <div className="nav-flexstart">
                    <div className="logo"><h1>G-Tech</h1></div>

                    <div className="navlist">
                        <NavList />
                    </div>
                    <div className="navform1">
                        <Form /> 
                    </div>
                </div>
                <div className="buttons">
                    <button>Sign in</button>
                    <button className="signup">Sign up</button>
                </div>
                <div className="navicons">
                {Menu
                    ? <RiCloseLine size="26px" className="icon" onClick={() => setMenu(false)} />
                    : <RiMenu3Line size="26px" className="icon" onClick={() => setMenu(true)} />
                }
                { Menu && (
                    <div className="dropdown">
                        <NavList />
                        <div className="navform2">
                            <Form /> 
                        </div>
                    </div>
                )

                }

                </div>
            </div>
        </div>
    )
}


export default Nav;