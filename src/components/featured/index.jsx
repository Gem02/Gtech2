import './featured.css';
import { dropbox, google, atlassian, shopify, slack } from './imports';

const Featured = () =>{
    return (
        <div className="featured">
            <h1>FEATURED IN</h1>
            <div className="brands">
                <div>
                    <img src={dropbox} alt="dropbox" />
                </div>
                <div>
                    <img src={google} alt="dropbox" />
                </div>
                <div>
                    <img src={atlassian} alt="dropbox" />
                </div>
                <div>
                    <img src={shopify} alt="dropbox" />
                </div>
                <div>
                    <img src={slack} alt="dropbox" />
                </div>
            </div>
        </div>
    )
}

export default Featured;