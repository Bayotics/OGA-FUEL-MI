import React, { useContext, useEffect, useReducer } from 'react';
import Chart from 'react-google-charts';
import axios from 'axios';
import { Store } from '../Store';
import { getError } from '../utils';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { PieChart } from '@mui/x-charts/PieChart';
import CurrencyFormat from 'react-currency-format';


const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        summary: action.payload,
        loading: false,
      };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export default function DashboardScreen() {
  const [{ loading, summary, error }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
  });
  const { state } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('/api/orders/summary', {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({
          type: 'FETCH_FAIL',
          payload: getError(err),
        });
      }
    };
    fetchData();
  }, [userInfo]);


  return (
    <div className= 'px-40 pt-12 mb-48'>
      <h1 className="text-center text-3xl font-semibold">Dashboard</h1>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <h1 className='text-red-500' variant="danger">{error}</h1>
      ) : (
        <>
          <div className='dashboard-row mt-8'>
            <div className='flex justify-between gap-4'>
              <div className='border rounded-md pl-2 py-3 w-1/3'>
                {summary.users && summary.users[0]
                ? summary.users[0].numUsers
                : 0}
                <h1>Total Users</h1>
              </div>
              <div className='border rounded-md pl-2 py-3 w-1/3'>
                {summary.orders && summary.users[0]
                ? summary.orders[0].numOrders
                : 0}
                <h1>Total Orders</h1>
              </div>
              <div className='border rounded-md pl-2 py-3 w-1/3'>
                <CurrencyFormat
                 value={summary.orders && summary.users[0]
                  ? summary.orders[0].totalSales.toFixed(2)
                  : 0} 
                  displayType={'text'} 
                  thousandSeparator={true} prefix={'₦'}
                />
                <h1>Total sales</h1>
              </div>
            </div>
          </div>
              
          <div className="my-3">
            <h2>Total Sales</h2>
            {summary.dailyOrders.length === 0 ? (
              <MessageBox>No Sale</MessageBox>
            ) : (
              <div>
                <Chart
                  width="100%"
                  height="400px"
                  chartType="AreaChart"
                  loader={<div>Loading Chart...</div>}
                  data={[
                    ['Date', 'Sales'],
                    ...summary.dailyOrders.map((x) => [x._id, x.sales]),
                  ]}
                ></Chart>
                <PieChart
                  series={[
                    {
                      data: [
                        ['Date', 'Sales'],
                        ...summary.productCategories.map((x) => [x._id, x.count]),
                      ],
                    },
                  ]}
                  width={400}
                  height={200}
                />
              </div>
              
              
            )}
          </div>
        </>
      )}
    </div>
  );
}