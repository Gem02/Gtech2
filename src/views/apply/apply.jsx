import People from '../../assets/people.png';
import './apply.css';


const Stage = ({head, text}) =>{
    return(
        <div className='texts'>
            <h2>{head}</h2>
            <p>{text}</p>
        </div>
    )
}

const Apply = () =>{
    return(
        <div className='apply'>
            <div className='top-section'>
                <div>
                    <img src={People}/>
                    <h1 className='head'>Become an Instructor</h1>
                </div>
                <p>
                    Top instructors from around the world teach millions
                    of students on G-Tech. We provide the tools and skills 
                    to teach what you love
                </p>
            </div>
            <div className='description'>
                <Stage head={"Earn money"} text={"Earn money every time a student purchases your course. Get paid monthly through Paypal or Payoneer."} />
                <Stage head={"Inspire students"} text={"Help people learn new skills, advance their careers, and explore their hobbies by sharing your knowledge."} />
                <Stage head={"Join our community"} text={"Take advantage of our active community of instructors to help you through your course creation process."} />
            </div>
            <div className='button'>
                <button>Coming Soon...</button>
            </div>
        </div>
    )
}
export default Apply;