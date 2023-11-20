import './footer.css';
import { FaGithub, FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

var CopyRight = String.fromCharCode(169);
var CurrentDate = new Date().getFullYear();

const Footer = () =>{
    return(
        <div className="footer">
            <div className="top">
                <h2>Subscribe to our news letter</h2>
                <p>The latest news, articles, and resources, sent to your inbox weekly</p>
                <form>
                    <input type="text" placeholder="Enter your email" required/>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="middle">
                <ul>
                    <h2>Solutions</h2>
                    <li>Marketing</li>
                    <li>Analysis</li>
                    <li>Commerce</li>
                    <li>Insights</li>
                </ul>
                <ul>
                    <h2>Soppors</h2>
                    <li>Pricing</li>
                    <li>Documentation</li>
                    <li>Guides</li>
                    <li>API status</li>
                </ul>
                <ul>
                    <h2>Company</h2>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Jobs</li>
                    <li>Press</li>
                    <li>Partners</li>
                </ul>
                <ul>
                    <h2>Legal</h2>
                    <li>Claim</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                </ul>
            </div>
            <div className="buttom">
                <p>{CopyRight}{CurrentDate} G-Tech, Inc. All rights reserved</p>
                <div className='icons'>
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                    <FaGithub />
                    <FaYoutube />
                </div>
            </div>
        </div>
    )
}

export default Footer;