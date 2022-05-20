import React from 'react';

export default function News({ title, author }) {
  return (
    <article className='news'>
      <div className='news-item'>
        <h3>{title}</h3>
        <h4>{author}</h4>
      </div>
    </article>
  );
}
