import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Store } from '../Store';
import CheckoutSteps from '../components/CheckoutSteps';

export default function ShippingAddressScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    userInfo,
    cart: { shippingAddress },
  } = state;
  const [fullName, setFullName] = useState(shippingAddress.fullName || '');
  const [address, setAddress] = useState(shippingAddress.address || '');
  const [city, setCity] = useState(shippingAddress.city || '');
  const [postalCode, setPostalCode] = useState(
    shippingAddress.postalCode || ''
  );
  useEffect(() => {
    if (!userInfo) {
      navigate('/signin?redirect=/shipping');
    }
  }, [userInfo, navigate]);
  const [country, setCountry] = useState(shippingAddress.country || '');
  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: {
        fullName,
        address,
        city,
        postalCode,
        country,
      },
    });
    localStorage.setItem(
      'shippingAddress',
      JSON.stringify({
        fullName,
        address,
        city,
        postalCode,
        country,
      })
    );
    navigate('/payment');
  };
  return (
    <div>
      <Helmet>
        <title>Shipping Address</title>
      </Helmet>

      <CheckoutSteps step1 step2></CheckoutSteps>
      <div className="container small-container m-auto mb-36 mt-10 w-[50%]">
        <h1 className="text-5xl font-semibold">Shipping Address</h1>
        <form onSubmit={submitHandler} className='mt-14'>
            <label>Full Name</label>
            <input className='w-full border mt-2 rounded py-2 pl-3 mb-4'
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <label className=''>Delivery Address</label>
            <input className='w-full border mt-2 rounded py-2 pl-3 mb-4'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <label>City</label>
            <input className='w-full border mt-2 rounded py-2 pl-3 mb-4'
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
            <label>Postal Code</label>
            <input className='w-full border mt-2 rounded py-2 pl-3 mb-4'
               value={postalCode}
               onChange={(e) => setPostalCode(e.target.value)}
               required
            />
            <label>Country</label>
            <input className='w-full border mt-2 rounded py-2 pl-3 mb-4'
               value={country}
               onChange={(e) => setCountry(e.target.value)}
               required
            />
          <div className="mb-3 mt-6">
            <button className="py-2 px-4 rounded bg-[#1a2eeb]
             text-white hover:bg-black" type="submit">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}