import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selectors";

import Header from "./components/header/header.component";
import SignInSignUp from "./pages/sign-in-sign-up-page/sign-in-sign-up.page";
import { checkUserSession } from "./redux/user/user.actions";
import { GlobalStyle } from "./global.styles";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

const Homepage = lazy(() => import("./pages/homepage/homepage.component"));
const ShopPage = lazy(() => import("./pages/shopPage/shopPage"));
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"));
const App = () => {
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkUserSession());
    }, [dispatch]);

    return (
        <div>
            <GlobalStyle />
            <Header />
            <Switch>
                <ErrorBoundary>
                    <Suspense fallback={<Spinner />}>
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
                    </Suspense>
                </ErrorBoundary>


            </Switch>
        </div>
    );

}

export default App;
