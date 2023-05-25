import './Header.scss';
import logo from '../../assets/logo3.png';
import dataHeader from '../../data/dataHeader';
import NavMenu from './toPropsHeader/navMenu';
import ActionsUser from './toPropsHeader/actionsUser';
import SelectLanguage from './toPropsHeader/languages';
import SelectCurrency from './toPropsHeader/currency';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { NavLink } from "react-router-dom";


const Header = () => {
    const [isActive, setActive] = useState(false);
    const ToggleClass = () => {
        setActive(!isActive)
    };

    return ( 
        <header className="header">
            <div className="header__container _container">
                <div className="header__btnMenu" onClick={ToggleClass}><FontAwesomeIcon icon={faBars}/>
                    <span>  Menu</span>
                </div>
                <div className="header__menuSearchBox">                     
                    <button className="header__btnSearch">                        
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    </button>
                    <input className="header__search" type="text" placeholder="Search"/>
                </div>
                <NavLink to="/" className="header__logo"><img src={logo} alt='logo'/></NavLink>
                <div className="header__actions actions">
                    <ActionsUser actions={dataHeader.listActionsUser.items}/>                       
                    <div className="actions__select">
                        <SelectLanguage languages={dataHeader.listLanguages.items}/>
                        <SelectCurrency currency={dataHeader.listCurrency.items}/>       
                    </div>             
                </div>           
            </div>
            <NavMenu menuList={dataHeader.navMenu.items} isActive={isActive}/>
        </header>
    );
}

export default Header;