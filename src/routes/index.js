import React from "react";
import { Router as ReactRouter, Route, Switch, Redirect } from "react-router";
import { history } from "../redux/store";

import ViewForms from "../sampleForms";

const routes = (
    <ReactRouter history={history}>
        <Switch>
            <Route exact path="/" render={(props) => <ViewForms name="SAMPLE_FORM_ONE" />} />
        </Switch>
    </ReactRouter>
);

export default routes;
