import React from "react";
import './header.css';
import {IoIosCheckmarkCircleOutline} from 'react-icons/io';


const Option = ({text}) => {
    return (
        <div>
            <IoIosCheckmarkCircleOutline className="icon"/>
            <p>{text}</p>
        </div>
    )
}

const Header = () => {
    return (
        <div className="header">
            <h1 className="learn">Learn High Paying Skills</h1>
            <h1 className="color">Get promoted</h1>
            <div className="text">
                <p>Master in-demand skills, boost your career, and join a vibrant learning community with G-Tech – where education meets innovation.</p>
            </div>
            <div className="header-buttons">
                <button className="colortext">View Plans</button>
                <button>Start Learning</button>
                
            </div>
            <div className="notes">
                
                <Option text="12+ online courses" />
                <Option text="Expert instruction" />
                <Option text="Lifetime access" />
                
            </div>
        </div>
    )
}

export default Header;