import { RSS2JSON_API_ENDPOINT } from '../_constants.js';

export const fetchFeed = async url => {
  const res = await fetch(RSS2JSON_API_ENDPOINT + url);

  if (!res.ok) {
    throw new Error('Error fetching data');
  }

  const data = await res.json();

  console.log(data);

  return data;
};
