import './testimonialcom.css';
import { BsStarFill } from 'react-icons/bs';

const Testimony = ({text, user, name, work}) =>{
    return(
        <div className='testimoney'>
            <div className='stars'>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
            </div>
            <p className='text'>" {text}"</p>
            <div className='buttom'>
                <div className='image'>
                    <img src={user}/>
                </div>
                <div>
                    <p>{name}</p>
                    <span>{work}</span>
                </div>
            </div>
        </div>
    )
}
 export default Testimony;