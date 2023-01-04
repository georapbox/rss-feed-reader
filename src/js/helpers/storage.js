import { set, get } from 'idb-keyval';

const STORAGE_PREFIX = 'rss-reader/';
const STORAGE_FEEDS_KEY = 'feeds';

const getItem = async key => {
  try {
    return {
      value: await get(key),
      error: void 0
    };
  } catch (error) {
    return {
      value: void 0,
      error
    };
  }
};

const setItem = async (key, data) => {
  try {
    await set(key, data);

    return {
      error: void 0
    };
  } catch (error) {
    return { error };
  }
};

export const getFeeds = async () => {
  return getItem(STORAGE_PREFIX + STORAGE_FEEDS_KEY);
};

export const setFeeds = async (feeds, shouldDispatchEvent = true) => {
  if (!Array.isArray(feeds)) {
    return;
  }

  const { error } = await setItem(STORAGE_PREFIX + STORAGE_FEEDS_KEY, feeds);

  if (!error && shouldDispatchEvent) {
    document.dispatchEvent(new CustomEvent('feeds-updated', {
      bubbles: true,
      detail: {
        action: 'set',
        feeds
      }
    }));
  }

  return { error };
};

export const saveFeed = async (feed, shouldDispatchEvent = true) => {
  const { value: feeds = [] } = await getFeeds();
  const foundFeed = feeds.find(f => f.url === feed.url);
  let action = '';

  if (foundFeed) {
    foundFeed.url = feed.url;
    action = 'edit';
  } else {
    feeds.push(feed);
    action = 'add';
  }

  const { error } = await setItem(STORAGE_PREFIX + STORAGE_FEEDS_KEY, feeds);

  if (!error && shouldDispatchEvent) {
    document.dispatchEvent(new CustomEvent('feeds-updated', {
      bubbles: true,
      detail: {
        action,
        feed
      }
    }));
  }

  return { error };
};

export const deleteFeed = async (feedUrl, shouldDispatchEvent = true) => {
  const { value: feeds = [] } = await getFeeds();
  const filteredFeeds = feeds.filter(f => f.url !== feedUrl);

  const { error } = await setItem(STORAGE_PREFIX + STORAGE_FEEDS_KEY, filteredFeeds);

  if (!error && shouldDispatchEvent) {
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

  return { error };
};
