import WebStorage from '@georapbox/web-storage';

const FEDDS_URLS_KEY = 'feeds';
const FEEDS_OPTIONS_STATUS_KEY = 'feeds_options_status';
const SHOW_THUMBS_KEY = 'show_thumbs';
const EXPAND_ARTICLES_KEY = 'expand_articles';

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

export const getShowThumbs = () => {
  return storage.getItem(SHOW_THUMBS_KEY);
};

export const setShowThumbs = value => {
  return storage.setItem(SHOW_THUMBS_KEY, value);
};

export const getExpandArticles = () => {
  return storage.getItem(EXPAND_ARTICLES_KEY);
};

export const setExpandArticles = value => {
  return storage.setItem(EXPAND_ARTICLES_KEY, value);
};
