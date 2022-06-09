import './add-feed.js';
import { renderFeedReader } from './feed-reader.js';
import { renderFeedsOptions } from './edit-feeds.js';

renderFeedsOptions();
// renderFeedReader();

document.addEventListener('feeds-updated', () => {
  renderFeedsOptions(); // TODO Handle updates in a more optimal way. eg no need to render the whole list from scratch
  // renderFeedReader(); // TODO Prompt user to manuall reload feeds to avoid unnecessary requests
});
