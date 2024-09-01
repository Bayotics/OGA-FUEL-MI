import React from 'react';

export default function CheckoutSteps(props) {
  return (
    <div className="checkout-steps justify-between flex mt-6 px-6">
      <div className={props.step1 ? 'active' : ''}>1 Sign-In →</div>
      <div className={props.step2 ? 'active' : ''}>2 Shipping Address →</div>
      <div className={props.step3 ? 'active' : ''}>3 Select Payment Method →</div> 
      <div className={props.step4 ? 'active' : ''}>4 Place Order</div>
    </div>
  );
}