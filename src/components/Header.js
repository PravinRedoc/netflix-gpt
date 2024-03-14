import React from 'react'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
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
  return (
    <div className='absolute bg-gradient-to-b from-black z-10 w-full flex justify-between'>
       <img className='w-52 px-3 py-3'
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
      alt="logo" />
      {user && (<div className='my-auto p-2 flex'>
        <img className='px-2 border-red-500' src="https://occ-0-1218-1217.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" alt="usericon" />
      <button onClick={handleSignOut} className='bg-green font-bold'>(Sign Out)</button>
      </div>)}

    </div>
  )
}
export default Header