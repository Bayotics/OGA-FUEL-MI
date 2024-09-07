import React, { useContext, useEffect, useReducer, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Store } from '../Store';
import { getError } from '../utils';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Button from 'react-bootstrap/Button';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    case 'UPDATE_REQUEST':
      return { ...state, loadingUpdate: true };
    case 'UPDATE_SUCCESS':
      return { ...state, loadingUpdate: false };
    case 'UPDATE_FAIL':
      return { ...state, loadingUpdate: false };
    case 'UPLOAD_REQUEST':
      return { ...state, loadingUpload: true, errorUpload: '' };
    case 'UPLOAD_SUCCESS':
      return {
        ...state,
        loadingUpload: false,
        errorUpload: '',
      };
    case 'UPLOAD_FAIL':
      return { ...state, loadingUpload: false, errorUpload: action.payload };
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
export default function ProductEditScreen() {
  const navigate = useNavigate();
  const params = useParams(); // /product/:id
  const { id: productId } = params;

  const { state } = useContext(Store);
  const { userInfo } = state;
  const [{ loading, error, loadingUpdate, loadingUpload, loadingDelete, successDelete}, dispatch] =
    useReducer(reducer, {
      loading: true,
      error: '',
    });

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [description, setDescription] = useState('');
  const [longDescription, setLongDescription] = useState('');

  const categoriesList = [
    "", "Petrol", "Diesel", "CNG", "LPG",
  ]
  categoriesList.sort();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/products/${productId}`);
        setTitle(data.title);
        setPrice(data.price);
        setImage(data.image);
        setImages(data.images);
        setCategory(data.category);
        setCountInStock(data.countInStock);
        setDescription(data.description);
        setLongDescription(data.longDescription);
        dispatch({ type: 'FETCH_SUCCESS' });
      } catch (err) {
        dispatch({
          type: 'FETCH_FAIL',
          payload: getError(err),
        });
      }
    };

    if (successDelete) {
      dispatch({ type: 'DELETE_RESET' });
    } else {
      fetchData();
    }
    fetchData();
  }, [productId, successDelete]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: 'UPDATE_REQUEST' });
      await axios.put(
        `/api/products/${productId}`,
        {
          _id: productId,
          title,
          price,
          image,
          images,
          category,
          countInStock,
          description,
          longDescription
        },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: 'UPDATE_SUCCESS',
      });
      toast.success('Product updated successfully');
      navigate('/admin/products');
    } catch (err) {
      toast.error(getError(err));
      dispatch({ type: 'UPDATE_FAIL' });
    }
  };
  const uploadFileHandler = async (e, forImages) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('file', file);
    try {
      dispatch({ type: 'UPLOAD_REQUEST' });
      const { data } = await axios.post('/api/upload', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          authorization: `Bearer ${userInfo.token}`,
        },
      });
      dispatch({ type: 'UPLOAD_SUCCESS' });

      if (forImages) {
        setImages([...images, data.secure_url]);
      } else {
        setImage(data.secure_url);
      }
      toast.success('Image uploaded successfully. click Update to apply it');
    } catch (err) {
      toast.error(getError(err));
      dispatch({ type: 'UPLOAD_FAIL', payload: getError(err) });
    }
  };
  const deleteFileHandler = async (fileName, f) => {
    console.log(fileName, f);
    console.log(images);
    console.log(images.filter((x) => x !== fileName));
    setImages(images.filter((x) => x !== fileName));
    toast.success('Image removed successfully');
  };
  const cancelHandler = async () => {
        navigate('/admin/products');
  };
  return (
    <div className="px-40 pt-10 mb-48">
      <Helmet>
        <title>Edit Product ${productId}</title>
      </Helmet>
      <h1 className="text-center text-3xl font-semibold">Edit Product</h1>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <form onSubmit={submitHandler} className='mt-10'>
          <div className="mb-3">
            <h1 className='font-semibold'>Name</h1>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className='w-full border pl-2 py-2'
            />
          </div>
          <div className="mb-3">
            <h1 className='font-semibold'>Price in ₦ per Litre/Kg</h1>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              className='w-full border pl-2 py-2'
              type='number'
            />
          </div>
          <div className="mb-3">
            <h1 className='font-semibold'>Image</h1>
            <input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
              className='w-full border pl-2 py-2'
            />
          </div>
          <div className="mb-3">
            <h1 className='font-semibold'>Upload Image</h1>
            <input
              type="file" onChange={uploadFileHandler}
              required
              className='w-full border pl-2 py-2'
            />
            {loadingUpload && <LoadingBox></LoadingBox>}
          </div>
          <div className="mb-3">
            <h1 className='font-semibold'>Category</h1>
            <select 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className='w-full border pl-2 py-2'
            >
              {categoriesList.map((e) => {
                return(
                  <option key = {e}>{e}</option>
                )
              })}
            </select>
          </div>
          <div className="mb-3">
            <h1 className='font-semibold'>Description</h1>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className='w-full border pl-2 py-2'
            />
          </div>
          <div className="mb-3">
            <h1 className='font-semibold'>Long Description</h1>
            <textarea
              value={longDescription}
              onChange={(e) => setLongDescription(e.target.value)}
              required
              className='w-full border pl-2 py-2'
              placeholder='More details about your product'
              rows={10}
            />
          </div>
          <div className="mb-3 flex gap-4">
            <button disabled={loadingUpdate}
             className="px-4 text-center py-3 bg-[#1a2eeb] hover:bg-black text-white mt-4" type="submit">
              Update
            </button>
            {loadingUpdate && <LoadingBox></LoadingBox>}
            <button
              className='px-4 text-center py-3 bg-red-500 hover:bg-black text-white mt-4'
              type="button"
              variant="danger"
              onClick={cancelHandler}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}