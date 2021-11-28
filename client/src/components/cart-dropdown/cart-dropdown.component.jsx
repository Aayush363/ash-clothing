import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item.component";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { useHistory } from "react-router-dom";

const CartDropDown = () => {
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ?
                        cartItems.map((cartItem) => (
                            <CartItem key={cartItem.id} item={cartItem} />
                        )) : (<span className="empty-message">Your cart is empty</span>)

                }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    );
};

export default CartDropDown;
