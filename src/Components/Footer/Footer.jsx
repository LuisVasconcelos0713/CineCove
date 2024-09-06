import './Footer.css';
import { FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="Footer">
            <h2>© {new Date().getFullYear()} gustavslow</h2>
            <div className="icons">
                <a href="https://instagram.com/gustavslow" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href="https://twitter.com/gustavslow" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                </a>
                <a href="https://github.com/LuisVasconcelos0713" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
            </div>
        </div>
    );
}

export default Footer;