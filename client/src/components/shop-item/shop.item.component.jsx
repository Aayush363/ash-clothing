import React from "react";
import './collection-item.styles.scss';
import CustomButton from "../custom-button/custom-button";
import { addItem } from "../../redux/cart/cart.action";
import { connect } from "react-redux";

const shopItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className='collection-item'>
            <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className='collection-footer'>
                <div className='name'>
                    {name}
                </div>
                <div className='price'>
                    {price}
                </div>
            </div>
            <CustomButton onClick={() => addItem(item)}>Add to Cart</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(shopItem);