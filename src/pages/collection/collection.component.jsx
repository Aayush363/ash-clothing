import React from 'react';
import "./collection.styles.scss";
import { selectCollection } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';
import ShopItemComponent from '../../components/shop-item/shop.item.component';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <div className='collection-page'>
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item => (
                        <ShopItemComponent key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
