import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CheckoutSteps from '../components/CheckoutSteps';
import { Store } from '../Store';

export default function PaymentMethodScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { shippingAddress, paymentMethod },
  } = state;

  const [paymentMethodName, setPaymentMethod] = useState(
    paymentMethod || 'Paystack'
  );

  useEffect(() => {
    if (!shippingAddress.address) {
      navigate('/shipping');
    }
  }, [shippingAddress, navigate]);
  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({ type: 'SAVE_PAYMENT_METHOD', payload: paymentMethodName });
    localStorage.setItem('paymentMethod', paymentMethodName);
    navigate('/placeorder');
  };
  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <div className="container small-container mt-32 mb-36 m-auto w-[50%]">
        <Helmet>
          <title>Payment Method</title>
        </Helmet>
        <h1 className="text-5xl font-semibold">Select a payment method</h1>
        <form onSubmit={submitHandler} className='mt-10'>
          <div className="mb-3">
          <input 
              type="radio"
              id="Paystack"
              label="Paystack"
              value="Paystack"
              checked={paymentMethodName === 'Paystack'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor = "Paystack" className='text-lg font-semibold ml-2'>Paystack</label>
          </div>
          <div className="mb-3">
            <input disabled
              type="radio"
              id="Flutterwave"
              value="Flutterwave"
              checked={paymentMethodName === 'Flutterwave'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor = "Flutterwave" className='ml-2'>Flutterwave (Coming Soon...)</label>
          </div>
          <div className="mb-3 mt-4">
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