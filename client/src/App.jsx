import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selectors";

import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shopPage/shopPage";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/sign-in-sign-up-page/sign-in-sign-up.page";
import CheckoutPage from "./pages/checkout/checkout.component";
import { checkUserSession } from "./redux/user/user.actions";

const App = () => {
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkUserSession());
    }, [dispatch]);

    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/shop" component={ShopPage} />
                <Route exact path="/checkout" component={CheckoutPage} />
                <Route
                    exact
                    path="/login"
                    render={() =>
                        currentUser ? <Redirect to="/" /> : <SignInSignUp />
                    }
                />
            </Switch>
        </div>
    );

}

export default App;
