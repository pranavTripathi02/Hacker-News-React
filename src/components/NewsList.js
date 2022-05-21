import React from 'react';
import { useGlobalContext } from '../context';
import News from './News';
import Loading from './Loading';

export default function NewsList() {
  const { news, isLoading } = useGlobalContext();

  // const [formSwitch, setFormSwitch] = useState(sort);

  console.log(news);
  if (isLoading) return <Loading />;

  // if (news.length < 1) {
  //   return (
  //     <h2 className='section-title'>no news matched the search criteria</h2>
  //   );
  // }

  // const handleChange = () => {
  //   setFormSwitch(!formSwitch);
  //   if (formSwitch) setSort('search_by_date');
  //   else setSort('search');
  // };

  return (
    <>
      {news.length < 1 && (
        <h2 className='section-title'>no news matched the search criteria</h2>
      )}
      {news.length > 1 && (
        <>
          <section className='section'>
            <h1 className='text-center text-uppercase news-title'>News</h1>
            {/* <div className='d-flex form-check form-switch'>
              <input
                className='form-check-input ms-auto'
                type='checkbox'
                role='switch'
                id='sort'
                onChange={() => {
                  handleChange();
                }}
              />
              <label className='form-check-label ms-2 me-5'>Sort by new</label>
            </div> */}
            <div className='news-center'>
              {news.map((item) => {
                return <News key={item.objectID} {...item} />;
              })}
            </div>
          </section>
        </>
      )}
    </>
  );
}
