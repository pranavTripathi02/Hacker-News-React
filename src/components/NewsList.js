import React from 'react';
import { useGlobalContext } from '../context';
import News from './News';

export default function NewsList() {
  const { news, isLoading } = useGlobalContext();

  // if(isLoading) return <Loading />

  if (news.length < 1) {
    return (
      <h2 className='section-title'>no news matched the search criteria</h2>
    );
  }

  return (
    <section className='section'>
      <h2 className='section-title'>news</h2>
      <div className='news-center'>
        {news.map((item) => {
          return <News key={item.objectID} {...item} />;
        })}
      </div>
    </section>
  );

  return <div>NewsList</div>;
}
