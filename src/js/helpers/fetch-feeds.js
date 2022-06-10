export const fetchFeed = async url => {
  const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=' + url);

  if (!res.ok) {
    throw new Error('Error fetching data');
  }

  return await res.json();
};
