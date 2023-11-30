import * as client from "./client"
import "../../Kanbas/users/account.css"

import UserTable from "./table"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useNavigate, useParams } from "react-router-dom"

function Account(){
    const {id} = useParams();
    const [account, setAccount] = useState(null);
    const findUserById = async (id) => {
        const user = await client.findUserById(id);
        setAccount(user)
    }
    const navigate = useNavigate();
    const fetchAccount = async() => {
        try {
            const account = await client.account();
            setAccount(account);
            
        } catch (error) {
            console.error("Error fetching the account: ", error)        
        }

    };

    const signout = async () => {
        console.log(`Succesfully Logged out ${account}` )
        await client.signout();
        navigate("/kanbas/signin")
    }

    const save = async () => {
        await client.updateUser(account);
    }

    useEffect(() => {
        if(id){
            findUserById(id)
        }else{
            fetchAccount();
        }


    }, [] )

    return(
        <div className="w-50">
            <h1>Account</h1>
            {account &&(
                <div className="acc-info">


                 <label htmlFor="password">Password</label>     
                <input className="form-control" id="password" value={account.password} onChange={(e) => setAccount({...account, password: e.target.value})}  /> 
                 <label htmlFor="firstname">Firstname</label>     
                <input className="form-control" id="firstname" value={account.firstName} onChange={(e) => setAccount({...account, firstName: e.target.value})}  />    
                <label htmlFor="lastname">Lastname</label>     
                <input className="form-control" value={account.lastName} id="lastname" onChange={(e) => setAccount({...account, lastName: e.target.value})}  />
                <label htmlFor="dob">DOB</label>     
                <input className="form-control" id="dob" value={account.dob}  onChange={(e) => setAccount({...account, dob: e.target.value})}  />
                <label htmlFor="email">Email</label>     
                <input className="form-control" id="email" value={account.email} onChange={(e) => setAccount({...account, email: e.target.value})} />

                <label htmlFor="role">Role</label>
                    <select id="role" className="form-select" onChange={(e) => setAccount({...account, role: e.target.value})}>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>

                    <button className="btn btn-primary mt-1 w-100 " onClick={save}>Save</button>
                    {/* <button className="btn btn-warning mt-1 " onClick={save}>Users</button> */}
                    <Link  to="/kanbas/admin/users" className="btn btn-warning mt-1 w-100"  >Users</Link>
                    <button className="btn btn-danger mt-1 w-100" onClick={signout}>Logout</button>

                 </div>

                ) }
                {/* {account && (
                    <UserTable/>
                )} */}


   
        </div>
    );
}

export default Account;

