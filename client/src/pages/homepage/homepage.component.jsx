import React from "react"
import Directory from "../../components/directory/directory.component";
import { HomePageContainer } from "./homepage.styles";

class homepage extends React.Component {
    render() {
        return (
            <HomePageContainer>
                <Directory />
            </HomePageContainer>
        )
    }
}

export default homepage;