import React from "react";
import { useSelector,useDispatch } from "react-redux";
import './Profile.css';
import {clearUser,setCurrentUser} from '../redux/actions/userAction';
import {useNavigate} from 'react-router-dom';

const Profile=()=>{
    const currentUser=useSelector(state=>state.currentUser);
    let dispatch=useDispatch();
    let navigate=useNavigate();
    const logout=()=>{
        localStorage.removeItem('user');
        localStorage.removeItem('accessToken')

        dispatch(clearUser())
        navigate('/')
    }
    return(
        <div>
            {
                currentUser &&
                <div>
                    <h1>Name: {currentUser.name}</h1>
                    <h1>email: {currentUser.email}</h1>
                    <h1>password: {currentUser.password}</h1>
                </div>
            }
            <button onClick={logout}>Logout</button>
        </div>
    )
}
export default Profile;
