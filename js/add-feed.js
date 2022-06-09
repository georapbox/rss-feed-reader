import { saveFeed } from './helpers/storage.js';

const form = document.forms['addFeedForm'];

form.addEventListener('submit', evt => {
  evt.preventDefault();
  const input = evt.target['feed-url'];
  saveFeed({ url: input.value, active: true });
  input.value = '';
});
