import React from "react";
import { Router as ReactRouter, Route, Switch, Redirect } from "react-router";
import { history } from "../redux/store";

import StepOne from "../containers/StepOne";

const routes = (
    <ReactRouter history={history}>
        <Switch>
            <Route exact path="/1" render={(props) => <StepOne />} />
        </Switch>
    </ReactRouter>
);

export default routes;
