import './instructorcom.css';
import Pic1 from '../../assets/profile_5.png';
import { BsStarFill, BsStar, BsStarHalf, BsFill0CircleFill, BsBookmark } from 'react-icons/bs';



const Instructor = () =>{
    return(
        <div className='tutor'>
            <div className='tutorimg'><img src={ Pic1 }/></div>
            <div className='tutorcontent'>
                <p className='head'>ATO Bradley</p>
                <p className='work'>Full Stack Developer</p>
                <div className='tutorinfo'>
                    <div className='color'>
                        <BsStarFill />
                        <p>4.5</p>
                    </div>
                    <div>
                        <h2>9,692</h2>
                        <span>Student</span>
                    </div>
                    <div>
                        <h2>3</h2>
                        <span>Courses</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Instructor;