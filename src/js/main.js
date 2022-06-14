import 'construct-style-sheets-polyfill/dist/adoptedStyleSheets.js';
import { styleSheets } from './helpers/styles.js';
import './components/site-header.js';
import './components/site-footer.js';
import './components/add-feed.js';
import './components/feeds-list.js';
import './components/feed-reader.js';

document.adoptedStyleSheets = styleSheets;
