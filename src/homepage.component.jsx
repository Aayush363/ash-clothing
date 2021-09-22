import React from "react"
import './homepage.styles.scss'

const homepage = () => {
    return (
        <div className='homepage'>
            <div className='directory-menu'>
                <div className='menu-item'>
                    <div class='content'>
                        <h1 className='title'>Hats</h1>
                        <span className='subtitle'>Shop Now</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div class='content'>
                        <h1 className='title'>Jackets</h1>
                        <span className='subtitle'>Shop Now</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div class='content'>
                        <h1 className='title'>T-Shirts</h1>
                        <span className='subtitle'>Shop Now</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div class='content'>
                        <h1 className='title'>Pants</h1>
                        <span className='subtitle'>Shop Now</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div class='content'>
                        <h1 className='title'>Skirts</h1>
                        <span className='subtitle'>Shop Now</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default homepage;