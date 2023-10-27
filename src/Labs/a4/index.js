import React from "react";
import Add from "./Add";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentSateComponent";
import ReduxExamples from "./ReduxExamples";

import Test from "../test/test";

const Assignment4 = () => {
    function sayHello(){
        alert('Hello');
    }

    return(
        <>
        <h1>Assignment 4</h1>
        <Add a={1} b={2}/>
        <ClickEvent/>
        <PassingFunctions theFunction={sayHello}/>
        <PassingDataOnEvent/>
        <EventObject/>
        <Counter/>
        <BooleanStateVariables/>
        <StringStateVariables/>
        <DateStateVariable/>
        <ObjectStateVariable/>
        <ArrayStateVariable/>
        <ParentStateComponent/>
        <ReduxExamples/>

        <Test/>
        <br/>
        </>
    );
};


export default Assignment4;