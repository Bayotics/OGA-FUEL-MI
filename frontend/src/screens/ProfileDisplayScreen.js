import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Store } from '../Store';
import user from '../assets/Fuel-me/pngs/user.png'


const ProfileDisplayScreen = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  
  return(
    <div className='profile-card-display pt-16 pb-40'>
        <Helmet>
          <title>Profile</title>
        </Helmet>
        <h1 className='text-center text-3xl font-semibold'>User Profile</h1>
        <div className="card mt-4 w-[50%] m-auto border border-black py-10">
          <div className='profile-pic'>
            <img src={user} alt='profile pix' className='m-auto'/>
          </div>
          <div className="card-body mt-4">
            <h5 className="card-title text-center">
              Username: <span className='text-black font-medium'>@{userInfo.name}</span> 
            </h5>
            <p className="card-text mt-4 text-center">
              Email: <span className='text-black font-medium'>{userInfo.email}</span>
            </p>
          </div>
        </div>
    </div>
  )

}

export default ProfileDisplayScreen 