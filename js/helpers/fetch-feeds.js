export const fetchFeed = async url => {
  const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=' + url);

  if (!res.ok) {
    throw new Error('Error fetching data');
  }

  const data = await res.json();

  console.log(data); // FIXME Remove in production

  return data;
};
