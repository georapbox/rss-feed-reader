import { getFeeds, saveFeed } from './helpers/storage.js';

const handleFeedStatusChange = evt => {
  if (evt.target.tagName === 'INPUT') {
    const feedItem = evt.target.closest('li');
    const feedUrl = feedItem.getAttribute('data-feedurl');
    const feeds = getFeeds();
    const foundFeed = feeds.find(f => f.url === feedUrl);

    if (foundFeed) {
      foundFeed.active = evt.target.checked;
      saveFeed(foundFeed);
    }
  }
};

export const renderFeedsOptions = () => {
  const editFeedsContainer = document.getElementById('editFeedsContainer');
  const feedsList = document.getElementById('feedsList');
  const feeds = getFeeds();

  feedsList.removeEventListener('change', handleFeedStatusChange);
  feedsList.addEventListener('change', handleFeedStatusChange);

  editFeedsContainer.classList.toggle('d-none', feeds.length === 0);

  feedsList.innerHTML = '';

  feeds.forEach(feed => {
    const listItem = document.createElement('li');
    const textContainer = document.createElement('span');
    const checkboxContainer = document.createElement('div');
    const checkbox = document.createElement('input');

    listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
    listItem.setAttribute('data-feedurl', feed.url);

    textContainer.className = 'text-truncate';
    textContainer.textContent = feed.url;

    checkboxContainer.className = 'form-check form-switch';

    checkbox.className = 'form-check-input';
    checkbox.type = 'checkbox';
    checkbox.role = 'switch';
    checkbox.checked = feed.active;

    checkboxContainer.appendChild(checkbox);
    listItem.appendChild(textContainer);
    listItem.appendChild(checkboxContainer);
    feedsList.appendChild(listItem);
  });
};
