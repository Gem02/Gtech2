import './cat.css';
import { BiTimeFive } from 'react-icons/bi';
import { TbAntennaBars2 } from 'react-icons/tb';
import { BsStarFill, BsStar, BsStarHalf, BsFill0CircleFill, BsBookmark } from 'react-icons/bs';

const CatCard = ({image, heading, time, level, laststar, rating, people }) =>{
    return(
        <div className='catcard'>
            <div> <img src={image} alt='course logo'></img> </div>
            <div className='catcardbody'>
                <h2>{heading}</h2>
                <div className='icontime'>
                    <BiTimeFive />
                    <p>{time}</p>
                </div>
                <div className='icontime'>
                    <TbAntennaBars2 className='coloricon'/>
                    <p>{level}</p>
                </div>
                <div className='icontime rating'>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    {laststar}
                    <span>{rating}</span>
                    <p>{people}</p>
                </div>
                <div className='icontime last'>
                    <div>
                        <BsFill0CircleFill className='coloricon'/>
                        <p>G-Tech</p>
                    </div>
                    <BsBookmark className='bookmarkicon'/>
                </div>
            </div>
        </div>
    )
}

export default CatCard;