import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import { useGlobalContext } from '../context';

export default function Details() {
  const { setId, newsDetails, isLoading } = useGlobalContext();
  const { title, author, points, children, url } = newsDetails.data;

  const id = useParams().id;
  setId(id);
  // useEffect(() => {
  //   setId(id);
  // }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  // console.log(newsDetails.data);

  return (
    <>
      <div className='m-3 container'>
        <h2>{title}</h2>
        <h4 className='text-muted'>
          <span className='fst-italic text-lowercase'>written by </span>
          {author}
        </h4>
        <h5 className='text-success'>
          <i className='far fa-arrow-alt-circle-up m-0 me-2' />
          {points}
        </h5>
        <span className='text-muted pb-5'>
          {newsDetails.data.created_at.split('T')[0]}
        </span>
        <div className='fs-5'>
          URL:
          <a href={url} className='ms-2 d-inline text-link'>
            {url}
          </a>
        </div>
        <div className='mt-2 ms-1'>
          <h4 className='mt-2'>comments</h4>
          <ul>
            {children.map((comment) => {
              return (
                <li className='comment-item p-2 my-2' key={comment.id}>
                  <h5 className='m-0'>{comment.author}</h5>
                  <span className='text-muted'>
                    {comment.created_at.split('T')[0]}
                  </span>
                  <span>{comment.points}</span>
                  <div
                    className='mt-1'
                    dangerouslySetInnerHTML={{ __html: comment.text }}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
