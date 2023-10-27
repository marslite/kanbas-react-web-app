import React, {useState} from "react";

function ObjectStateVariable(){
    const [person, setPerson] = useState({name:"Peter", age: 24, credit: 120});
    return(
        <div>
            <h2>Object State Variable</h2>
            <pre>{JSON.stringify(person,null,2)}</pre>
            <input value={person.name} onChange={(e) => setPerson({...person, name: e.target.value})} />
            <input value={person.age} onChange={(e) => setPerson({...person, age:  parseInt(e.target.value)})} />
            <input value={person.credit} onChange={(e) => setPerson({...person, credit: parseInt(e.target.value) })} />
        </div>
    );
}


export default ObjectStateVariable;