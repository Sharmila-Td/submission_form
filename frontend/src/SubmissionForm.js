import React, { useState } from "react";
import axios from 'axios';

function SubmissionForm(){
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/register',{name,email,password})
        .then(result => console.log(result))
        .catch((err)=>{console.log(err)})
    }
    return(
        <div className="container"> 
            <div className="mini-container">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="Enter Name" autoComplete="off" name="name"
                        onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter email" autoComplete="off" name="email"
                        onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" placeholder="Enter password" 
                        onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}

export default SubmissionForm;