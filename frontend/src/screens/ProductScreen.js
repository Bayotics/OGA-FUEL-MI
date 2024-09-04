import axios from 'axios';
import { useContext, useEffect, useReducer, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Rating from '../components/Rating';
import ProductDetails from '../components/ProductDetails';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { getError } from '../utils';
import { Store } from '../Store';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { toast } from 'react-toastify';
import petrol from '../assets/Fuel-me/pngs/petrol.png';
import masterCard from '../assets/Fuel-me/pngs/masterCard.png';
import verve from '../assets/Fuel-me/pngs/verve.png';
import paystack from '../assets/Fuel-me/pngs/paystackCard.png';
import visa from '../assets/Fuel-me/visaCard.jpg';
import CurrencyFormat from 'react-currency-format';

const reducer = (state, action) => {
  switch (action.type) {
    case 'REFRESH_PRODUCT':
      return { ...state, product: action.payload };
    case 'CREATE_REQUEST':
      return { ...state, loadingCreateReview: true };
    case 'CREATE_SUCCESS':
      return { ...state, loadingCreateReview: false };
    case 'CREATE_FAIL':
      return { ...state, loadingCreateReview: false };
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, product: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function ProductScreen() {
  let reviewsRef = useRef();

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [selectedImage, setSelectedImage] = useState('');

  const navigate = useNavigate();
  const params = useParams();
  const productId = params.id
  console.log(productId);

  const [{ loading, error, product, loadingCreateReview }, dispatch] =
    useReducer(reducer, {
      product: [],
      loading: true,
      error: '',
    });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`/api/products/${productId}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    fetchData();
  }, [productId]);
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;
  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 0 : 0;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity },
    });
    toast.success('Product added to cart successfully')
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!comment || !rating) {
      toast.error('Please enter comment and rating');
      return;
    }
    try {
      const { data } = await axios.post(
        `/api/products/${product._id}/reviews`,
        { rating, comment, name: userInfo.name },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );

      dispatch({
        type: 'CREATE_SUCCESS',
      });
      toast.success('Review submitted successfully');
      product.reviews.unshift(data.review);
      product.numReviews = data.numReviews;
      console.log(product.numReviews)
      product.rating = data.rating;
      setComment('');
      setRating(0);
      dispatch({ type: 'REFRESH_PRODUCT', payload: product });
    } catch (error) {
      toast.error(getError(error));
      dispatch({ type: 'CREATE_FAIL' });
    }
  };

  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div className='product-details-main clear-start bg-[#fbfbff] pt-28 pb-48 border '>
      <h1 className='text-center font-semibold text-5xl'>Product Info </h1>
      <Helmet>
        <title>{product.title}</title>
      </Helmet>
      <div className='flex product-contents px-40 gap-8 mt-10'>
        <div className='product-img w-1/2 shadow-xl bg-white rounded py-24 h-[70%]'>
          <img src= {product.image} alt={product.title} className='h-56 m-auto'/>
        </div>
        <div className='product-details w-1/2 pl-2'>
          <h1 className='text-3xl font-semibold text-black'>{product.title}</h1>
          <h1 className='text-md'>{product.description}</h1>
          <div className='mt-2'>
            <Rating
              rating={product.rating}>
            </Rating>
            <h1>{product.reviews.length === 0 ? 'No' : product.numReviews} review(s)</h1>
          </div>
          <h1 className='text-lg font-semibold mt-6'>
            <CurrencyFormat value={product.price} displayType={'text'} thousandSeparator={true} prefix={'₦'} />
            <span className='text-md font-normal'>/litre
            </span>
          </h1>
          <p className='text-md mt-4'>{product.longDescription}</p>
          <div className='cart-btn mt-12'>
            <button onClick={addToCartHandler}
             className='px-4 text-center py-3 bg-[#1a2eeb] hover:bg-black text-white rounded-3xl'>
              <i className="fas fa-shopping-cart"></i> Add to Cart
            </button>
          </div>
          <div className='mt-6'>
            <fieldset className='border py-8'>
              <legend className='text-center font-semibold'>Secured by Paystack</legend>
              <div className='flex card-imgs gap-2 justify-center'>
                <div className='paystack-card'>
                  <img className= 'h-8 w-14 rounded' src= {paystack} alt='mastercard'/>
                </div>
                <div className='master-card'>
                  <img className= 'h-8 w-14 rounded' src= {masterCard} alt='mastercard'/>
                </div>
                <div className='verve-card'>
                  <img className= 'h-8 w-14 rounded' src= {verve} alt='mastercard'/>
                </div>
                <div className='visa-card'>
                  <img className= 'h-8 w-14 rounded' src= {visa} alt='mastercard'/>
                </div>
              </div>
            </fieldset>
            <div className='check-features mt-6'>
              <div className='flex gap-1'>
                <i className="fa fa-check-circle mt-1" aria-hidden="true"></i>
                <h1>Guaranteed Seamless checkout</h1>
              </div>
              <div className='flex gap-1 mt-1'>
                <i className="fa fa-check-circle mt-1" aria-hidden="true"></i>
                <h1>Express Delivery</h1>
              </div>
              <div className='flex gap-1 mt-1'>
                <i className="fa fa-check-circle mt-1" aria-hidden="true"></i>
                <h1>Secure Payments</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='px-20'>
        <div className='product-infos mt-16 pb-16 border-b'>
          <ProductDetails product = {product}/>
        </div>
      </div>
      
      <div className='product-reviews mt-24 px-20'>
        <div className="reviews-input">
          <div className="">
            {userInfo ? (
              <form onSubmit={submitHandler}>
                <h2 className='text-4xl font-semibold'>Write a customer review</h2>
                <div className="mb-3">
                  <h1 className='text-2xl font-normal mt-8'>Rating</h1>
                  <select className='w-full mt-2 border pl-2 py-2'
                    aria-label="Rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                  >
                    <option value="">Select...</option>
                    <option value="1">1- Poor</option>
                    <option value="2">2- Fair</option>
                    <option value="3">3- Good</option>
                    <option value="4">4- Very good</option>
                    <option value="5">5- Excellent</option>
                  </select>
                </div>
                <div className='comments'>
                  <textarea
                      as="textarea"
                      placeholder="Leave a comment here"
                      rows={4}
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className='w-full pl-2 py-2 border'
                    />
                </div>
                  
                <div className="mb-3">
                  <button className="comment-btn px-4 mt-4 text-center py-3 bg-[#1a2eeb] hover:bg-black text-white" 
                  disabled={loadingCreateReview} type="submit">
                    Submit
                  </button>
                  {loadingCreateReview && <LoadingBox></LoadingBox>}
                </div>
              </form>
            ) : (
              <p className='text-xl text-red-500'>
                Please{' '}
                <Link  to={`/signin?redirect=/product/${product._id}`}>
                  Sign In
                </Link>{' '}
                to write a review
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductScreen;