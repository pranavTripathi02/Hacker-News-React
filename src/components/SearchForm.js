import React, { useEffect, useRef } from 'react';
import { useGlobalContext } from '../context';

export default function SearchForm() {
  const { setSearch } = useGlobalContext();
  const searchVal = useRef('');

  useEffect(() => {
    searchVal.current.focus();
  }, []);

  const searchChange = () => {
    setSearch(searchVal.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='d-flex text-center m-3'>
      <form className='container-fluid' onSubmit={handleSubmit}>
        <div className='input-group'>
          {/* <label htmlFor='name'></label> */}
          <span className='input-group-text'>
            <i className='fas fa-search' />
          </span>
          <input
            className='form-control form-control-lg'
            placeholder='Search for news'
            type='text'
            id='name'
            ref={searchVal}
            onChange={searchChange}
          />
        </div>
      </form>
    </div>
  );
}
