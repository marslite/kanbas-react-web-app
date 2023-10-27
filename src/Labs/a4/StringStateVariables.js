import { useState } from "react";

function StringStateVariables(){
    const [firstName, setFirstName] = useState("John");
    return(
        <div>
            <h2>String State Variables</h2>
            <p>{firstName}</p>
            {/* //Taking from the e.target.value the new value and put into setFirsName that will change the firstName  */}
            <input className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
    )
}

export default StringStateVariables;