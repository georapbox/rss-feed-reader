import { FEDDS_URLS_STORAGE_KEY } from './_constants.js';

export const getFeedsUrls = () => {
  let urls;

  try {
    urls = localStorage.getItem(FEDDS_URLS_STORAGE_KEY);
  } catch (error) {
    console.error(error);
  }

  return {
    asString: () => urls || '',
    asArray: () => urls ? urls.split(',').filter(Boolean) : []
  };
};

export const setFeedUrls = feedUrl => {
  const urls = getFeedsUrls().asString();

  if (urls.includes(feedUrl)) {
    alert(`Feed URL "${feedUrl}" already exists.`); // TODO Improve error handling
    return false;
  }

  localStorage.setItem(FEDDS_URLS_STORAGE_KEY, urls ? urls + ',' + feedUrl : feedUrl);

  document.dispatchEvent(new CustomEvent('feed-added', {
    bubbles: true,
    detail: { feedUrl }
  }));

  return true;
};
