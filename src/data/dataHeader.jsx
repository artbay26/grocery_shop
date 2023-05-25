
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


let dataHeader = {
    navMenu:{
        items:[
            {id: 1, title: 'Нome', route: '/'},
            {id: 2, title: 'Sign In', route: '/signin'},
            {id: 3, title: 'Catalog', route: '/catalog'},
            {id: 4, title: 'Your account', route: '/account'},
            {id: 5, title: 'Contact', route: '/contact'},
        ]
    },
    listActionsUser: {
        items: [
            {id: 1, faIcon: <FontAwesomeIcon icon={faUser}/>},
            {id: 2, faIcon: <FontAwesomeIcon icon={faHeart}/>},
            {id: 3, faIcon: <FontAwesomeIcon icon={faCartShopping}/>},            
        ]
    },
    listLanguages: {
        items: [
            {id: 1, value: 'ENG',  title: 'ENG'},
            {id: 2, value: 'DE',  title: 'DE'},
            {id: 3, value: 'UA', title: 'UA'},            
        ]
    },
    listCurrency: {
        items: [
            {id: 1, value: 'USD', title: 'USD'},
            {id: 2, value: 'EUR', title: 'EUR'},
            {id: 3, value: 'UAH', title: 'UAH'},            
        ]
    }
}

export default dataHeader;