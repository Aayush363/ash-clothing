import React from "react";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component.jsx";
import CollectionsOverview from "../../components/collections-overview/collections.overview.component.jsx";
const Shop = ({ match }) => {
    // console.log(match.path);
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>);
};


export default Shop;