import { useContext } from 'react';
import { Store } from '../Store';
import { Helmet } from 'react-helmet-async';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MessageBox from '../components/MessageBox';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import petrol from '../assets/Fuel-me/pngs/petrol.png'
import CurrencyFormat from 'react-currency-format';

export default function CartScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const updateCartHandler = async (item, quantity) => {
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };
  const removeItemHandler = (item) => {
    ctxDispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };

  const checkoutHandler = () => {
    if(cartItems[0].quantity === 0){
      alert("You have not selected a quantity")
    }
    else{
      navigate('/signin?redirect=/shipping');
    }
  };

  return (
    <div className='shopping-cart-screen-main pb-32'>
      <Helmet >
        <title>Shopping Cart</title>
      </Helmet>
      <div className=" page-header">
        <div className="container">
          <h1 className="font-bold text-3xl mt-24 text-black text-center">Shopping Cart</h1>
        </div>
      </div>
      <div className='cart-display flex mt-24 px-20 gap-4 '>
        <div className='cart-table border w-2/3'>
        {cartItems.length === 0 ? (
            <div className='text-center font-bold text-3xl mt-6'>
              Cart is currently empty. <Link className='text-[#1a2eeb]' 
              to="/search?category=all&query=all&price=all&rating=all&order=newest&page=1">Go Shopping</Link>
            </div>
          ) : (
          <table className="table-auto w-full">
            <thead className='bg-sky-100 border-b'>
              <tr className=''>
                <th className='py-3'>Image</th>
                <th>Product</th>
                <th className='text-sm'>Quantity (in ltr/kg), Minimum: 10 </th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            {cartItems.map((e) => (
            <tbody key = {e._id}>
              <tr className='border-b '>
                <td className='py-4'><img src={e.image} alt={e.title} className='h-16 m-auto'/></td>
                <td className='text-center text-[#1a2eeb] font-medium'>
                  <Link to={`/product/${e._id}`}>{e.title}</Link>
                </td>
                <td className='text-center'>
                  <button
                    onClick={() =>
                    updateCartHandler(e, e.quantity - 10)
                    }
                    disabled={e.quantity === 0}>
                      <i className="fas fa-minus-circle"></i>
                  </button>{' '}
                  <span>{e.quantity}</span>{' '}
                  <button
                    onClick={() =>
                      updateCartHandler(e, e.quantity + 10)
                    }
                  >
                    <i className="fas fa-plus-circle"></i>
                  </button>
                </td>
                <td className='text-center'>
                  <CurrencyFormat value={e.price} displayType={'text'} thousandSeparator={true} prefix={'₦'} />
                </td>
                <td className='text-center'>
                  <button
                    onClick={() => removeItemHandler(e)}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            </tbody>))}
          </table>)}
        </div>
        <div className='cart-table border w-1/3'>
          <div className='checkout-header border-b bg-sky-100 pl-8 py-2'>
            <h1 className='text-2xl font-semibold'>Cart totals</h1>
          </div>
          <div className='total-p mt-10 px-4'>
            <div className='border-b pb-2 flex gap-2'>
              <p className='text-3xl font-semibold text-black'>Total: </p>
              <div className='text-3xl font-semibold text-black'>
               <CurrencyFormat value={cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                displayType={'text'} thousandSeparator={true} prefix={'₦'} />
              </div>
            </div>
          </div>
          <div className='checkout-btn mt-10 px-6'>
            <button className= {`rounded-md py-4 font-medium text-lg text-center w-full bg-[#1a2eeb]
             hover:bg-black text-white`} type='button' onClick={checkoutHandler}
             disabled = {cartItems.length === 0}>
              Checkout
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
}