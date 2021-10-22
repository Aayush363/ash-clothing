import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from './crown.svg';
import { auth } from '../firebase/firebase.utility';
import './header.styles.scss';

const Header = ({ currentUser }) => {
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
                {
                    currentUser ?
                        <div className='option' onClick={() => { auth.signOut() }}>
                            SIGN OUT
                        </div>
                        :
                        <Link className='option' to='/login'>
                            SIGN IN
                        </Link>
                }
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});
export default connect(mapStateToProps)(Header);