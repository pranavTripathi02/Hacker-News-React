import React from 'react';
import { Link } from 'react-router-dom';

export default function News({ title, author, points, created_at, objectID }) {
  return (
    <article className='news-item p-2 ps-3'>
      <Link
        to={`/details/${objectID}`}
        className='text-decoration-none text-muted'
      >
        <h4>{title}</h4>
        <div className='text-secondary'>
          <i className='far fa-thumbs-up' />
          <span className='d-inline me-2'>{points}</span>
          <span className='d-inline'>{created_at.split('T')[0]}</span>
        </div>
        <h5>
          <span className='fst-italic text-lowercase'>by </span>
          {author}
        </h5>
      </Link>
    </article>
  );
}
