import React from 'react';
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from './crown.svg';
import './header.styles.scss'

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <Link to='/'>
                    <Logo />
                </Link>
            </div>
            <div className='options'>
                <div className='option'>
                    <Link to='/shop'>
                        SHOP
                    </Link>
                </div>
                <div className='option'>
                    <Link to='/shop'>
                        CONTACT
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;