
import { NavLink } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import './header.css'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import EmailIcon from '@mui/icons-material/Email';
import SavingsIcon from '@mui/icons-material/Savings';
import { toggleHeader } from "../../store/actions/headerAction";


const Header = () => {
    const { isHidden } = useSelector(state => state)
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(toggleHeader())
    }

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo logo__img"></a>

                <div className={!isHidden ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <NavLink to="/homepage" className={({ isActive }) => isActive ? "nav__link nav__link-active" : "nav__link"}><div className="nav__icon"><HomeIcon /></div>Accueil</NavLink>
                        </li>

                        <li className="nav__item">
                            <NavLink to="/budget" className={({ isActive }) => isActive ? "nav__link nav__link-active" : "nav__link"}><div className="nav__icon"><SavingsIcon /></div>Budget</NavLink>
                        </li>

                        <li className="nav__item">
                            <NavLink to="#profil" className={({ isActive }) => isActive ? "nav__link nav__link-active" : "nav__link"}><div className="nav__icon"><NewspaperIcon /></div>Quêtes</NavLink>
                        </li>

                        <li className="nav__item">
                            <NavLink to="#magasin" className={({ isActive }) => isActive ? "nav__link nav__link-active" : "nav__link"}><div className="nav__icon"><MonetizationOnIcon /></div>Magasin</NavLink>
                        </li>

                        <li className="nav__item">
                            <NavLink to="#guilde" className={({ isActive }) => isActive ? "nav__link nav__link-active" : "nav__link"}><div className="nav__icon"><GroupWorkIcon /></div>Guilde</NavLink>
                        </li>

                        <li className="nav__item">
                            <NavLink to="#amis" className={({ isActive }) => isActive ? "nav__link nav__link-active" : "nav__link"}><div className="nav__icon"><Diversity2Icon /></div>Amis</NavLink>
                        </li>

                        <li className="nav__item">
                            <NavLink to="/profil/1" className={({ isActive }) => isActive ? "nav__link nav__link-active" : "nav__link"}><div className="nav__icon"><PersonOutlineIcon /></div>Profil</NavLink>
                        </li>

                        <li className="nav__item">
                            <NavLink to="#contact" className={({ isActive }) => isActive ? "nav__link nav__link-active" : "nav__link"}><div className="nav__icon"><EmailIcon /></div>Contact</NavLink>
                        </li>
                    </ul>

                    <i className="nav__close" onClick={handleClick}>
                        <CloseIcon />
                    </i>
                </div>

                <div className="nav__toggle" onClick={handleClick}>
                    <MenuRoundedIcon />
                </div>
            </nav>
        </header>
    )
}

export default Header