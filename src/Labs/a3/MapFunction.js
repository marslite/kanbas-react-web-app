function MapFunction(){
    let numberArray1 = [1,2,3,4,5,6];
    const square = a => a * a;
    const squares = numberArray1.map(square);
    const cubes = numberArray1.map( i => i * i * i);


    return(
        <>
        <h3>Map</h3>
        <p>squares = {squares}</p>
        <p>cubes = {cubes}</p>
        </>
    );
}

export default MapFunction;