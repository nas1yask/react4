import './Header.css'
import { Routes, Route, NavLink } from 'react-router-dom'
import { useTranslation } from "react-i18next";
function Header() {
    const { t, i18n } = useTranslation();
    const changeLang = (lang) => {
        i18n.changeLanguage(lang);
    };
    return(
        <header>
            <div className="logo">Logo</div>
            <menu>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/second'>Second</NavLink>
            </menu>
            <div className="btns">
                <button onClick={() => changeLang("ru")}>RU</button>
                <button onClick={() => changeLang("en")}>EN</button>
            </div>
            {/* <select onChange={()=> ? : }> */}
                <option value="ru">RU</option>
                <option value="ru">KZ</option>
                <option value="ru">EN</option>
            </select>
        </header>
    )
}

export default Header;