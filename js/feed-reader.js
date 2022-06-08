import { getFeedsUrls } from './feeds-urls-storage.js';
import { fetchFeed } from './helpers/fetch-feeds.js';

const feedsReaderTemplate = (data, item) => {
  return /* html */`
    <div class="card mb-4 shadow border-0">
      <div class="card-body">
        <div class="d-block d-md-flex align-items-start flex-wrap">
          <img src="${item.thumbnail}" alt="${item.title}" class="me-3 mb-3 rounded" width="150">

          <div style="flex: 1;">
            <a href="${item.link}" target="_blank" rel="noreferrer noopener" class="text-decoration-none">
              <h5 class="card-title">${item.title}</h5>
            </a>

            <p class="mb-0 "><strong>From:</strong> ${data.feed.title}</p>
            <p class="mb-0 "><strong>Author:</strong> ${item.author || '-'}</p>
            <p class=""><strong>Published Date:</strong> ${item.pubDate}</p>
          </div>
        </div>

        ${item.description}
      </div>
    </div>
  `;
};

const renderFeeds = () => {
  const feedsUrls = getFeedsUrls().asArray();

  feedsUrls.forEach(async url => {
    try {
      const data = await fetchFeed(url);

      data.items.forEach(item => {
        const content = document.getElementById('feedsContent');
        content.insertAdjacentHTML('beforeend', feedsReaderTemplate(data, item));
      });
    } catch (error) {
      // TODO Improve error handling
      console.error(error);
    }
  });
};

renderFeeds();
