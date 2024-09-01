import Axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { toast } from 'react-toastify';
import { getError } from '../utils';
import { Store } from '../Store';
import CheckoutSteps from '../components/CheckoutSteps';
import LoadingBox from '../components/LoadingBox';
import CurrencyFormat from 'react-currency-format';


const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_REQUEST':
      return { ...state, loading: true };
    case 'CREATE_SUCCESS':
      return { ...state, loading: false };
    case 'CREATE_FAIL':
      return { ...state, loading: false };
    default:
      return state;
  }
};
 
export default function PlaceOrderScreen() {
  const navigate = useNavigate();

  const [{ loading }, dispatch] = useReducer(reducer, {
    loading: false,
  });

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100;
  cart.itemsPrice = round2(
    cart.cartItems.reduce((a, c) => a + c.quantity * c.price, 0)
  );
  cart.shippingPrice = 5000;
  cart.taxPrice = round2(0.012 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;
 
  const placeOrderHandler = async () => {
    try {
      dispatch({ type: 'CREATE_REQUEST' });

      const { data } = await Axios.post(
        '/api/orders',
        {
          orderItems: cart.cartItems,
          shippingAddress: cart.shippingAddress,
          paymentMethod: cart.paymentMethod,
          itemsPrice: cart.itemsPrice,
          shippingPrice: cart.shippingPrice,
          taxPrice: cart.taxPrice,
          totalPrice: cart.totalPrice,
        },
        {
          headers: {
            authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      ctxDispatch({ type: 'CART_CLEAR' });
      dispatch({ type: 'CREATE_SUCCESS' });
      localStorage.removeItem('cartItems');
      navigate(`/order/${data.order._id}`);
    } catch (err) {
      dispatch({ type: 'CREATE_FAIL' });
      toast.error(getError(err));
    }
  };

  useEffect(() => {
    if (!cart.paymentMethod) {
      navigate('/payment');
    }
  }, [cart, navigate]);

  return (
    <div className='order-preview-main px-4 mb-36'>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <Helmet>
        <title>Preview Order</title>
      </Helmet>
      <h1 className="text-5xl font-semibold mt-10">Your Order</h1>
      <div className = "order-preview-row mt-10 flex gap-4 justify-between">
        <div className='w-2/3'>
          <div className="mb-3 border rounded-md py-4 pl-4">
              <h1 className='text-lg font-medium'>Shipping Info</h1>
              <div className='mt-4 mb-4'>
                <strong>Name:</strong> {cart.shippingAddress.fullName} <br />
                <strong>Address: </strong> {cart.shippingAddress.address},
                {cart.shippingAddress.city}, {cart.shippingAddress.postalCode},
                {cart.shippingAddress.country}
              </div>
              <Link className=' text-[#1a2eeb]' to="/shipping">Edit shipping info?</Link>
          </div>
          <div className="mb-3 border rounded-md py-4 pl-4 mt-3">
              <h1 className='text-lg font-medium'>Payment Method</h1>
              <div className='mt-4 mb-4'>
              <strong>Method:</strong> {cart.paymentMethod} <br />
                <strong>Address: </strong> {cart.shippingAddress.address},
                {cart.shippingAddress.city}, {cart.shippingAddress.postalCode},
                {cart.shippingAddress.country}
              </div>
              <Link className=' text-[#1a2eeb]' to="/payment">Edit payment method?</Link>
          </div>

          <div className="mb-3 border rounded-md py-4 pl-4 mt-3 pr-10">
              <h1 className='text-lg font-medium'>Items</h1>
              <div className='mt-6'>
                {cart.cartItems.map((item) => (
                  <div key={item._id} className='mb-4'>
                    <div className="align-items-center flex justify-between">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-24"
                        ></img>{' '}
                        <div className='mt-4 text-md font-medium'>
                          <Link to={`/product/${item._id}` }>{item.title}</Link>
                        </div>
                        <div className='mt-4'>
                          <h1 className='text-md font-medium'>
                            quantity: {item.quantity} 
                            {item.title === 'CNG' || item.title === 'LPG ' ?'Kg' : 'Litres'}
                          </h1>
                        </div>
                        <div className='flex mt-4 gap-1 font-medium'>
                        <h1 className='text-md font-medium'>Price: </h1>
                        <CurrencyFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={'₦'} />
                        </div>
                    </div>
                  </div>
                ))}
              </div>
              <Link className=' text-[#1a2eeb]' to="/cart">Edit</Link>
          </div>
        </div>
        <div className='w-1/3'>
          <div className='mb-3 border rounded-md py-4 px-4'>
            <h1 className='text-lg font-medium'>Order Summary</h1>
            <div className='mt-8'>
              <div className='mt-4 pb-2 border-b'>
                <div className='flex justify-between'>
                  <div className='w-1/2'>Items</div>
                  <div className='w-1/2'>
                  <CurrencyFormat value={cart.itemsPrice.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'₦'} />
                  </div>
                </div>
              </div>
              <div className='mt-4 pb-2 border-b'>
                <div className='flex justify-between'>
                  <div className='w-1/2'>Delivery fee</div>
                  <div className='w-1/2'>
                    <CurrencyFormat value={cart.shippingPrice.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'₦'} />
                  </div>
                </div>
              </div>
              <div className='mt-4 pb-2 border-b'>
                <div className='flex justify-between'>
                  <div className='w-1/2'>VAT</div>
                  <div className='w-1/2'>
                    <CurrencyFormat value={cart.taxPrice.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'₦'} />
                  </div>
                </div>
              </div>
              <div className='mt-4 pb-2 border-b'>
                <div className='flex justify-between'>
                  <div className='w-1/2'>Order Total</div>
                  <div className='w-1/2'>
                    <CurrencyFormat value={cart.totalPrice.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'₦'} />
                  </div>
                </div>
              </div>
              <div className='mt-8'>
                <div className="w-[80%] m-auto">
                  <button
                    id = "order-button"
                    type="button"
                    onClick={placeOrderHandler}
                    disabled={cart.cartItems.length === 0}
                    className="bg-[#1a2eeb] w-full text-center text-white rounded py-4 hover:bg-blue-600"
                  >
                    Place Order
                  </button>
                </div>
                {loading && <LoadingBox></LoadingBox>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}