import React, { useContext, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Store } from '../Store';
import { toast } from 'react-toastify';
import { getError } from '../utils';
import axios from 'axios';

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_REQUEST':
      return { ...state, loadingUpdate: true };
    case 'UPDATE_SUCCESS':
      return { ...state, loadingUpdate: false };
    case 'UPDATE_FAIL':
      return { ...state, loadingUpdate: false };

    default:
      return state;
  }
};

export default function ProfileScreen() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const [name, setName] = useState(userInfo.name);
  const [email, setEmail] = useState(userInfo.email);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  console.log(userInfo)
  const [{ loadingUpdate }, dispatch] = useReducer(reducer, {
    loadingUpdate: false,
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    if(password === confirmPassword){
    try {
      const { data } = await axios.put(
        '/api/users/profile',
        {
          name,
          email,
          password,
        },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: 'UPDATE_SUCCESS',
      });
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      toast.success('User updated successfully');
      navigate('/');
    } catch (err) {
      dispatch({
        type: 'FETCH_FAIL',
      });
      toast.error(getError(err));
    }
    }
    else{
        toast.error('Passwords do not match')
    }
  };

  return (
    <div className="container px-40 pt-20 mb-48 border">
      <Helmet>
        <title>Edit Profile</title>
      </Helmet>
      <h1 className="text-center text-5xl font-semibold">Edit Your Profile</h1>
      <form onSubmit={submitHandler} className='mt-10'>
        <div className="mb-3">
          <h1 className='font-semibold'>Name</h1>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className='w-full border pl-2 py-2'
          />
        </div>
        <div className="mb-3">
          <h1 className='font-semibold'>Email</h1>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type='email'
            className='w-full border pl-2 py-2'
          />
        </div>
        <div className="mb-3">
          <h1 className='font-semibold'>Password</h1>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className='w-full border pl-2 py-2'
            type='password'
          />
        </div>
        <div className="mb-3">
          <h1 className='font-semibold'>Confirm Password</h1>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            className='w-full border pl-2 py-2'
            type='password'
          />
        </div>
        <div className="mb-3">
          <button className="px-4 text-center py-3 bg-[#1a2eeb] hover:bg-black text-white mt-4"
           type="submit">
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
}