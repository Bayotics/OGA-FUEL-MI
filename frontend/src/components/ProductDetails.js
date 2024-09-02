import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Rating from '../components/Rating';
import { useState } from 'react';


function ProductDetails({ children,  value, index, ...other }) {
    

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

ProductDetails.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({product, rating}) {
    const reviewLength = product.reviews.length;
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', paddingTop: '30px' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab sx={{width: '100%', fontFamily: 'poppins', fontSize: '20px', }}
           label="Description" {...a11yProps(0)} />
          <Tab sx={{width: '100%', fontFamily: 'poppins', fontSize: '20px', }} label="Delivery" {...a11yProps(1)} />
          <Tab sx={{width: '100%', fontFamily: 'poppins', fontSize: '20px', }} label="Reviews" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <div className='mt-10'>
        <ProductDetails value={value} index={0}>
            <div className='prod-desc'>
                <h1 className='text-2xl font-semibold'>Product description</h1>
                <p className='mt-2'>{product.description}</p>
            </div>
        </ProductDetails>
        <ProductDetails value={value} index={1}>
            <div className='delivery-desc'>
                <h1 className='text-2xl font-semibold'>Delivery</h1>
                <p className='mt-2'>
                    We deliver to anywhere within Lagos and its environs. Monday to Sunday, 24/7. 
                    Payments validates order. All payments and payment info are secured on the Paystack Platform. 
                    Also, there is free delivery within Lagos for orders of N150,000 and above.
                </p>
            </div>
        </ProductDetails>
        <ProductDetails value={value} index={2}>
        <div className="tab-pane fade show active" id="product-review-tab"   aria-labelledby="product-review-link">
                <div className="reviews">
                    <h3>Reviews ({reviewLength})</h3>
                    <div className="review">
                        <div className="row no-gutters">
                            <div className="mb-3">
                              {product.reviews.length === 0 && (
                                <p className='text-red-500 text-xl font-semibold'>There are no reviews for this product yet</p>
                              )}
                            </div>
                            {product.reviews.map((review) =>{
                                return(
                                    <div key={review._id}>
                                        <div className="col-auto">
                                            <h4>{review.name}</h4>
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <Rating rating={review.rating} caption=" "></Rating>
                                                </div>
                                            </div>
                                            <span className="review-date">{review.createdAt.substring(0, 10)}</span>
                                        </div>
                                        <div className="col">
                                            <div className="review-content">
                                                <p>{review.comment}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </ProductDetails>
      </div>
      
    </Box>
  );
}
