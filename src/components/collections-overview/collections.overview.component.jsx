import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import "./collections-overview.styles.scss";
import Section from '../shop/shop.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

const CollectionsOverview = ({ collections }) => {
    return (
        <div className='collections-overview'>
            {
                collections.map(({ id, ...sectionProps }) => (
                    <Section key={id} {...sectionProps} />))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);
