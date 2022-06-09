import { getFeeds, setFeeds, saveFeed, setFeedsOptionsStatus, getFeedsOptionsStatus } from './helpers/storage.js';

const editFeedsToggle = document.getElementById('editFeedsToggle');

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

const handleFeedDelete = evt => {
  if (evt.target.tagName === 'BUTTON' || evt.target.tagName === 'IMG') {
    const feedItem = evt.target.closest('li');
    const feedUrl = feedItem.getAttribute('data-feedurl');
    const feeds = getFeeds();
    const filteredFeeds = feeds.filter(f => f.url !== feedUrl);

    setFeeds(filteredFeeds);
  }
};

export const renderFeedsOptions = () => {
  const editFeedsContainer = document.getElementById('editFeedsContainer');
  const feedsList = document.getElementById('feedsList');
  const feeds = getFeeds();

  feedsList.removeEventListener('change', handleFeedStatusChange);
  feedsList.addEventListener('change', handleFeedStatusChange);
  feedsList.removeEventListener('click', handleFeedDelete);
  feedsList.addEventListener('click', handleFeedDelete);

  editFeedsContainer.classList.toggle('d-none', feeds.length === 0);

  feedsList.innerHTML = '';

  feeds.forEach(feed => {
    const textContainer = document.createElement('span');
    textContainer.className = 'text-truncate';
    textContainer.textContent = feed.url;

    const checkbox = document.createElement('input');
    checkbox.className = 'form-check-input';
    checkbox.type = 'checkbox';
    checkbox.role = 'switch';
    checkbox.checked = feed.active;

    const checkboxContainer = document.createElement('div');
    checkboxContainer.className = 'form-check form-switch';
    checkboxContainer.appendChild(checkbox);

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.title = 'Delete feed';
    deleteButton.className = 'btn btn-link p-1';
    deleteButton.style.lineHeight = '1';
    deleteButton.innerHTML = '<img src="../assets/icons/trash-fill.svg" width="20" height="20">';

    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'd-flex align-items-center gap-2';
    optionsContainer.appendChild(checkboxContainer);
    optionsContainer.appendChild(deleteButton);

    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
    listItem.setAttribute('data-feedurl', feed.url);
    listItem.appendChild(textContainer);
    listItem.appendChild(optionsContainer);

    feedsList.appendChild(listItem);
  });
};

editFeedsToggle.open = getFeedsOptionsStatus();

editFeedsToggle.addEventListener('toggle', evt => {
  setFeedsOptionsStatus(evt.target.open);
});
