import axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import LoadingBox from '../components/LoadingBox';
import { Store } from '../Store';
import { getError } from '../utils';
import CurrencyFormat from 'react-currency-format';
import moment from 'moment';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, payment: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}

const PaymentScreen = () => 
{
    
  const { state } = useContext(Store);
  const { userInfo } = state;

  const params = useParams();
  const { id: paymentId } = params;
  const navigate = useNavigate();

  const [{ loading, error, payment }, dispatch] = useReducer(reducer, {
    loading: true,
    payment: {},
    error: '',
  });

  useEffect(() => {
    const fetchPayment = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/payments/${paymentId}`, {
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
    if (!payment._id || (payment._id && payment._id !== paymentId)) {
      fetchPayment();
    }else{

    }
  }, [payment, userInfo, paymentId, navigate]);
    return loading ? (<LoadingBox></LoadingBox>) : (
      <div className='mb-48 px-24 mt-12'>
        <table className="table mt-10 w-full" >
          <thead>
            <tr className='text-center'>
              <th><h2>Payment ID</h2></th>
              <th><h2>Payment Status</h2></th>
              <th><h2>Payment Date</h2></th>
              <th><h2>Total Price</h2></th>
            </tr>
          </thead>
          <tbody className=' text-center '>
            <tr className='border-t '>
              <td className='py-10'><h3>{paymentId}</h3></td>
              <td><h3 className='text-green-500 font-semibold'>{payment.status}</h3></td>
              <td>
                <h3>{moment(payment.createdAt).format('MMMM Do YYYY, h:mm a')}</h3>
              </td>
              <td>
                <CurrencyFormat value={payment.totalPrice.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'₦'} />
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <table className='table mt-10 w-full'>
            <thead>
              <tr className='text-center'>
                <th>Pic</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody className='text-center'>
              {payment.orderItems.map((e) => (
                <tr key={e._id} className='border-t'>
                  <td className='py-10'>
                    <img
                      src={e.image}
                      alt={e.title}
                      className="h-10 m-auto"
                    ></img>{' '}</td>
                  <td>{e.title}</td>
                  <td>{e.quantity} {e.title === 'Petrol' || e.title === 'Diesel' ?  'Ltr' : 'Kg'}</td>
                  <td>
                    <CurrencyFormat value={e.price * e.quantity} displayType={'text'} thousandSeparator={true} prefix={'₦'} />
                  </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
    )
}


export default PaymentScreen;