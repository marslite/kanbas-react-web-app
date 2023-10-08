import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingDataToFromArrays from "./AddingAndRemovingDataToFromArrays.js";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";

function WorkingWithArrays(){

    var functionScoped =2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1,2,3,4,5];
    let stringArray1 = ['string1', 'string2'];

    let variableArray1 = [
        functionScoped,   blockScoped,
        constant1,        numberArray1,   stringArray1
     ];
     



    return(
        <>
        <h1>Working with Arrays</h1>
        <p>numberArray1 = {numberArray1}</p> <br/>
        <p>stringArray1 = {stringArray1}</p> <br/>
        <p>variableArray1 = {variableArray1}</p>
        <ArrayIndexAndLength/>
        <AddingAndRemovingDataToFromArrays/>
        <ForLoops/>
        <MapFunction/>
        </>
    );
}

export default WorkingWithArrays;