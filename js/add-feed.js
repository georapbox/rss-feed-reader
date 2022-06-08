import { setFeedUrls } from './feeds-urls-storage.js';

const form = document.forms['addFeedForm'];

form.addEventListener('submit', evt => {
  evt.preventDefault();

  const input = evt.target['feed-url'];
  const isSaved = setFeedUrls(input.value);

  if (isSaved) {
    input.value = '';
  }
});
