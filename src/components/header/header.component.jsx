import React from "react";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "./crown.svg";
import { auth } from "../firebase/firebase.utility";
import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink,
} from "./header.styles";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const Header = ({ currentUser, hidden }) => {
    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">SHOP</OptionLink>
                <OptionLink to="/shop">CONTACT</OptionLink>
                {currentUser ? (
                    <OptionLink as='div'
                        onClick={() => {
                            auth.signOut();
                        }}
                    >
                        SIGN OUT
                    </OptionLink>
                ) : (
                    <OptionLink to="/login">SIGN IN</OptionLink>
                )}
                <CartIcon />
            </OptionsContainer>
            {hidden ? null : <CartDropDown />}
        </HeaderContainer>
    );
};
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
});
export default connect(mapStateToProps)(Header);