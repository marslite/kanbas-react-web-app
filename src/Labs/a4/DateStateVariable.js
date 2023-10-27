import React, {useState} from "react";

function DateStateVariable(){
    const [stateDate, setStartDate] = useState(new Date());

    const dateObjectToHtmlDateString = (date) => {
        return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? 0 : ""} ${date.getMonth() + 1} - ${date.getDate() + 1 < 10 ? 0 : ""} ${date.getDate() + 1};`
    };

    return(
        <div>
            <h2>Date State Variables</h2>
            <h3>{JSON.stringify(stateDate)}</h3>
            <h3>{dateObjectToHtmlDateString(stateDate)}</h3>
            <input className="form-control" type="date" value={dateObjectToHtmlDateString(stateDate)} onChange={(e) => setStartDate(new Date(e.target.value))} />            
        </div>


    );
};

export default DateStateVariable;