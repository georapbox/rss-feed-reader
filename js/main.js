import './add-feed.js';
import { renderFeedReader } from './feed-reader.js';
import { renderFeedsOptions } from './edit-feeds.js';

renderFeedsOptions();
renderFeedReader();

document.addEventListener('feeds-updated', evt => {
  console.log('Feeds updated', evt.detail.feed);
  renderFeedsOptions();
  renderFeedReader();
});
