import React, { useEffect, useState } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [gptScreen, setGptScreen] = useState(false)
  const user = useSelector((store) => store.user)

  const handleSignOut = () => {

    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => { 
      // An error happened.
      navigate("/error");
    });  
  }

  const handleGptSearchBtn = () => {
    // toggle gpt view
    setGptScreen(!gptScreen)
    dispatch(toggleGptSearchView())

  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth  , (user) => {
        if (user) {
        
          const {uid,email,displayName} = user;
          //update my store
          dispatch(
            addUser(
              {uid:uid,email:email,displayName:displayName}
              )
            ); 
          navigate("/browse");
          
         
        } else {
          // User is signed out              
          dispatch(removeUser());
          navigate("/")
         
        }
        return unsubscribe();
      }); 
},[]);

  return (
    <div className='absolute bg-gradient-to-b from-black z-10 w-full flex flex-col md:flex-row justify-between'>
       <img className='w-52 px-3 py-3 mx-auto md:mx-0'
        src={LOGO} 
      alt="logo" />
      {user && (<div className='my-auto p-2 flex justify-between'>
        <button className='mx-auto p-2 mr-1 font-semibold text-white bg-red-600'
        onClick={handleGptSearchBtn}>{gptScreen?"AI Search":"Home"}</button>
        <img className='hidden md:block px-2 border-red-500' src="https://occ-0-1218-1217.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" alt="usericon" />
      <button onClick={handleSignOut} className='bg-green font-bold text-white'>(Sign Out)</button>
      </div>)}

    </div>
  )
}
export default Header