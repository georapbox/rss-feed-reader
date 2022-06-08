import './feed-reader.js';
import './add-feed.js';
import { createFeedsList } from './feeds-list.js';

createFeedsList();

document.addEventListener('feed-added', evt => {
  console.log('New feed added', evt.detail.feedUrl);
  // document.querySelector('details').open = true;
  createFeedsList();
});
