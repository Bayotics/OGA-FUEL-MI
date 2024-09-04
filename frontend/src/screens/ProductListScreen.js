import React, { useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import { Store } from '../Store';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { getError } from '../utils';
import CurrencyFormat from 'react-currency-format';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        products: action.payload.products,
        page: action.payload.page,
        pages: action.payload.pages,
        loading: false,
      };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    case 'CREATE_REQUEST':
      return { ...state, loadingCreate: true };
    case 'CREATE_SUCCESS':
      return {
        ...state,
        loadingCreate: false,
      };
    case 'CREATE_FAIL':
      return { ...state, loadingCreate: false };

    case 'DELETE_REQUEST':
      return { ...state, loadingDelete: true, successDelete: false };
    case 'DELETE_SUCCESS':
      return {
        ...state,
        loadingDelete: false,
        successDelete: true,
      };
    case 'DELETE_FAIL':
      return { ...state, loadingDelete: false, successDelete: false };

    case 'DELETE_RESET':
      return { ...state, loadingDelete: false, successDelete: false };
    default:
      return state;
  }
};

export default function ProductListScreen() {
  const [
    {
      loading,
      error,
      products,
      pages,
      loadingCreate,
      loadingDelete,
      successDelete,
    },
    dispatch,
  ] = useReducer(reducer, {
    loading: true,
    error: '',
  });

  const navigate = useNavigate();
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const page = sp.get('page') || 1;

  const { state } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/api/products/admin?page=${page} `, {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });

        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {}
    };

    if (successDelete) {
      dispatch({ type: 'DELETE_RESET' });
    } else {
      fetchData();
    }
  }, [page, userInfo, successDelete]);

  const createProduct = () => {
    navigate(`/ProductCreateScreen`)
  }
  const deleteHandler = async (product) => {
    if (window.confirm('Are you sure to delete?')) {
      try {
        await axios.delete(`/api/products/${product._id}`, {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        toast.success('product deleted successfully');
        dispatch({ type: 'DELETE_SUCCESS' });
      } catch (err) {
        toast.error(getError(error));
        dispatch({
          type: 'DELETE_FAIL',
        });
      }
    }
  };

  return (
    <div className='mb-48 px-24 mt-12'>
      <div className='flex justify-between'>
        <div>
          <h1 className='text-center text-3xl font-semibold mt-1'>Products</h1>
        </div>
        <div className="">
            <button className="px-4 text-center py-3 bg-[#1a2eeb] hover:bg-black text-white" 
            type="button" onClick={createProduct}>
              Add new Product
            </button>
        </div>
      </div>

      {loadingCreate && <LoadingBox></LoadingBox>}
      {loadingDelete && <LoadingBox></LoadingBox>}

      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <h1 className='text-red-500'>{error}</h1>
      ) : (
        <>
          <table className="table mt-10 w-full" >
            <thead>
              <tr className='text-center'>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody className='border text-center '>
            {products.map((product) => (
                <tr className='border-b' key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.title}</td>
                  <td>
                    <CurrencyFormat value={product.price} displayType={'text'} thousandSeparator={true} prefix={'₦'} />
                  </td>
                  <td>{product.category}</td>
                  <td className=''>
                    <div className='flex gap-2 justify-center'>
                      <button
                        type="button"
                        className='px-4 text-center py-3 bg-[#1a2eeb] hover:bg-black text-white'
                        onClick={() => navigate(`/admin/product/${product._id}`)}
                      >
                        Edit
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        className='px-4 text-center py-3 bg-red-400 hover:bg-black text-white'
                        onClick={() => deleteHandler(product)}
                      >
                        Delete
                      </button>
                    </div>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}