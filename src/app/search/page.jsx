import React from 'react';
import { ResultList } from '../components/ResultList';
export const getData = async () => {
  const res = await fetch(`http://localhost:3000/api/search`);
  return res.json();
};
const SearchPage = async () => {
  const data = await getData();

  return (
    <>
      <ResultList data={data} />
    </>
  );
};

export default SearchPage;
