import React from "react";

function Test(){

    const y = [123,234,345,456]
    const z = [y[1], ...y];
    const q = {a:123, b:234 };

    const w = {...q, b: 345,  c:456 };


    // const ewq = [2,3]
    // const qwe = [1, ...ewq, 4,5]
    // const wer = qwe.filter(asd => asd > 2);

    // const qwe = 234;
    // const asd = 321
    // const zxc = [321,qwe, 432, asd,543];
    // const [ewq,rew] =  zxc
    // console.log(ewq)
    // console.log(rew)

    // const qwe = {sdf : 123, asd: 432}
    // const cxz = {asd: 345, ...qwe, sdf: 456, zxc: 567}
    // const {sdf, asd} = cxz;

    // const ewq = [42,33,24]
    // const wer = [5,...ewq,15]
    // const qwe = wer.find(bnm => bnm === 42);

    const qwe = [5, 4,3,2,1];
    const wer = qwe.map(asd => asd * asd);



    







    console.log(w);
    return(
        <div>

            <h3>Prepping for the midterm</h3>
            <h3>{wer}</h3>
            {/* <h3>{sdf}</h3> */}
            {/* <h3>{qwe}</h3> */}
            {/* <h1 className="rew" id="tre">I'm white on blue</h1> */}

        </div>
    );

}

export default Test;