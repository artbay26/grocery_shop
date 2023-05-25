import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

let dataFooter = {
    listSocial: {
        items: [
            {id: 1, faIcon: <FontAwesomeIcon icon={faFacebookF}/>},
            {id: 2, faIcon: <FontAwesomeIcon icon={faTwitter}/>},
            {id: 3, faIcon: <FontAwesomeIcon icon={faYoutube}/>},
            {id: 4, faIcon: <FontAwesomeIcon icon={faInstagram}/>},
            {id: 5, faIcon: <FontAwesomeIcon icon={faLinkedin}/>}                          
        ]
    },
    
}

export default dataFooter;