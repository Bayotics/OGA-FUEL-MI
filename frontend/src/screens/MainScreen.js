import { useEffect, useReducer, useState } from 'react';
import { useLocation} from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import HomePageIntro from '../components/HomePageIntro';
import HomePageAbout from '../components/HomePageAbout';
import HowitWorks from '../components/HowitWorks';
import Industries from '../components/Industries';
import GasStation from '../components/GasStation';
import FuelmeApp from '../components/FuelmeApp';
import FAQs from '../components/FAQ';
import BrandScroller from '../components/BrandsScroller';


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
        <Helmet>
          <title>Fuel me</title>
        </Helmet>
        <div className='homepage-intro mt-14'>
          <HomePageIntro />
        </div>
        <div className='homepage-about mt-10'>
          <HomePageAbout />
        </div>
        <div className='homepage-how-it-works mt-32'>
          <BrandScroller />
        </div>
        <div className='homepage-how-it-works mt-32'>
          <HowitWorks />
        </div>
        <div className='homepage-how-it-works mt-10'>
          <Industries />
        </div>
        <div className='homepage-gas-station mt-10'>
          <GasStation />
        </div>
        <div className='homepage-fuel-me-app mt-10'>
          <FuelmeApp />
        </div>
        <div className='homepage-faq mt-10'>
          <FAQs />
        </div>
      </div>

  );
}
export default HomeScreen;