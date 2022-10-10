import WebStorage from '@georapbox/web-storage';

const FEDDS_URLS_KEY = 'feeds';

export const storage = WebStorage.createInstance({
  driver: 'localStorage',
  keyPrefix: 'rss-reader/'
});

export const getFeeds = () => {
  return storage.getItem(FEDDS_URLS_KEY) || [];
};

export const setFeeds = (feeds, shouldDispatchEvent = true) => {
  if (!Array.isArray(feeds)) {
    return;
  }

  let status = 'done';

  storage.setItem(FEDDS_URLS_KEY, feeds, () => {
    status = 'error';
  });

  if (status === 'done' && shouldDispatchEvent) {
    document.dispatchEvent(new CustomEvent('feeds-updated', {
      bubbles: true,
      detail: {
        action: 'set',
        feeds
      }
    }));
  }
};

export const saveFeed = (feed, shouldDispatchEvent = true) => {
  const feeds = getFeeds();
  const foundFeed = feeds.find(f => f.url === feed.url);
  let action = '';

  if (foundFeed) {
    foundFeed.url = feed.url;
    action = 'edit';
  } else {
    feeds.push(feed);
    action = 'add';
  }

  let status = 'done';

  storage.setItem(FEDDS_URLS_KEY, feeds, () => {
    status = 'error';
  });

  if (status === 'done' && shouldDispatchEvent) {
    document.dispatchEvent(new CustomEvent('feeds-updated', {
      bubbles: true,
      detail: {
        action,
        feed
      }
    }));
  }
};

export const deleteFeed = (feedUrl, shouldDispatchEvent = true) => {
  let status = 'done';
  const feeds = getFeeds();
  const filteredFeeds = feeds.filter(f => f.url !== feedUrl);

  storage.setItem(FEDDS_URLS_KEY, filteredFeeds, () => {
    status = 'error';
  });

  if (status === 'done' && shouldDispatchEvent) {
    document.dispatchEvent(new CustomEvent('feeds-updated', {
      bubbles: true,
      detail: {
        action: 'delete',
        feed: {
          url: feedUrl
        }
      }
    }));
  }
};
