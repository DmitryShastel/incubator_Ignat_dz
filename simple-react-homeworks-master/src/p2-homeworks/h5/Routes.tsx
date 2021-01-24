import React from "react";
import {Redirect, Route, Switch} from "react-router-dom"
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import HW1 from "../h1/HW1";
import HW2 from "../h2/HW2";
import HW3 from "../h3/HW3";
import HW4 from "../h4/HW4";
import {Student1} from "./pages/Student1";
import Student2 from "./pages/Student2";

export const PATH = {
    PRE_JUNIOR: "/pre-junior",
    STUDENT1: "/student1",
    STUDENT2: "/student2",
    STUDENT3: "/student3",
    HW1: "/hw1",
    HW2: "/hw2",
    HW3: "/hw3",
    HW4: "/hw4",
}

function Routes() {
    return (
        <div>
            <Switch>
                <Route path = {"/"} exact render = {() => <Redirect to = {'/PRE_JUNIOR'}/>}/>
                <Route path = {"/STUDENT1"} exact render = {() => <Student1/>}/>
                <Route path = {"/STUDENT2"} exact render = {() => <Student2/>}/>
                <Route path = {"/hw1"} exact render = {() => <HW1/>}/>
                <Route path = {"/hw2"} exact render = {() => <HW2/>}/>
                <Route path = {"/hw3"} exact render = {() => <HW3/>}/>
                <Route path = {"/hw4"} exact render = {() => <HW4/>}/>
                <Route path = {'/PRE_JUNIOR'} exact render = {() => <PreJunior/>}/>
                <Route render = {() => <Error404/>}/>
            </Switch>
        </div>
    );
}

export default Routes;
