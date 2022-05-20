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
    <div className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Search for news</label>
          <input
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
