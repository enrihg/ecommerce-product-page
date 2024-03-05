import iconMenu from '../../assets/images/icon-menu.svg';
import iconClose from '../../assets/images/icon-close.svg'
import logo from '../../assets/images/logo.svg';
import iconCart from '../../assets/images/icon-cart.svg';
import avatar from '../../assets/images/image-avatar.png';
import './Header.css';

function Header() {

    const openDrawer = () => {
        const drawerNavbar = document.querySelector('.drawer-navbar');
        drawerNavbar.classList.add('openDrawer');
    }

    const closeDrawer = () => {
        const drawerNavbar = document.querySelector('.drawer-navbar');
        drawerNavbar.classList.remove('openDrawer');
    }

    const toggleCart = () => {
        const cart = document.querySelector('.cart');
        cart.style.display = cart.style.display === 'none' ? 'grid' : 'none';
    }

    return (
        <header className='header'>
            <div>
                <button onClick={openDrawer} className='menu-button'><img src={iconMenu} alt="menu icon" /></button>
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
                <button className='shopping-cart' onClick={toggleCart}><img src={iconCart} alt="shopping cart" /></button>
                <button className='profile-avatar'><img src={avatar} alt="my profile" /></button>
            </div>
            <nav className='drawer-navbar'>
                <button onClick={closeDrawer} className='close-button'><img src={iconClose} alt="close" /></button>
                <ul>
                    <li><a href="#">Collections</a></li>
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Women</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;