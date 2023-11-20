import './testimonial.css';
import { Testimony } from '../../components';
import { User1, User2, User3 } from './expors';
const Testimonial = () =>{
    return(
        <div className='testimonials'>
            <div className='top'>
                <p>TESTIMONIALS</p>
                <h1>Don’t just take our word for it.</h1>
                <span>1000+ million people are already learning on G-Tech</span>
            </div>
            <div className='flexcomponents'>
                <Testimony text={"Going through this courses and teching my student as made my work so much easy and i strongly recommend this courses to both beginners and intermediate deelopers "} user={User1} name={"Valentina Mangai"} work={"Fullstack Web"} />
                <Testimony text={"The best part of this site is the fact that all these courses are totally free. I really learned a lot thanks mate."} user={User2} name={"Godwin Ezekiel"} work={"Instructor web design"}/>
                <Testimony text={"I just started the react course and i must say, it's the best react course that i've come across. thank you so much."} user={User3} name={"Daniel Wood"} work={"Beginner Web developer"} />
            </div>
        </div>
    )
}

export default Testimonial;