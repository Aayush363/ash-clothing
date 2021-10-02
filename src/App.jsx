import React from "react";
import { Switch, Route } from "react-router";

import Homepage from "./pages/homepage/homepage.component";
import ShopPage from './pages/shopPage/shopPage';
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/sign-in-sign-up-page/sign-in-sign-up.page";
import { auth } from "./components/firebase/firebase.utility";

const HatsPage = () => (
    <div>
        <h1>HATS PAGE </h1>
    </div>
);

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentUser: null
        };
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({ currentUser: user });
        })
    }
    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }
    render() {
        return <div>
            <Header currentUser={this.state.currentUser} />
            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route path='/shop/hats' component={HatsPage} />
                <Route exact path='/shop' component={ShopPage} />
                <Route exact path='/login' component={SignInSignUp} />
            </Switch>
        </div>
    }
}

export default App;