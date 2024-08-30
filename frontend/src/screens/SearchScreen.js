import React, { useEffect, useReducer, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getError } from '../utils';
import { Helmet } from 'react-helmet-async';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Rating from '../components/Rating';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Button from 'react-bootstrap/Button';
import Product from '../components/Product';
import LinkContainer from 'react-router-bootstrap/LinkContainer';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';


import cng from '../assets/Fuel-me/pngs/cng.png'
import lpg from '../assets/Fuel-me/pngs/lpg.png'
import petrol from '../assets/Fuel-me/pngs/petrol.png'
import diesel from '../assets/Fuel-me/pngs/diesel.png'
import fb from '../assets/Fuel-me/pngs/fb-big.png'
import twitter from '../assets/Fuel-me/pngs/twitter-big.png'
import whatsapp from '../assets/Fuel-me/pngs/whatsapp-big.png'

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
        countProducts: action.payload.countProducts,
        loading: false,
      };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

const prices = [
  {
    name: '₦1 to ₦1,000',
    value: '1-1000',
  },
  {
    name: '₦1k to ₦10k',
    value: '1000-10000',
  },
  {
    name: '₦10k to ₦100k',
    value: '10000-100000',
  },
  {
    name: '₦100k to ₦500k',
    value: '100000-500000'
  },
  {
    name: '₦500k to ₦1M',
    value: '500000-1000000'
  },
  {
    name: '₦1M to ₦5M',
    value: '1000000-5000000'
  },
  {
    name: '₦5M to ₦20M',
    value: '5000000-20000000'
  }
];

export const ratings = [
  {
    name: '4stars & up',
    rating: 4,
  },

  {
    name: '3stars & up',
    rating: 3,
  },

  {
    name: '2stars & up',
    rating: 2,
  },

  {
    name: '1stars & up',
    rating: 1,
  },
];

export default function SearchScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const sp = new URLSearchParams(search); // /search?category=Shirts
  const category = sp.get('category') || 'all';
  const query = sp.get('query') || 'all';
  const price = sp.get('price') || 'all';
  const rating = sp.get('rating') || 'all';
  const order = sp.get('order') || 'newest';
  const page = sp.get('page') || 1;

  const [{ loading, error, products, pages, countProducts }, dispatch] =
    useReducer(reducer, {
      loading: true,
      error: '',
    });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `/api/products/search?page=${page}&query=${query}&category=${category}&price=${price}&rating=${rating}&order=${order}`
        );
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({
          type: 'FETCH_FAIL',
          payload: getError(error),
        });
      }
    };
    fetchData();
  }, [category, error, order, page, price, query, rating]);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, [dispatch]);
  const getFilterUrl = (filter, skipPathname) => {
    const filterPage = filter.page || page;
    const filterCategory = filter.category || category;
    const filterQuery = filter.query || query;
    const filterRating = filter.rating || rating;
    const filterPrice = filter.price || price;
    const sortOrder = filter.order || order;
    return `${
      skipPathname ? '' : '/search?'
    }category=${filterCategory}&query=${filterQuery}&price=${filterPrice}&rating=${filterRating}&order=${sortOrder}&page=${filterPage}`;
  };
  console.log(products)

    return (
    <div className='shop-screen-main'>
      <Helmet>
        <title>Search Fuel</title>
      </Helmet>
      <div className='product-content'>
      <div className='mt-24 shop-heading text-center px-48'>
          <h1 className='text-5xl font-bold'>Choose your <span className='text-[#1a2eeb]'>Fuel</span></h1>
          <p className='mt-10 font-medium text-lg leading-loose'>Whether you need fuel for your home, business, or fleet, We offer competitive 
            pricing and exceptional service to keep you running smoothly. Place your order now and experience 
            convenience at its best!
          </p>
       </div>
        <div className='products-card-main mt-10 mb-36'>
          <div className='products-card px-24 py-24'>
            
          <div className='shop-contents'>
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <>
              {products.length === 0 && (
                <h1 className='text-2xl text-center font-bold'>No Product Found</h1>
              )}
              <div>
                {products.map((product) => (
                  <Col sm={6} lg={4} className="mb-3 product-card-outer" key={product._id}>
                    <Product product={product}></Product>
                  </Col>
                ))}
              </div>
            </>
          )}
        </div>
          </div>
        </div>
      </div>
       
    </div>
  );
}