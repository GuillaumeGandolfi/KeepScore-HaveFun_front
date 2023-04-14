
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
                            <a href="#accueil" className="nav__link"><div className="nav__icon"><HomeIcon /></div>Accueil</a>
                        </li>

                        <li className="nav__item">
                            <a href="#profil" className="nav__link"><div className="nav__icon"><NewspaperIcon /></div>Quêtes</a>
                        </li>

                        <li className="nav__item">
                            <a href="#magasin" className="nav__link"><div className="nav__icon"><MonetizationOnIcon /></div>Magasin</a>
                        </li>

                        <li className="nav__item">
                            <a href="#guilde" className="nav__link"><div className="nav__icon"><GroupWorkIcon /></div>Guilde</a>
                        </li>

                        <li className="nav__item">
                            <a href="#amis" className="nav__link"><div className="nav__icon"><Diversity2Icon /></div>Amis</a>
                        </li>

                        <li className="nav__item">
                            <a href="#profil" className="nav__link"><div className="nav__icon"><PersonOutlineIcon /></div>Profil</a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" className="nav__link"><div className="nav__icon"><EmailIcon /></div>Contact</a>
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