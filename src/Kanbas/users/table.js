import React, {useState, useEffect} from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import * as client from "./client";

function UserTable(){
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({username: "", password: "", role: "USER", email:""});
    const createUser = async () => {
        try {
            const newUser = await client.createUser(user);
            setUsers([newUser,...users]);
            
        } catch (error) {
            console.log(error)
        }
    }



    const fetchUsers = async () => {
        const users = await client.findAllUsers();
        setUsers(users);
    };

    useEffect( ()=> {
        fetchUsers();
    }, [] )


    return(
        <div>
            <h1>User List</h1>
            <table className="table">
                <thead>

                    <tr>
                        <th>Username</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>email</th>
                        <th>Password</th>
                    </tr>

                    <tr>
                        <td>
                            <input id="password" value={user.username} onChange={(e) => setUser({...user, username: e.target.value})}  />
                        </td>
                        <td>
                            <input id="firstName" value={user.firstName} onChange={(e) => setUser({...user, firstName: e.target.value})} />
                        </td>
                        <td>
                            <input value={user.lastName} onChange={(e) => setUser({...user, lastName: e.target.value})} />
                        </td>
                        <td>
                            <input value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} />
                        </td>
                        <td>
                            <input value={user.password} onChange={(e)=> setUser({...user, password: e.target.value})} />
                        </td>
                        <td>
                            <select value={user.role} onChange={(e) => setUser({...user, role: e.target.value})} >
                            <option value="USER">User</option>    
                            <option value="USER">Admin</option>    
                            <option value="USER">Faculty</option>    
                            <option value="USER">Student</option>    
                            </select>
                        </td>

                        <td>
                            <BsPlusCircleFill onClick={createUser} />
                        </td>
                    </tr>



                </thead>
                <tbody>
                    {users.map( (user) => (
                        <tr key={user._id}>
                            <td>{user.username}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>

                        </tr>))}
                </tbody>

            </table>
        </div>
    );

}

export default UserTable;
