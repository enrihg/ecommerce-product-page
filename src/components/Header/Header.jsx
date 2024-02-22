import iconMenu from '../../assets/images/icon-menu.svg';
import logo from '../../assets/images/logo.svg';
import iconCart from '../../assets/images/icon-cart.svg';
import avatar from '../../assets/images/image-avatar.png';
import './Header.css';

function Header() {
    return (
        <header className='header'>
            <div>
                <button><img src={iconMenu} alt="menu icon"/></button>
                <img src={logo} alt="logo" />
                <nav className='navbar'>
                    <ul>
                        <li><a href="#">Collections</a></li>
                        <li><a href="#">Men</a></li>
                        <li><a href="#">Women</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div>
                <button><img src={iconCart} alt="shopping cart" /></button>
                <button><img src={avatar} alt="my profile" /></button>
            </div>
        </header>
    )
}

export default Header;