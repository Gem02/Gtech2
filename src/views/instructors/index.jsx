import { Instructor } from "../../components";
import './instructors.css';

const InstructorMain = () =>{
    return(
        <div className="instructor">
            <div className="instructor-area">
                <p className="space">WORLD-CLASS INSTRUCTORS</p>
                <h1>Classes Taught by Industry Expert</h1>
                <p className="text">G-Tech teachers are icons, experts, and industry rock stars excited to share their experience, wisdom, and trusted tools with you.</p>
                
            </div>
            <div className="instruct">
                <Instructor />
            </div>
        </div>
    )
}

export default  InstructorMain;