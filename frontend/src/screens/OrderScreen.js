import axios from 'axios';
import React, { useContext, useEffect, useReducer,useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { Store } from '../Store';
import { getError } from '../utils';
import {usePaystackPayment} from "react-paystack";
import Button from 'react-bootstrap/Button';
import CurrencyFormat from 'react-currency-format';



function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, order: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
       case 'UPDATE_REQUEST':
      return { ...state, loadingUpdate: true };
    case 'UPDATE_SUCCESS':
      return { ...state, loadingUpdate: false };
    case 'UPDATE_FAIL':
      return { ...state, loadingUpdate: false };

    default:
      return state;
  }
}
export default function OrderScreen() {
  const { state } = useContext(Store);
  const { userInfo } = state;
  // const [orderIsPaid, setOrderisPaid] = useState(false);
  const params = useParams();
  const { id: orderId } = params;
  const navigate = useNavigate();

  const [{ loading, error, order }, dispatch] = useReducer(reducer, {
    loading: true,
    order: {},
    error: '',
  });

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/orders/${orderId}`, {
          headers: { authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };

    if (!userInfo) {
      return navigate('/login');
    }
    if (!order._id || (order._id && order._id !== orderId)) {
      fetchOrder();
    }else{

    }
  }, [order, userInfo, orderId, navigate]);
  const orderIsPaid = order.isPaid
// paystack implementation
  const config = {
      reference: (new Date()).getTime().toString(),
      email: "user@example.com",
      amount: (order.totalPrice) * 100, 
      publicKey: 'pk_test_8d9e427702c5b457180503dd7a71fc3c41e276de',
  };
  
  const onSuccess = (reference) => {
    const postFunc = async () => {
       await axios.post(
        '/api/payments',
        {
          orderItems: order.orderItems,
          message: reference.message,
          paidAt: order.paidAt,
          reference: reference.reference,
          status: reference.status,
          transaction: reference.transaction,
          shippingAddress: order.shippingAddress.address,
          totalPrice: order.totalPrice
        },
        {
          headers: {
            authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      // setOrderisPaid(true);
      //order put request to change order.isPaid to true
      try {
      dispatch({ type: 'UPDATE_REQUEST' });
      await axios.put(
        `/api/orders/${orderId}/pay`,
        {
          orderIsPaid
        },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: 'UPDATE_SUCCESS',
      });
      toast.success('Order placed Successfully');
    } catch (err) {
      toast.error(getError(err));
      dispatch({ type: 'UPDATE_FAIL' });
    }
      order.isPaid = true;
    };
    postFunc();
    order.isPaid = true;
    // navigate('/')
  };

  const onClose = () => {
    console.log('closed')
  }

  const PaystackHookExample = () => {
      const initializePayment = usePaystackPayment(config);
      return (
        <div className='mt-4'>
            <button
            className="bg-[#1a2eeb] w-full text-center text-white rounded py-4 hover:bg-blue-600"
            onClick={() => {
                initializePayment(onSuccess, onClose)
            }}>Pay with {order.paymentMethod}</button>
        </div>
      );
  };

  return loading ? (
    <div></div>
  ) : error ? (
    <div className='text-red-600'>{error}</div>
  ) : (
    <div className='place-order-main px-4 mb-36'>
      <Helmet>
        <title>Order {orderId}</title>
      </Helmet>
      <h1 className="text-5xl font-semibold mt-10">Order {orderId}</h1>
      <div className = "order-preview-row mt-10 flex gap-4 justify-between">
        <div className='w-2/3'>
          <div className="mb-3 border rounded-md py-4 pl-4">
              <h1 className='text-lg font-medium'>Delivery Info</h1>
              <div className='mt-4 mb-4'>
                <strong>Name:</strong> {order.shippingAddress.fullName} <br />
                <strong>Address: </strong> {order.shippingAddress.address},
                {order.shippingAddress.city}, {order.shippingAddress.postalCode}
                ,{order.shippingAddress.country}
              </div>
              {/* {order.isDelivered ? (
                <div className='text-green-500'>
                  Delivered at {order.deliveredAt}
                </div>
              ) : (
                <div><p className='text-red-600 text-bold'>Not Delivered</p></div>
              )}           */}
          </div>
          <div className="mb-3 border rounded-md py-4 pl-4">
              <h1 className='text-lg font-medium'>Payment</h1>
              <div className='mt-4 mb-4'>
                <strong>Method:</strong> {order.paymentMethod}
              </div>
              {order.isPaid  ? (
                <div >
                  <p className='text-green-500 font-bold'>Paid. Please check order history for your order details</p>
                </div>
              ) : (
                <div><p className='text-red-600 font-bold'>Not Paid</p></div>
              )}   
          </div>
          <div className="mb-3 border rounded-md py-4 pl-4 mt-3 pr-10">
              <h1 className='text-lg font-medium'>Items</h1>
              <div className='mt-6'>
                {order.orderItems.map((item) => (
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
                  <CurrencyFormat value={order.itemsPrice.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'₦'} />
                  </div>
                </div>
              </div>
              <div className='mt-4 pb-2 border-b'>
                <div className='flex justify-between'>
                  <div className='w-1/2'>Delivery fee</div>
                  <div className='w-1/2'>
                    <CurrencyFormat value={order.shippingPrice.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'₦'} />
                  </div>
                </div>
              </div>
              <div className='mt-4 pb-2 border-b'>
                <div className='flex justify-between'>
                  <div className='w-1/2'>VAT</div>
                  <div className='w-1/2'>
                    <CurrencyFormat value={order.taxPrice.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'₦'} />
                  </div>
                </div>
              </div>
              <div className='mt-4 pb-2 border-b'>
                <div className='flex justify-between'>
                  <div className='w-1/2'>Order Total</div>
                  <div className='w-1/2'>
                    <CurrencyFormat value={order.totalPrice.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'₦'} />
                  </div>
                </div>
              </div>
              <div className='mt-8'>
                <div className="w-[80%] m-auto">
                {order.isPaid ? <div></div> : <PaystackHookExample />}
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