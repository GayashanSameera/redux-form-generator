import React from "react";
import { Router as ReactRouter, Route, Switch, Redirect } from "react-router";
import { history } from "../redux/store";

import StepOne from "../containers/StepOne";
import StepTwo from "../containers/StepTwo";
import StepThree from "../containers/StepThree";
import StepFour from "../containers/StepFour";
import StepFive from "../containers/StepFive";
import StepSix from "../containers/StepSix";
import StepSeven from "../containers/StepSeven";
import StepEight from "../containers/StepEight";
import StepNine from "../containers/StepNine";
import StepTen from "../containers/StepTen";


const routes = (
    <ReactRouter history={history}>
        <Switch>
            <Route exact path="/1" render={(props) => <StepOne />} />
            <Route exact path="/2" render={(props) => <StepTwo />} />
            <Route exact path="/3" render={(props) => <StepThree />} />
            <Route exact path="/4" render={(props) => <StepFour />} />
            <Route exact path="/5" render={(props) => <StepFive />} />
            <Route exact path="/6" render={(props) => <StepSix />} />
            <Route exact path="/7" render={(props) => <StepSeven />} />
            <Route exact path="/8" render={(props) => <StepEight />} />
            <Route exact path="/9" render={(props) => <StepNine />} />
            <Route exact path="/10" render={(props) => <StepTen />} />
        </Switch>
    </ReactRouter>
);

export default routes;
