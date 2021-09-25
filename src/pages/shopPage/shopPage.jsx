import React from "react";
import Data from './shopdata.js'
import Section from "../../components/shop/shop.component.jsx";

class Shop extends React.Component {
    constructor() {
        super();
        this.state = {
            items: Data
        }
    }
    render() {
        return (
            this.state.items.map(({ id, ...sectionProps }) => (
                <Section key={id} {...sectionProps} />)
            )
        )
    }
}

export default Shop;