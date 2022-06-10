import { getFeeds, saveFeed } from './helpers/storage.js';

const form = document.forms['addFeedForm'];

form.addEventListener('submit', evt => {
  evt.preventDefault();

  const input = evt.target['feed-url'];
  const { value } = input;

  if (getFeeds().find(f => f.url === value)) {
    return alert(`Feed URL "${value}" already exists.`);
  }

  saveFeed({ url: input.value, active: false }); // FIXME Change "active" to true

  input.value = '';
});
