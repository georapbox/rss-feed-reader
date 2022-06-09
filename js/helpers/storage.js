import WebStorage from '../../node_modules/@georapbox/web-storage/dist/WebStorage.esm.js';

const FEDDS_URLS_KEY = 'feeds';
const FEEDS_OPTIONS_STATUS_KEY = 'feeds_options_status';

export const storage = WebStorage.createInstance({
  driver: 'localStorage',
  keyPrefix: 'rss-reader/'
});

export const getFeeds = () => {
  return storage.getItem(FEDDS_URLS_KEY) || [];
};

export const saveFeed = feed => {
  const feeds = getFeeds();
  const foundFeed = feeds.find(f => f.url === feed.url);
  let action = '';

  if (foundFeed) {
    foundFeed.url = feed.url;
    foundFeed.active = feed.active;
    action = 'edit';
  } else {
    feeds.push(feed);
    action = 'add';
  }

  let status = 'done';

  storage.setItem(FEDDS_URLS_KEY, feeds, () => {
    status = 'error';
  });

  if (status === 'done') {
    document.dispatchEvent(new CustomEvent('feeds-updated', {
      bubbles: true,
      detail: { action, feed }
    }));
  }
};

export const deleteFeed = feedUrl => {
  let status = 'done';
  const feeds = getFeeds();
  const filteredFeeds = feeds.filter(f => f.url !== feedUrl);

  storage.setItem(FEDDS_URLS_KEY, filteredFeeds, () => {
    status = 'error';
  });

  if (status === 'done') {
    document.dispatchEvent(new CustomEvent('feeds-updated', {
      bubbles: true,
      detail: {
        action: 'delete',
        feed: { url: feedUrl }
      }
    }));
  }
};

export const getFeedsOptionsStatus = () => {
  return storage.getItem(FEEDS_OPTIONS_STATUS_KEY);
};

export const setFeedsOptionsStatus = value => {
  storage.setItem(FEEDS_OPTIONS_STATUS_KEY, value);
};
