import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import './Signup.css'
import {v4 as uuidv4} from 'uuid';
import { setCurrentUser } from "../redux/actions/userAction";
const Signup=()=>{

    let[name,setName]=useState('');
    let[email,setEmail]=useState('');
    let[password,setPassword]=useState('');
    let[confirmPassword,setConfirmPassword]=useState('');
    let[error,setError]=useState('');
    let[success,setSucess]=useState('');
    
    let dispatch=useDispatch();
    let navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!name||!email||!password||!confirmPassword){
            return setError("All fields are mandatory")
        } 
        if(password!==confirmPassword){
            return setError("Passwords do not match");
        }
        setSucess("Signup successfully")

        const user={
            name,email,password
        }
        const accessToken=uuidv4();

        localStorage.setItem("user",JSON.stringify(user))
        localStorage.setItem('accessToken',accessToken)

        dispatch(setCurrentUser({
            user,accessToken
        }))

        navigate('/profile')
    }
    return(
        <div>
           <form onSubmit={handleSubmit}>
            <input type="text" placeholder="name"
            value={name} onChange={e=>setName(e.target.value)}/>

            <input type="text"  placeholder='email' 
            value={email} onChange={e => setEmail(e.target.value)} />

            <input type="password"  placeholder='password' 
            onChange={e => setPassword(e.target.value)} 
            value={password} />

            <input type="password"  placeholder='confirm password'
            onChange={e => setConfirmPassword(e.target.value)}
            value={confirmPassword} />
            <button type='submit'>SignUp</button>
           </form>
        </div>
    )
}
export default Signup;
