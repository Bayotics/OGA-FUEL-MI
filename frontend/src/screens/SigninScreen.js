import Axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useContext, useEffect, useState } from 'react';
import { Store } from '../Store';
import { toast } from 'react-toastify';
import { getError } from '../utils';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

export default function SigninScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passVisiblity, setPassVisibility] = useState('password')

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post('/api/users/signin', {
        email,
        password,
      });
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate(redirect || '/');
    } catch (err) {
      toast.error(getError(err));
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

  return (
    <div className="px-40 pt-20 mb-48">
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <h1 className="text-center text-3xl font-semibold">Sign in</h1>
      <form onSubmit={submitHandler} className='mt-10'>
        <div className="mb-3">
            <h1 className='font-semibold'>Email</h1>
              <input
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                className='w-full border pl-2 py-2 outline-none'
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
          <button className="px-4 text-center py-3 bg-[#1a2eeb] hover:bg-black text-white mt-4"
           id = "signin-button" type="submit">Sign In</button>
        </div>
        <div className="mb-3">
          New customer?{' '}
          <Link className='text-warning' to={`/signup?redirect=${redirect}`}>
          <span className='font-bold text-blue-500'>Sign up</span></Link>
        </div>
      </form>
    </div>
  );
}