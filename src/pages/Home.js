import React from 'react';
import { useGlobalContext } from '../context';
import SearchForm from '../components/SearchForm';
import NewsList from '../components/NewsList';

export default function Home() {
  return (
    <main>
      <SearchForm />
      <NewsList />
    </main>
  );
}
