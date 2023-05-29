import logo from './logo.svg';
import './App.css';
import React, { useEffect} from 'react';
import Navbar from './Components/Navbar';
import {Routes,Route,useNavigate} from 'react-router-dom';
import Signup from './Pages/Signup';
import Profile from './Pages/Profile';
import {useSelector,useDispatch} from 'react-redux'
import { setCurrentUser } from './redux/actions/userAction';


function App() {
  const currentUser=useSelector(state=>state.currentUser)
  const accessToken=useSelector(state=>state.accessToken)

  const navigate=useNavigate()
  const dispatch=useDispatch()

  useEffect(()=>{
        const user=localStorage.getItem('user')
        const accessToken=localStorage.getItem('accessToken')
        if(user && accessToken){
            const currentUser=JSON.parse(user);
            dispatch(setCurrentUser(currentUser,accessToken))
        }
  },[dispatch])

  // useEffect(()=>{
  //   if(!accessToken&& window.location.pathname=='/profile'){
  //          navigate('/')
  //   }
  //   if(accessToken&&window.location.pathname=='/signup'){
  //     navigate('/profile');
  //   }
  // },[accessToken,navigate,currentUser])
  return (
   <div>
       <Navbar/>
       <Routes>
            <Route path='/' element={<Signup/>}/>
            <Route path='/profile' element={<Profile/>}/>
       </Routes>
   </div>
  );
}

export default App;
