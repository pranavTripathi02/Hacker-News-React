import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [news, setNews] = useState([]);
  const [id, setId] = useState('1');
  const [newsDetails, setNewsDetails] = useState({});
  const [sort, setSort] = useState('search');

  // console.log('news: ', news);

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          `http://hn.algolia.com/api/v1/${sort}?query=${search}&tags=story`
        );
        // console.log('data', data.hits);
        if (data.hits) {
          const newNews = data.hits.map((item) => {
            const {
              title,
              url,
              author,
              created_at,
              num_comments,
              objectID,
              points,
            } = item;
            return {
              title,
              url,
              author,
              created_at,
              num_comments,
              objectID,
              points,
            };
          });
          setNews(newNews);
        } else {
          setNews([]);
        }
      } catch (err) {
        console.error('error from context ', err);
      }
      setIsLoading(false);
    };
    fetchNews();
  }, [search, sort]);

  useEffect(() => {
    const fetchDetails = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          `http://hn.algolia.com/api/v1/items/${id}`
        );
        // console.log('data: ', data);
        setNewsDetails({ data });
      } catch (err) {
        console.error(err);
      }
      setIsLoading(false);
    };
    fetchDetails();
  }, [id]);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        setSearch,
        news,
        setId,
        newsDetails,
        setSort,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
