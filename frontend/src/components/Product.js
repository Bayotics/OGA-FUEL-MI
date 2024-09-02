import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import axios from 'axios';
import { useContext } from 'react';
import { Store } from '../Store';
import { toast } from 'react-toastify';


import cng from '../assets/Fuel-me/pngs/cng.png'
import lpg from '../assets/Fuel-me/pngs/lpg.png'
import petrol from '../assets/Fuel-me/pngs/petrol.png'
import diesel from '../assets/Fuel-me/pngs/diesel.png'
import fb from '../assets/Fuel-me/pngs/fb-big.png'
import twitter from '../assets/Fuel-me/pngs/twitter-big.png'
import whatsapp from '../assets/Fuel-me/pngs/whatsapp-big.png'
import CurrencyFormat from 'react-currency-format';




function Product(props) {
  const { product } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 0 : 0;
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    toast.success('Product added to cart successfully')
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };

  return (
    <div className=''>
      <div className='products-card px-24 py-24'>
            <div className='product-card flex justify-between'>
              <div className='product-title w-[30%]'>
                <h1 className='text-black font-bold text-5xl'>{product.title}</h1>
                <p className='text-xl font-semibold mt-4'>{product.description}</p>
                <div className='cart flex mt-56 gap-4'>
                  <div className='text-black font-semibold mt-4 flex'>
                    <CurrencyFormat value={product.price} displayType={'text'} thousandSeparator={true} prefix={'₦'} />
                    <p>/{product.title === 'LPG ' || product.title === 'CNG'  ? 'Kg' : 'Litre'}</p>
                  </div>
                  <div className='add-to-cart-btn'>
                    <button onClick={() => addToCartHandler(product)}
                     className=" bg-[#1a2eeb] px-7 py-3 rounded-md text-white hover:bg-[#5b6fc9]">
                      <i className="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              <div className='product-image w-[50%]'>
                  <img src={product.image} alt={product.title} className='prod-img'/>
              </div>
              <div className='product-description pt-6 w-[20%]'>
                <h1 className='font-semibold text-2xl text-black'>Description</h1>
                <p className='mt-4 text-sm'>{product.longDescription}</p>
                <div className='mt-4 cursor-pointer'>
                  <Link to={`/product/${product._id}`}>
                    <p className='text-lg hover:text-[#1a2eeb] text-black'>Learn More →</p>
                  </Link>
                </div>
                
                <div className='share-btns mt-24'>
                  <p className='font-semibold'>Share:</p>
                  <div className='flex mt-2 gap-3'>
                    <Link to = 'https://www.facebook.com/sharer.php?u=<url>'>
                      <div className='fb-big'><img src={fb} alt='fb icon' /></div>
                    </Link>
                    <Link to = 'https://twitter.com/intent/tweet'>
                      <div className='twitter-big'><img src={twitter} alt='twitter icon' /></div>
                    </Link>
                    <div className='whatsapp-big cursor-pointer'><img src={whatsapp} alt='whatsapp icon' /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
}
export default Product;