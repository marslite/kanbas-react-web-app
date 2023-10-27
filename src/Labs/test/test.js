import React from "react";

function Test(){

    const y = [123,234,345,456]
    const z = [y[1], ...y];
    const q = {a:123, b:234 };

    const w = {...q, b: 345,  c:456 };


    console.log(w);
    return(
        <div>

            <h3>Prepping for the midterm</h3>


        </div>
    );

}

export default Test;