import WebStorage from '../../node_modules/@georapbox/web-storage/dist/WebStorage.esm.js';

const FEDDS_URLS_STORAGE_KEY = 'feeds';

export const storage = WebStorage.createInstance({
  driver: 'localStorage',
  keyPrefix: 'rss-reader/'
});

export const getFeeds = () => {
  return storage.getItem(FEDDS_URLS_STORAGE_KEY) || [];
};

export const setFeeds = feeds => {
  return storage.setItem(FEDDS_URLS_STORAGE_KEY, feeds);
};

export const saveFeed = feed => {
  const feeds = getFeeds();
  const foundFeed = feeds.find(f => f.url === feed.url);

  if (foundFeed) {
    foundFeed.url = feed.url;
    foundFeed.active = feed.active;
  } else {
    feeds.push(feed);
  }

  let status = 'done';

  storage.setItem(FEDDS_URLS_STORAGE_KEY, feeds, () => {
    status = 'error';
  });

  if (status === 'done') {
    document.dispatchEvent(new CustomEvent('feeds-updated', {
      bubbles: true,
      detail: { feed }
    }));
  }
};
