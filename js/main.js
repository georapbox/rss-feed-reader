import './add-feed.js';
import { renderFeedReader } from './feed-reader.js';
import { renderFeeds, addFeed, removeFeed, updateFeedStatus } from './feeds-list.js';

renderFeeds();
// renderFeedReader();

document.addEventListener('feeds-updated', evt => {
  if (evt.detail.action === 'edit') {
    updateFeedStatus(evt.detail.feed);
  }

  if (evt.detail.action === 'delete') {
    removeFeed(evt.detail.feed);
  }

  if (evt.detail.action === 'add') {
    addFeed(evt.detail.feed);
  }

  // renderFeedReader(); // TODO Prompt user to manually reload feeds to avoid unnecessary requests
});
