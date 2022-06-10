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
  checkboxContainer.className = 'form-check form-switch mb-0';
  checkboxContainer.appendChild(switchInput);

  const deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.title = 'Delete feed';
  deleteButton.className = 'btn btn-link text-danger p-1';
  deleteButton.style.lineHeight = '1';
  deleteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16"><path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/></svg>';

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

editFeedsToggle.open = ['open', null].includes(getFeedsOptionsStatus());
editFeedsToggle.addEventListener('toggle', evt => setFeedsOptionsStatus(evt.target.open ? 'open' : 'closed'));
