function BooleanVairables(){

    let numberVariable = 123;
    let floatingPointNumber = 234.235;
    let true1 = true;
    let false1 = false;
    let false2 = true1 && false1;
    let true2 = true1 || false1;
    let true3 = !false2;
    let true4 = numberVariable === 123;
    // let true

    return(
        <div>
            <h3>Boolean Variables</h3>
        </div>
    )
}

export default BooleanVairables;