import React from "react";
import { Switch, Route } from "react-router";

import Homepage from "./pages/homepage/homepage.component";
import ShopPage from './pages/shopPage/shopPage';
import Header from "./components/header/header.component";

const HatsPage = () => (
    <div>
        <h1>HATS PAGE </h1>
    </div>
);

class App extends React.Component {
    render() {
        return <div>
            <Header />
            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route path='/shop/hats' component={HatsPage} />
                <Route exact path='/shop' component={ShopPage} />
            </Switch>
        </div>
    }
}

export default App;