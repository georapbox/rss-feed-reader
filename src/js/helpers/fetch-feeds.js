const cache = new Map();

export const fetchFeed = async url => {
  const cachedFeed = cache.get(url);

  if (cachedFeed) {
    return cachedFeed;
  }

  const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=' + url);

  if (!res.ok) {
    throw new Error('Error fetching data');
  }

  const json = await res.json();

  cache.set(url, json);

  return json;
};
