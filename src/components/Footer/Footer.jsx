import logo from '../../assets/logo3.png';
import SocialSet from './socialSet';
import { useNavigate } from "react-router-dom";


const Footer = () => {
    const navigate = useNavigate();
    const ShowCatalogAll = () => {
        navigate("/catalog");
    }

    const backHome = () => {
        navigate(`/`);
    }
    return (
        <footer className="footer">
            <div className="foter__container _container">
                <a href="#" className="footer__logo"><img src={logo}/></a>
                <ul className="footer__list">
                    <li className="footer__item" onClick={backHome}>Home</li>
                    <li className="footer__item" onClick={ShowCatalogAll}>Catalog</li>
                    <li className="footer__item">Sign in</li>
                    <li className="footer__item">Contact</li>
                 </ul>
                 <SocialSet/>               
            </div>
        </footer>   
    )
    };

export default Footer;