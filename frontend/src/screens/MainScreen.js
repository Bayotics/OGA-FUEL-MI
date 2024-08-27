import { useEffect, useReducer, useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product';
import Categories from '../components/Categories';
import LandingPageCategory from '../components/LandingPageCategory';
import LandingPageSubscribe from '../components/LandingPageSubscribe';
import About from '../components/About';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import CarouselSlider from '../components/CarouselSlider';
import BlackFriday from '../components/BlackFriday';
import WhyUs from '../components/WhyUs';
import HomePageIntro from '../components/HomePageIntro';
import HomePageAbout from '../components/HomePageAbout';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state,
               products: action.payload.products,
               page: action.payload.page,
               pages: action.payload.pages, 
               loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  const [{ loading, error, products }, dispatch] = useReducer((reducer), {
    products: [],
    loading: true,
    error: '',
  });
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const page = sp.get('page') || 1;

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const {data} = await axios.get(`/api/products?page=${page}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
  }, [page]);
  return (
    <div >
      <div className='homepage-intro mt-14'>
        <HomePageIntro />
      </div>
      <div className='homepage-about mt-10'>
        <HomePageAbout />
      </div>
    </div>
  );
}
export default HomeScreen;