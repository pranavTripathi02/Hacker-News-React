import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `http://hn.algolia.com/api/v1/search?query=${search}&tags=story`
      );
      console.log('data', data.hits);
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
      console.log('error from context ', err);
    }
    setIsLoading(false);
  };
  console.log('news: ', news);
  useEffect(() => {
    fetchNews();
  }, [search]);
  return (
    <AppContext.Provider
      value={{ isLoading, setIsLoading, search, setSearch, news }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
