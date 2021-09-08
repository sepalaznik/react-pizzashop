import React from "react";
import { Route, Switch } from "react-router-dom";
import loader from "./fonts/proxima-nova/fonts.jsx";
import "./app.css";
import { Header } from "./components/header/header.jsx";
import { Home } from "./pages/home.jsx";
import { Cart } from "./pages/cart.jsx";

export function App() {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Switch>
                    <Route path="/cart" component={Cart} exact />
                    <Route path="/" component={Home} exact />
                </Switch>
            </div>
        </div>
    );
};
