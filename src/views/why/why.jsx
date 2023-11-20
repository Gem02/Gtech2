import './why.css';
import Whycomponet from '../../components/why';
import { FiSettings, FiUser, FiAward, FiUsers } from 'react-icons/fi';


const Whyview = () =>{
    return(
        <div className="why">
            <p>Explore new skills, deepen existing passions, and get lost in creativity. What you find just might surprise and inspire you.</p>
            <h2 className='h2'>Why Learn with G-Tech</h2>
            <h1>Build better skills,faster</h1>
            <div className='cardflex'>
                <Whycomponet icon={<FiSettings className="icon" />} head={"Learn the latest skills"} text={"Stay ahead of the curve with G-Tech, where cutting-edge knowledge meets interactive learning."} />
                <Whycomponet icon={<FiUser className="icon" />} head={"Get ready for a career"} text={"Bridge the gap between learning and earning with G-Tech's career-focused courses that prepare you for the professional world. "} />
                <Whycomponet icon={<FiAward className="icon" />} head={"Earn a Certificate"} text={"Validate your expertise and show off your proficiency with G-Tech's industry-recognized certificates. "} />
                <Whycomponet icon={<FiUsers className="icon" />} head={"Upskill your organization"} text={"Elevate your team's talents with G-Tech's tailored training, designed to drive your organization forward. "}/>
            </div>
        </div>
    )
}

export default Whyview;