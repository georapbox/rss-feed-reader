import 'bootstrap/dist/css/bootstrap.css';
import '../css/main.css';
import './add-feed.js';
import { renderFeedReader } from './feed-reader.js';
import { renderFeeds, addFeed, removeFeed, updateFeedStatus } from './feeds-list.js';

const reloadInfo = document.getElementById('reloadInfo');

renderFeeds();
renderFeedReader();

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

  reloadInfo.classList.remove('d-none');
});
