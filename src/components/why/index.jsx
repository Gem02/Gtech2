import './why.css'

const Whycomponet = ({icon, head, text}) =>{
    return(
        <div className="card">
            {icon}
            <h2>{head}</h2>
            <p className='p'>{text}</p>
        </div>
    )
}

export default Whycomponet;