import React from "react"
import './homepage.styles.scss'
import Directory from "../../components/directory/directory.component";

class homepage extends React.Component {
    render() {
        return (
            <div className='homepage'>
                <Directory />
            </div>
        )
    }
}

export default homepage;