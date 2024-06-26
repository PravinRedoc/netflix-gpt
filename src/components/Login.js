import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidation } from '../utils/validate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BG_IMG_URL } from '../utils/constants';


const Login = () => {
 
  const [isSignIn, setIsSignIn]=  useState(true);
  const [errorMessage, setErrorMessage] = useState("")
  const navigate = useNavigate();

  const email =  useRef(null)
  const password = useRef(null)
  const name = useRef(null)

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  }
  const handleButtonClick = () => {
    const message = checkValidation(email.current.value,password.current.value)
    setErrorMessage(message)
    if(message) return;

    //Sign Up
    if(!isSignIn){
      createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
      .then((userCredential) => {// Signed up 
            const user = userCredential.user;
            
            updateProfile(auth.currentUser, {
              displayName: name.current.value
            }).then(() => {
              navigate("/browse");
              
            }).catch((error) => {
              // An error occurred
              // ...
             
            });
           
    // ...
  }) 
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorMessage)
    // ..
  });

    }
    //Sign In
    else {
      signInWithEmailAndPassword(auth,  email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        
        navigate("/browse");
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
       
      });

    }


  }
  return (
    <div>
      <Header />
     <img className='absolute' src={BG_IMG_URL} 
     alt="landing-page" />

     <form onSubmit={(e) =>e.preventDefault()} className='w-full md:w-3/12 absolute p-12 text-white bg-black my-36 mx-auto right-0 left-0 bg-opacity-80 rounded-lg'> 
     <h1 className='font-bold text-2xl py-4'>{isSignIn ? "Sign In" : "Sign Up"}</h1>

      {!isSignIn && <input ref={name}  type="text" placeholder='Full Name' className='p-4 my-4 w-full rounded-lg bg-gray-700' />}
      <input ref={email} type="text" placeholder='Email Address' className='p-4 my-4 w-full rounded-lg bg-gray-700' />
      <input ref={password} type="password" placeholder='Password' className='p-4 my-4 w-full rounded-lg  bg-gray-700' />
      <p className='text-red-600'>{errorMessage}</p>
      <button  onClick={handleButtonClick} className='p-4 my-6 font-bold bg-red-500 w-full'>{isSignIn ? "Sign In" : "Sign Up"}</button>
      <p className='font-bold py-4 cursor-pointer' onClick={toggleSignInForm}>
        {isSignIn ? "New to Netflix?, Sign up now!" : "Already registered?, Sign In now!"}
       </p>
     </form>
     

    </div>
    
  )
}

export default Login;