import { getFeeds, saveFeed, deleteFeed, setFeedsOptionsStatus, getFeedsOptionsStatus } from './helpers/storage.js';

const editFeedsToggle = document.getElementById('editFeedsToggle');
const editFeedsContainer = document.getElementById('editFeedsContainer');
const feedsList = document.getElementById('feedsList');

const handleFeedActions = evt => {
  const target = evt.target;
  const [switchInput, deleteButton] = [target.closest('input'), target.closest('button')];

  if (!switchInput && !deleteButton) {
    return;
  }

  const feedItem = target.closest('li');
  const feedUrl = feedItem.getAttribute('data-feedurl');

  if (switchInput) {
    saveFeed({ url: feedUrl, active: target.checked });
  } else if (deleteButton) {
    deleteFeed(feedUrl);
  }
};

const toggleFeedsVisibility = () => {
  const feeds = getFeeds();
  editFeedsContainer.classList.toggle('d-none', feeds.length === 0);
};

export const addFeed = feed => {
  const textContainer = document.createElement('span');
  textContainer.className = 'text-truncate';
  textContainer.textContent = feed.url;

  const switchInput = document.createElement('input');
  switchInput.className = 'form-check-input';
  switchInput.type = 'checkbox';
  switchInput.role = 'switch';
  switchInput.toggleAttribute('checked', feed.active);

  const checkboxContainer = document.createElement('div');
  checkboxContainer.className = 'form-check form-switch';
  checkboxContainer.appendChild(switchInput);

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

  toggleFeedsVisibility();
};

export const updateFeedStatus = feed => {
  const listItem = feedsList.querySelector(`[data-feedurl="${feed.url}"]`);

  if (listItem) {
    const switchInput = listItem.querySelector('input[type="checkbox"]');
    switchInput && switchInput.toggleAttribute('checked', feed.active);
  }
};

export const removeFeed = feed => {
  const listItem = feedsList.querySelector(`[data-feedurl="${feed.url}"]`);
  listItem && listItem.remove();
  toggleFeedsVisibility();
};

export const renderFeeds = () => {
  const feeds = getFeeds();
  feedsList.addEventListener('click', handleFeedActions);
  toggleFeedsVisibility();
  feeds.forEach(addFeed);
};

editFeedsToggle.open = getFeedsOptionsStatus();
editFeedsToggle.addEventListener('toggle', evt => setFeedsOptionsStatus(evt.target.open));
