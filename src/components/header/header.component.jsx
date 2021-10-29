import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from './crown.svg';
import { auth } from '../firebase/firebase.utility';
import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const Header = ({ currentUser, hidden }) => {
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
                <CartIcon />
            </div>
            {
                hidden ?
                    null : <CartDropDown />

            }
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});
export default connect(mapStateToProps)(Header);