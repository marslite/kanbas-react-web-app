import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";

function Signup(){
    const [error, setError] = useState("");
    const [credentials, setCredentials] = useState({
        username: "", password: ""});
    const navigate = useNavigate();
    const signup = async () => {
        try {
            await client.signup(credentials)
            navigate("/kanbas/account")
        } catch (error) {
            setError(error.response.data.message)
        }
    };

    return(
        <div className="w-50 ml-10">
            <h1>Signup</h1>
            {error && <div>{error}</div>}
            <label htmlFor="username"><b>Username</b></label>
            <input id="username" value={credentials.username} onChange={ (e) => setCredentials({...credentials, username: e.target.value})} />
            <label htmlFor="password"><b>Password</b></label>
            <input id="password" value={credentials.password} onChange={ (e) => setCredentials({...credentials, password: e.target.value}) } />
            <button className="btn btn-danger" onClick={signup}>Signup</button>
        </div>
    )


}

export default Signup;