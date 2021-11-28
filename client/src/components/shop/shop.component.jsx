import React from 'react';
import ShopItem from '../shop-item/shop.item.component';
import './collection-preview.styles.scss'

const section = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title}</h1>
            <div className='preview'>
                {items.filter((item, idx) => idx < 4).map((item) => (
                    <ShopItem key={item.id} item={item} />
                )
                )}
            </div>
        </div>
    )
}

export default section;