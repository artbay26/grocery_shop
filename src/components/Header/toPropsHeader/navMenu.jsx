//import {NavLink} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavMenu = (props) => {
    const navigate = useNavigate();
    const ShowCatalogAll = () => {
        navigate("/catalog");
    }
    
    return(
            <nav className={"header__menu menu " + (props.isActive ? "active" : "hidden")}>
                <div className="menu__body"></div>
                <ul className="menu__list">
                    {
                        props.menuList.map(menuItem =>
                            <li className="menu__item" key={menuItem.id}>
                                <div className="menu__link" onClick={ShowCatalogAll}>{menuItem.title}</div>
                            </li>
                        )
                    }
                </ul>
            </nav>
    )
}

export default NavMenu;

