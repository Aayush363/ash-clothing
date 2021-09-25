import React from 'react';
import ShopItem from '../shop-item/shop.item.component';
import './collection-preview.styles.scss'

const section = ({ title, routeName, items }) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title}</h1>
            <div className='preview'>
                {items.filter((item) => item.id < 5).map(({ id, ...otherProps }) => (
                    <ShopItem key={id} {...otherProps} />
                )
                )}
            </div>
        </div>
    )
}

export default section;