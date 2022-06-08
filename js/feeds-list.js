import { getFeedsUrls } from './feeds-urls-storage.js';

const handleRemoveFeed = evt => {
  if (evt.target.tagName === 'BUTTON' || evt.target.tagName === 'IMG') {
    const feedItem = evt.target.closest('li');
    const feedUrl = feedItem.getAttribute('data-feedurl');
    console.log(feedUrl);
  }
};

export const createFeedsList = () => {
  const feedsUrls = getFeedsUrls().asArray();
  const feedsList = document.getElementById('feedsList');

  feedsList.removeEventListener('click', handleRemoveFeed);
  feedsList.addEventListener('click', handleRemoveFeed);

  feedsList.innerHTML = '';

  feedsUrls.forEach(url => {
    feedsList.innerHTML += /* html */`
    <li class="list-group-item d-flex justify-content-between align-items-center" data-feedurl="${url}">
      <span class="text-truncate">
        ${url}
      </span>
      <button type="button" class="btn btn-sm btn-link">
        <img src="assets/icons/trash-fill.svg" class="text-danger" />
        <span class="visually-hidden">Remove</span>
      </button>
    </li>
  `;
  });
};
