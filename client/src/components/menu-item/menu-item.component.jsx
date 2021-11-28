import React from "react";
import './menu-item.styles.scss';
import { withRouter } from "react-router";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
    return (
        <div className={`${size} menu-item`}
            onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div style={{ backgroundImage: `url(${imageUrl})` }} className='menu-item'>
                <div className='content'>
                    <h1 className='title'>{title.toUpperCase()}</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);