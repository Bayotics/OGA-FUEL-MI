import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { useNavigate } from 'react-router-dom';

export default function SearchBox() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    if(query !== ''){
        navigate(query ? `/search/?query=${query}` : '/search');
        e.target.reset();
    }
  };

  return (
    <Form className='w-11/12 pl-2 border border-black' id = "search-bar" onSubmit={submitHandler}>
      <div className='flex w-full h-8'>
        <InputGroup className='w-full pr-2'>
          <input
            className='h-full w-[96%] rounded-none'
            type="text"
            name="q"
            id="q"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="search Product"
            aria-label="Search Products"
            aria-describedby="button-search"
          ></input>

          <button className = 'float-right mt-1' type="submit" id="button-search">
            <i className="fas fa-search"></i>
          </button>
        </InputGroup>
      </div>
      
    </Form>
  );
}