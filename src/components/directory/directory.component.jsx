import React from "react";
import './directory.style.scss';
import data from './directory.data';
import MenuItem from "../menu-item/menu-item.component";

class directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: data
        }
    }
    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({ id, ...otherSectionProps }) => (<MenuItem key={id} {...otherSectionProps} />))}
            </div>
        )
    }
}

export default directory;