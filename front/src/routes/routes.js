import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import Home from '../templates/home'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Home} exact/>
            </Switch>
        </BrowserRouter>
    )
}