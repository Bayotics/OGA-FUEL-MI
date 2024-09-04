import Axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useContext, useEffect, useState } from 'react';
import { Store } from '../Store';
import { toast } from 'react-toastify';
import { getError } from '../utils';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';


export default function SignupScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passVisiblity, setPassVisibility] = useState('password');
  const [confirmPassVisibiliy, setConfirmPassVisibility] = useState('password');


  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const submitHandler = async (e) => {
    
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    try {
      const { data } = await Axios.post('/api/users/signup', {
        name,
        email,
        password,
      });

      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate(redirect || '/');
    } catch (err) {
      const errorMsg = getError(err).toString();
      if(errorMsg.startsWith('E11000')){
        toast.error("Email already exists. Pls try another email! ")
      }
      else{
        toast.error(getError(err));
      }
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const togglePasswordVisibility = () => {
    if(passVisiblity === 'password'){
      setPassVisibility('text')
    }
    else{
      setPassVisibility('password')
    }
  }
  const toggleConfirmPasswordVisibility = () => {
    if(confirmPassVisibiliy === 'password'){
      setConfirmPassVisibility('text');
    }
    else{
      setConfirmPassVisibility('password')
    }
  }

  return (
    <div className="px-40 pt-20 mb-48">
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <h1 className="text-center text-3xl font-semibold">Sign up</h1>
      <form onSubmit={submitHandler} className='mt-10'>
        <div className="mb-3">
          <h1 className='font-semibold'>Name</h1>
          <input
            required
            onChange={(e) => setName(e.target.value)}
            className='w-full border pl-2 py-2'
          />
        </div>
        <div className="mb-3">
          <h1 className='font-semibold'>Email</h1>
          <input
            required
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            className='w-full border pl-2 py-2'
          />
        </div>
        
        <div className="mb-3">
          <h1 className='font-semibold'>Password</h1>
          <div className='flex w-full border'>  
            <input
              type={passVisiblity}
              required
              onChange={(e) => setPassword(e.target.value)}
              className='w-full bg-white pl-2 py-2 outline-none'
            />
            <div className='pt-2 px-2' onClick={togglePasswordVisibility}><VisibilityOutlinedIcon /></div>
          </div>
        </div>
        <div className="mb-3">
          <h1 className='font-semibold'>Confirm Password</h1>
          <div className='flex w-full border'>  
            <input
              type={confirmPassVisibiliy}
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
              className='w-full bg-white pl-2 py-2 outline-none'
            />
            <div className='pt-2 px-2' onClick={toggleConfirmPasswordVisibility}><VisibilityOutlinedIcon /></div>
          </div>
        </div>
        <div className="mb-3">
          <button className="px-4 text-center py-3 bg-[#1a2eeb] hover:bg-black text-white mt-4"
           id = "signup-button" type="submit">Sign Up</button>
        </div>
        <div className="mb-3">
          Existing User?{' '}
          <Link className = "text-warning" to={`/signin?redirect=${redirect}`}>
          <span className='font-bold text-blue-500'>Sign in</span></Link>
        </div>
      </form>
    </div>
  );
}