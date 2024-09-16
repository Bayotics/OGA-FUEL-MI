import React, { useContext, useEffect, useReducer } from 'react';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { Store } from '../Store';
import { getError } from '../utils';
import Button from 'react-bootstrap/esm/Button';
import CurrencyFormat from 'react-currency-format';
import moment from 'moment'

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, payments: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function OrderHistoryScreen() {
  const { state } = useContext(Store);
  const { userInfo } = state;
  const navigate = useNavigate();

  const [{ loading, error, payments }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const { data } = await axios.get(
          `/api/payments/mine`,

          { headers: { Authorization: `Bearer ${userInfo.token}` } }
          
        );
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (error) {
        dispatch({
          type: 'FETCH_FAIL',
          payload: getError(error),
        });
      }
    };
    fetchData();
  }, [ userInfo]);
  return (
    <div className='mb-48 px-24 mt-12 order-history-scr-main'>
      <Helmet>
        <title>Order History</title>
      </Helmet>

      <h1 className='text-center text-3xl font-semibold'>Order History</h1>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <h1 className='text-red-500' variant="danger">{error}</h1>
      ) : (
        <table className="table mt-5 w-full" >
          <thead className=''>
            <tr className='text-center'>
              <th className=''>ID</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>STATUS</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody className='border text-center '>
            {payments.map((payment) => (
              <tr key={payment._id} className='border-b'>
                <td className='py-3'>{payment._id}</td>
                <td>
                  <h1>{moment(payment.createdAt,).format('MMMM Do YYYY, h:mm a')}</h1>
                </td>
                <td>
                  <CurrencyFormat value={payment.totalPrice.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'₦'} />
                </td>
                <td><p>Paid</p></td>
                {/* <td>
                  {order.isDelivered
                    ? order.deliveredAt.substring(0, 10)
                    : 'No'}
                </td> */}
                <td>
                  <button
                    type="button"
                    className='text-yellow-600'
                    onClick={() => {
                      navigate(`/payment/${payment._id}`);
                    }}
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}